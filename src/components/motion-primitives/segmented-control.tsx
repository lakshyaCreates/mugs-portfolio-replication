"use client";

import AnimatedBackground from "@/components/motion-primitives/animated-background";

import {
    categories,
    Category,
} from "@/app/(routes)/(home)/_components/Projects/projects-data";
import { useActiveCategory } from "@/hooks/use-active-category";

export function SegmentedControl() {
    const { activeCategory, setActiveCategory } = useActiveCategory();

    return (
        <div className="rounded-[8px] bg-muted p-[6px] dark:bg-zinc-800">
            <AnimatedBackground
                defaultValue={activeCategory}
                className="rounded-sm bg-orange-400 text-white"
                transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                }}
            >
                {categories.map((label, index) => {
                    return (
                        <button
                            key={index}
                            data-id={label}
                            type="button"
                            className="mx-2 inline-flex w-fit items-center justify-center px-2 py-1 text-center transition-transform active:scale-[0.98] dark:text-zinc-50"
                        >
                            {label}
                        </button>
                    );
                })}
            </AnimatedBackground>
        </div>
    );
}
