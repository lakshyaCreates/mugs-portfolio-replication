import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

import { MenuCurveSvg } from "./menu-curve-svg";

export const MenuCurveContainer = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            variants={{
                initial: { x: "-107%" },
                enter: {
                    x: "0%",
                    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                },
                exit: {
                    x: "-107%",
                    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
                },
            }}
            initial="initial"
            animate="enter"
            exit="exit"
            className={cn(
                "max-w-screen fixed left-0 top-0 z-[100] h-full min-h-screen w-full bg-foreground text-neutral-300 dark:bg-primary-foreground",
            )}
        >
            {children}
            <MenuCurveSvg />
        </motion.div>
    );
};
