"use client";

import {
    Children,
    cloneElement,
    ReactElement,
    useEffect,
    useState,
    useId,
} from "react";

import { AnimatePresence, Transition, motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { Category } from "@/app/(routes)/(home)/_components/Projects/projects-data";
import { useActiveCategory } from "@/hooks/use-active-category";

type AnimatedBackgroundProps = {
    children:
        | ReactElement<{ "data-id": string }>[]
        | ReactElement<{ "data-id": string }>;
    defaultValue?: string;
    onValueChange?: (newActiveId: string | null) => void;
    className?: string;
    transition?: Transition;
    enableHover?: boolean;
};

export default function AnimatedBackground({
    children,
    defaultValue,
    onValueChange,
    className,
    transition,
    enableHover = false,
}: AnimatedBackgroundProps) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const uniqueId = useId();

    const { activeCategory, setActiveCategory } = useActiveCategory();

    const handleSetActiveId = (id: string | null) => {
        setActiveId(id);

        if (onValueChange) {
            onValueChange(id);
        }
    };

    useEffect(() => {
        if (defaultValue !== undefined) {
            setActiveId(defaultValue);
        }
    }, [defaultValue]);

    return Children.map(children, (child: any, index) => {
        const id = child.props["data-id"];

        const interactionProps = enableHover
            ? {
                  onMouseEnter: () => handleSetActiveId(id),
                  onMouseLeave: () => handleSetActiveId(null),
              }
            : {
                  onClick: () => {
                      handleSetActiveId(id);
                      setActiveCategory(
                          Category[
                              child.props.children as keyof typeof Category
                          ],
                      );
                      console.log(activeCategory);
                      console.log("clicked");
                  },
              };

        return cloneElement(
            child,
            {
                key: index,
                className: cn("relative inline-flex", child.props.className),
                "aria-selected": activeId === id,
                "data-checked": activeId === id ? "true" : "false",
                ...interactionProps,
            },
            <>
                <AnimatePresence initial={false}>
                    {activeId === id && (
                        <motion.div
                            layoutId={`background-${uniqueId}`}
                            className={cn("absolute inset-0", className)}
                            transition={transition}
                            initial={{ opacity: defaultValue ? 1 : 0 }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                        />
                    )}
                </AnimatePresence>
                <span
                    className={cn(
                        "z-10 transition-colors duration-300 ease-in",
                        activeId === id && "text-white",
                    )}
                >
                    {child.props.children}
                </span>
            </>,
        );
    });
}
