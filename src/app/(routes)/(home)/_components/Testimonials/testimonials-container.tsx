"use client";

import { useState } from "react";

import { EmblaOptionsType } from "embla-carousel";

import EmblaCarousel from "./EmblaCarousel/embla-carousel";
import "./EmblaCarousel/embla.css";
import { data } from "./testimonials-data";

export const TestimonialsContainer = () => {
    const [current, setCurrent] = useState(0);
    const SLIDES = Array.from(Array(data.length).keys());
    const OPTIONS: EmblaOptionsType = { loop: true };

    return (
        <div className="relative w-full">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
};
