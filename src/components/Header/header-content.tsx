import { BrandMark } from "../brand-mark";
import { CtaButton } from "../cta-button";

import { data } from "./header-data";
import { Nav } from "./nav";

export const HeaderContent = () => {
    const { name, logo: Logo, cta } = data;

    return (
        <div className="flex h-full w-full items-center justify-between">
            <BrandMark className="lg:w-[20%]" />
            <div className="w-fit lg:w-[60%]">
                <Nav />
            </div>
            <div className="hidden w-[20%] justify-end gap-2 lg:flex">
                {cta.map((item, index) => {
                    const { title, url } = item;

                    // Supposing every CTA Button is a redirect link.
                    return (
                        <CtaButton
                            key={index}
                            title={title}
                            url={url}
                            blank
                            download
                        />
                    );
                })}
            </div>
        </div>
    );
};
