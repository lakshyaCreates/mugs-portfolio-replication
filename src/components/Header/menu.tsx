"use client";

import { CgClose, CgMenuRight } from "react-icons/cg";

import Link from "next/link";

import { CtaButton } from "../cta-button";
import { Button } from "../ui/button";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import { MenuCurveContainer } from "./Menu/menu-curve-container";
import { data } from "./header-data";
import { useMenu } from "@/hooks/use-menu";

export const Menu = () => {
    const { setIsMenuOpen } = useMenu();
    gsap.registerPlugin(ScrollToPlugin);

    const { navItems, cta } = data;

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
        <MenuCurveContainer>
            <Button
                onClick={() => setIsMenuOpen(false)}
                size={"sm"}
                variant={"ghost"}
                className="absolute right-10 top-10 text-background dark:text-muted-foreground"
            >
                <CgClose className="size-7" />
            </Button>
            <div className="flex h-full w-full flex-col justify-between py-24">
                <div className="flex flex-col items-center space-y-6">
                    {navItems.map((item, index) => {
                        const { title, url } = item;
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    handleClick(url);
                                    setIsMenuOpen(false);
                                }}
                                className="cursor-pointer text-3xl font-bold uppercase text-background dark:text-muted-foreground"
                            >
                                <span>{title}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex w-full justify-center gap-2">
                    {cta.map((item, index) => {
                        const { title, url } = item;

                        // Supposing every CTA Button is a redirect link.
                        return (
                            <CtaButton
                                key={index}
                                title={title}
                                url={url}
                                blank
                                download
                            />
                        );
                    })}
                </div>
            </div>
        </MenuCurveContainer>
    );
};
