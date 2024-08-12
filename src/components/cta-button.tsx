import Link from "next/link";

interface Props {
    title: string;
    url: string;
}

export const CtaButton = ({ title, url }: Props) => {
    return (
        <Link
            href={url}
            className="bg-mugs-orange-400 rounded px-4 py-1.5 text-white transition-transform duration-300 ease-in-out hover:scale-105"
        >
            {title}
        </Link>
    );
};
