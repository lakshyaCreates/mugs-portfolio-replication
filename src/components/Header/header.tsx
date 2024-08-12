"use client";

import { useState } from "react";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/lib/utils";

import { headerVariants } from "./animation";
import { HeaderContent } from "./header-content";

export const Header = () => {
    const [isPastHero, setIsPastHero] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (latest > previous! && latest > 250) {
            setIsHidden(true);
        } else {
            setIsHidden(false);
        }

        if (latest > 50) {
            setIsPastHero(true);
        } else {
            setIsPastHero(false);
        }

        if (latest <= 50) setIsPastHero(false);
    });

    return (
        <motion.header
            variants={headerVariants}
            initial="close"
            animate={isHidden ? "close" : "open"}
            className="max-w-screen fixed z-50 h-20 w-full"
        >
            {/* Sub-header to animate the background & border colors on events */}
            <div
                className={cn(
                    "h-full w-full bg-background p-6 transition-all duration-500 ease-in md:px-16 lg:px-24 xl:px-32",
                    isPastHero && "shadow-sm",
                )}
            >
                <HeaderContent />
            </div>
        </motion.header>
    );
};
