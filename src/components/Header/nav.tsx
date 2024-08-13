"use client";

import { useEffect, useRef } from "react";
import { CgMenuRight } from "react-icons/cg";

import Link from "next/link";

import { Button } from "../ui/button";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { data } from "./header-data";
import { Menu } from "./menu";
import { useMenu } from "@/hooks/use-menu";

export const Nav = () => {
    const { isMenuOpen, setIsMenuOpen } = useMenu();
    const ref = useRef(null);

    gsap.registerPlugin(ScrollToPlugin);
    const { navItems } = data;

    const handleClick = (url: string) => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: url === "" ? 0 : url,
                offsetY: 100,
            },
            ease: "power4.inOut",
        });
    };

    return (
        <nav
            className="flex h-full w-full items-center justify-center font-poppins"
            ref={ref}
        >
            {/* Desktop Nav */}
            <ul className="hidden gap-x-6 text-lg lg:flex">
                {navItems.map((item, index) => {
                    const { id, title, url } = item;
                    return (
                        <div
                            onClick={() => handleClick(url)}
                            key={index}
                            className="group flex cursor-pointer flex-col items-center justify-center text-neutral-600 transition-colors duration-300 ease-in hover:text-black dark:text-neutral-300 dark:hover:text-white"
                        >
                            <li>{title}</li>
                            <span className="h-0.5 w-0 bg-black transition-all duration-200 ease-in group-hover:w-full dark:bg-neutral-300" />
                        </div>
                    );
                })}
            </ul>
            {/* Mobile Nav Opener Button */}
            <Button
                onClick={() => setIsMenuOpen(true)}
                size={"sm"}
                variant={"ghost"}
                className="block text-mugs-black-300 lg:hidden"
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
