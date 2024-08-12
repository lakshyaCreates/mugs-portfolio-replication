"use client";

import { CgClose } from "react-icons/cg";

import Link from "next/link";

import { Button } from "../ui/button";

import { MenuCurveContainer } from "./Menu/menu-curve-container";
import { data } from "./header-data";
import { useMenu } from "@/hooks/use-menu";

export const Menu = () => {
    const { setIsMenuOpen } = useMenu();

    const { navItems } = data;

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
            <div className="flex h-full w-full flex-col items-center space-y-6 py-24">
                {navItems.map((item, index) => {
                    const { title, url } = item;
                    return (
                        <Link
                            key={index}
                            href={url}
                            className="text-3xl font-bold uppercase text-background dark:text-muted-foreground"
                        >
                            <span>{title}</span>
                        </Link>
                    );
                })}
            </div>
        </MenuCurveContainer>
    );
};
