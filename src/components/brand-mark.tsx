import React from "react";

import { cn } from "@/lib/utils";

import { data } from "./Header/header-data";

export const BrandMark = ({ className }: { className?: string }) => {
    const { name, logo: Logo, cta } = data;

    const firstLetterOfName = name.charAt(0);
    const nameWithoutFirstLetter = name.split(firstLetterOfName, 2);

    return (
        <div className={cn("flex w-fit gap-2", className)}>
            <Logo className="size-11" />
            <h2 className="text-4xl font-normal">
                <span className="font-bold text-black dark:text-white">
                    {firstLetterOfName}
                </span>
                <span className="text-mugs-black-300 dark:text-neutral-100">
                    {nameWithoutFirstLetter}
                </span>
            </h2>
        </div>
    );
};
