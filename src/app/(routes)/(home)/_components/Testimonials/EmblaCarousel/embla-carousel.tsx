import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import Image from "next/image";

import { data } from "../testimonials-data";
import { EmblaOptionsType } from "embla-carousel";

import { cn } from "@/lib/utils";

import { DotButton, useDotButton } from "./carousel-controls";

type PropType = {
    slides: number[];
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi);

    return (
        <section className="embla">
            <div
                className="overflow-x-hidden py-6 lg:overflow-x-visible"
                ref={emblaRef}
            >
                <div className="embla__container">
                    {slides.map((index) => (
                        <div
                            className={cn(
                                "embla__slide mx-2 flex h-fit w-full max-w-[30rem] flex-col items-center justify-start gap-3 rounded-md bg-muted p-4 transition-opacity duration-150 ease-in md:h-52 md:flex-row lg:max-w-[35rem]",
                                index !== selectedIndex
                                    ? "opacity-50 dark:opacity-30"
                                    : "",
                            )}
                            key={index}
                        >
                            <div className="w-full">
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={data[index].image.toString()}
                                    alt="Testimonial"
                                    className="h-16 w-16 rounded-full object-cover md:min-h-36 md:min-w-36"
                                />
                            </div>
                            <div className="mt-2 space-y-4 text-start font-poppins md:mt-0">
                                <div className="relative text-xs md:text-sm">
                                    <span className="absolute -left-2 text-xl font-bold italic leading-[0] text-orange-500 md:-left-5 md:-top-2 md:text-3xl">
                                        &apos;&apos;
                                    </span>
                                    <p className="relative">
                                        {data[index].quote}
                                        &nbsp;
                                        <span className="absolute -bottom-1 align-text-bottom text-xl font-bold italic leading-[0] text-orange-500 md:-bottom-6 md:text-3xl">
                                            &apos;&apos;
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        {data[index].name}
                                    </p>
                                    <p className="text-xs">
                                        {data[index].designation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__dots gap-2">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={"embla__dot h-3 w-10 rounded-lg bg-neutral-300 dark:bg-muted".concat(
                                index === selectedIndex
                                    ? "embla__dot--selected !bg-orange-500 dark:bg-orange-500"
                                    : "",
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
