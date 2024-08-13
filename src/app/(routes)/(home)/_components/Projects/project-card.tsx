import Image from "next/image";
import Link from "next/link";

import { ProjectDataProps } from "./projects-data";

export const ProjectCard = ({
    title,
    url,
    image,
    category,
}: ProjectDataProps) => {
    return (
        <Link
            href={url}
            className="flex w-full flex-col items-start space-y-2 rounded-md bg-background text-start shadow-sm transition-all duration-300 ease-out hover:scale-[1.03] dark:bg-primary-foreground"
        >
            <Image
                width={1000}
                height={1000}
                src={image}
                alt={title + image}
                className="h-[320px] w-full rounded-md object-cover"
            />
            <div className="space-y-2 px-2 pb-4">
                <p className="pt-4 text-xs font-medium text-orange-500">
                    {category}
                </p>
                <h3 className="font-semibold">{title}</h3>
            </div>
        </Link>
    );
};
