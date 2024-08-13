"use client";

import Link from "next/link";

import { data } from "@/components/Header/header-data";
import { Nav } from "@/components/Header/nav";
import { BrandMark } from "@/components/brand-mark";
import { SocialPallete } from "@/components/socials-palette";

export const Footer = () => {
    const { navItems } = data;

    // TODO: Add Smooth Section Scroll using GSAP.
    const handleClick = (url: string) => {};

    return (
        <section
            id="footer"
            className="flex h-full w-full items-center justify-center bg-secondary"
        >
            <div className="flex flex-col items-center justify-center space-y-12 py-16">
                <BrandMark />
                <ul className="hidden gap-x-6 text-lg md:flex">
                    {navItems.map((item, index) => {
                        const { id, title, url } = item;
                        return (
                            <Link
                                onClick={() => handleClick(url)}
                                key={index}
                                href={url}
                                className="group flex flex-col items-center justify-center text-neutral-600 transition-colors duration-300 ease-in hover:text-black dark:text-neutral-300 dark:hover:text-white"
                            >
                                <li>{title}</li>
                                <span className="h-0.5 w-0 bg-black transition-all duration-200 ease-in group-hover:w-full dark:bg-neutral-300" />
                            </Link>
                        );
                    })}
                </ul>
                <SocialPallete />
            </div>
        </section>
    );
};
