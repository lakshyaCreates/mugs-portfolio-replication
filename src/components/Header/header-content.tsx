import Link from "next/link";

import { CtaButton } from "../cta-button";

import { data } from "./header-data";
import { Nav } from "./nav";

export const HeaderContent = () => {
    const { name, logo: Logo, cta } = data;

    const firstLetterOfName = name.charAt(0);
    const nameWithoutFirstLetter = name.split(firstLetterOfName, 2);

    return (
        <div className="flex h-full w-full items-center justify-between">
            <div className="flex w-fit gap-2 lg:w-[20%]">
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
            <div className="w-fit lg:w-[60%]">
                <Nav />
            </div>
            <div className="hidden w-[20%] justify-end gap-2 lg:flex">
                {cta.map((item, index) => {
                    const { title, url } = item;

                    // Supposing every CTA Button is a redirect link.
                    return <CtaButton key={index} title={title} url={url} />;
                })}
            </div>
        </div>
    );
};
