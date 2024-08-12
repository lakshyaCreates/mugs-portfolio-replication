import Image from "next/image";

import { CtaButton } from "@/components/cta-button";
import { SocialPallete } from "@/components/socials-palette";

export const Hero = () => {
    return (
        <section
            id=""
            className="font-poppins flex h-full w-full flex-col items-center justify-between space-y-6 px-12 md:flex-row md:px-16 lg:gap-8 lg:space-y-0 lg:px-24 xl:px-32"
        >
            <div className="flex h-full w-full flex-col items-center justify-center space-y-4 text-center md:items-start md:justify-start md:text-start">
                <div>
                    <p className="text-lg font-medium">Hi, I am</p>
                    <p className="text-mugs-orange-500 text-lg font-semibold">
                        Muhammad Umair
                    </p>
                    <div className="text-5xl font-bold">
                        <h2 className="">UI & UX</h2>
                        <h2 className="md:pl-32">Designer</h2>
                    </div>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Tristique amet sed
                    massa nibh lectus netus In. Allquet donec morbi convallis
                    pretium. Turpis tempus pharetra
                </p>
                <div>
                    <CtaButton title="Hire Me" url="/" />
                </div>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center md:items-end">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <Image
                        width={1000}
                        height={1000}
                        src={"/images/hero-profile.png"}
                        alt="Hero Profile"
                        className="h-[320px] w-[320px] object-contain lg:h-[380px] lg:w-[380px]"
                    />
                    <SocialPallete />
                </div>
            </div>
        </section>
    );
};
