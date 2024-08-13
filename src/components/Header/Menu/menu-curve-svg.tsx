import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export const MenuCurveSvg = () => {
    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    const curve = {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: { duration: 1.2, ease: [0.81, 0, 0.28, 1] },
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.74, ease: [0.81, 0, 0.28, 1] },
        },
    };

    return (
        <svg
            className={cn(
                "absolute right-[-99px] top-0 h-full w-[100px] rotate-180 fill-foreground stroke-none dark:fill-primary-foreground sm:hidden md:block",
            )}
        >
            <motion.path
                variants={curve}
                initial="initial"
                animate="enter"
                exit="exit"
            ></motion.path>
        </svg>
    );
};
