"use client";

import Image from "next/image";

import { SegmentedControl } from "@/components/motion-primitives/segmented-control";
import { SectionHeading } from "@/components/section-heading";

import { ProjectCard } from "./project-card";
import { categories, Category, data } from "./projects-data";
import { useActiveCategory } from "@/hooks/use-active-category";

export const Projects = () => {
    const { activeCategory, setActiveCategory } = useActiveCategory();

    return (
        <section
            id="projects"
            className="xl:px-321 flex h-full w-full flex-col items-center justify-center space-y-6 px-12 text-center font-poppins md:px-16 lg:px-24"
        >
            <SectionHeading text="My Projects" />
            <p className="w-3/4 text-sm">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <div className="pb-6 pt-3">
                <SegmentedControl />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {data.map((project, index) => {
                    const { title, url, image, category } = project;

                    // TODO: Add framer motion config / animate-presence to animate when the category changes.

                    if (category === activeCategory) {
                        return <ProjectCard key={index} {...project} />;
                    }

                    if (activeCategory === Category.All) {
                        return <ProjectCard key={index} {...project} />;
                    }

                    return null;
                })}
            </div>
        </section>
    );
};
