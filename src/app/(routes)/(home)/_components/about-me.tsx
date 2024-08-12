import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { Slider } from "@/components/ui/slider";

export const AboutMe = () => {
    return (
        <section
            id="about"
            className="flex h-full w-full flex-col items-center justify-center space-y-6 px-12 font-poppins md:flex-row md:px-16 lg:gap-24 lg:space-y-0 lg:px-24 xl:px-32"
        >
            <div className="hidden h-full w-full flex-col items-center justify-center space-y-4 text-center md:flex md:w-[40%] md:items-start md:justify-start md:text-start">
                <Image
                    width={300}
                    height={300}
                    src={"/images/about-profile.png"}
                    alt="Hero Profile"
                    className="h-[320px] w-[320px] object-contain lg:h-[420px] lg:w-[420px]"
                />
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 text-center md:w-[45%] md:items-start md:justify-start md:text-start">
                <SectionHeading text="About Me" />
                <div className="flex h-full w-full flex-col items-center justify-center space-y-4 md:hidden">
                    <Image
                        width={300}
                        height={300}
                        src={"/images/about-profile.png"}
                        alt="Hero Profile"
                        className="h-[320px] w-[320px] object-contain lg:h-[420px] lg:w-[420px]"
                    />
                </div>
                <p className="w-4/5">
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus In. Allquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                </p>
                <div className="w-4/5 space-y-4">
                    {skills.map((skill, index) => {
                        const { title, value } = skill;

                        return (
                            <div key={index} className="w-full space-y-2">
                                <p className="font-semibold">{title}</p>
                                <Slider
                                    defaultValue={[value]}
                                    max={100}
                                    step={1}
                                    disabled
                                    className="w-full text-orange-500"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

type SkillsProps = {
    title: string;
    value: number;
}[];

const skills: SkillsProps = [
    {
        title: "UX",
        value: 94,
    },
    {
        title: "Website Design",
        value: 90,
    },
    {
        title: "App Design",
        value: 98,
    },
    {
        title: "Graphic Design",
        value: 95,
    },
];
