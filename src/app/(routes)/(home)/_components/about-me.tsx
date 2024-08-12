import Image from "next/image";

import { Slider } from "@/components/ui/slider";

export const AboutMe = () => {
    return (
        <section
            id="about"
            className="font-poppins flex h-full w-full flex-col items-center justify-between space-y-6 px-12 md:flex-row md:px-16 lg:gap-8 lg:space-y-0 lg:px-24 xl:px-32"
        >
            <div className="hidden h-full w-full flex-col items-center justify-center space-y-4 md:flex">
                <Image
                    width={300}
                    height={300}
                    src={"/images/about-profile.png"}
                    alt="Hero Profile"
                    className="h-[320px] w-[320px] object-contain lg:h-[420px] lg:w-[420px]"
                />
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 text-center md:items-start md:justify-start md:text-start">
                <h3 className="text-4xl font-bold">About Me</h3>
                <div className="flex h-full w-full flex-col items-center justify-center space-y-4 md:hidden">
                    <Image
                        width={300}
                        height={300}
                        src={"/images/about-profile.png"}
                        alt="Hero Profile"
                        className="h-[320px] w-[320px] object-contain lg:h-[420px] lg:w-[420px]"
                    />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus In. Allquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                </p>
                <div className="w-full space-y-4">
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
