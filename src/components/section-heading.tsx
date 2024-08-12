import { cn } from "@/lib/utils";

interface Props {
    text: string;
    className?: string;
}

export const SectionHeading = ({ text, className }: Props) => {
    return (
        <h3 className={cn("text-4xl font-semibold tracking-wide", className)}>
            {text}
        </h3>
    );
};
