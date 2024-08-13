import Link from "next/link";

interface Props {
    title: string;
    url: string;
    blank?: boolean;
    download?: boolean;
}

export const CtaButton = ({ title, url, blank, download }: Props) => {
    return (
        <Link
            target={blank ? "_blank" : "_self"}
            href={url}
            download={download && url}
            className="rounded bg-mugs-orange-400 px-4 py-1.5 text-white transition-transform duration-300 ease-in-out hover:scale-105"
        >
            {title}
        </Link>
    );
};
