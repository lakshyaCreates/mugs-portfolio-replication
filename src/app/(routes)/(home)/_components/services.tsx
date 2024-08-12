import { SectionHeading } from "@/components/section-heading";

import {
    AppDesignSvg,
    GraphicDesignSvg,
    UiUxSvg,
    WebDesignSvg,
} from "./services-icons";

export const Services = () => {
    return (
        <section
            id="services"
            className="flex h-full w-full flex-col items-center justify-center space-y-4 px-12 pt-16 text-center font-poppins md:px-16 lg:px-24 xl:px-32"
        >
            <SectionHeading text="Services" />
            <p className="w-3/4 text-sm">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <div className="grid w-full grid-cols-1 justify-items-center gap-6 md:w-fit md:grid-cols-2 lg:grid-cols-4">
                {servicesList.map((service, index) => {
                    const { title, description, icon: Icon } = service;

                    return (
                        <div
                            key={index}
                            className="w-[75%] content-start justify-items-start space-y-2 rounded-md bg-secondary px-3 py-6 text-start dark:bg-primary dark:text-background md:w-60 lg:w-52"
                        >
                            <Icon className="size-12" />
                            <h3 className="ml-1.5 text-xl font-semibold">
                                {title}
                            </h3>
                            <p className="ml-1.5 w-3/4 text-xs md:w-full">
                                {description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

type ServicesListProps = {
    title: string;
    description: string;
    icon: any;
}[];

const servicesList = [
    {
        title: "UI/UX",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisl nam diam interdum",
        icon: UiUxSvg,
    },
    {
        title: "Web Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisl nam diam interdum",
        icon: WebDesignSvg,
    },
    {
        title: "App Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisl nam diam interdum",
        icon: AppDesignSvg,
    },
    {
        title: "Graphic Design",
        description:
            "Lorem ipsum dolor sit amet consectetur. Morbi diam nisl nam diam interdum",
        icon: GraphicDesignSvg,
    },
];
