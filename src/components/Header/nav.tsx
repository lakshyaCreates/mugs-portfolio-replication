"use client";

import { useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";

import Link from "next/link";

import { Button } from "../ui/button";
import { AnimatePresence } from "framer-motion";

import { data } from "./header-data";
import { Menu } from "./menu";
import { useMenu } from "@/hooks/use-menu";

export const Nav = () => {
    const { isMenuOpen, open, setIsMenuOpen } = useMenu();

    useEffect(() => {
        console.log(isMenuOpen);
    }, [isMenuOpen]);

    const { navItems } = data;

    // TODO: Add Smooth Section Scroll using GSAP.
    const handleClick = (url: string) => {};

    return (
        <nav className="flex h-full w-full items-center justify-center">
            {/* Desktop Nav */}
            <ul className="hidden gap-x-6 text-lg lg:flex">
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
            {/* Mobile Nav Opener Button */}
            <Button
                onClick={() => setIsMenuOpen(true)}
                size={"sm"}
                variant={"ghost"}
                className="text-mugs-black-300 block lg:hidden"
            >
                <CgMenuRight className="size-8" />
            </Button>
            {/* Mobile Nav */}
            <AnimatePresence mode="wait">
                {isMenuOpen && <Menu />}
            </AnimatePresence>
        </nav>
    );
};
