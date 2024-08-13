import {
    FaFacebook,
    FaXTwitter,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa6";

import Link from "next/link";

import { cn } from "@/lib/utils";

export const SocialPallete = ({ className }: { className?: string }) => {
    return (
        <div className="flex gap-4">
            {socials.map((item, index) => {
                const { title, url, icon: Icon } = item;

                return (
                    <Link href={url} key={index} className="group">
                        <Icon
                            className={cn(
                                "size-5 transition-all duration-200 ease-in group-hover:scale-[1.15]",
                                className,
                            )}
                        />
                    </Link>
                );
            })}
        </div>
    );
};

type SocialsProps = {
    title: string;
    url: string;
    icon: any;
}[];

const socials: SocialsProps = [
    {
        title: "Facebook",
        url: "/",
        icon: FaFacebook,
    },
    {
        title: "X",
        url: "/",
        icon: FaXTwitter,
    },
    {
        title: "Instagram",
        url: "/",
        icon: FaInstagram,
    },
    {
        title: "LinkedIn",
        url: "/",
        icon: FaLinkedin,
    },
];
