"use client";

import { useEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";

import { Projects } from "./_components/Projects/projects";
import { Testimonials } from "./_components/Testimonials/testimonials";
import { AboutMe } from "./_components/about-me";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function HomePage() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start", "end end"],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });
    return (
        <div className="space-y-8">
            <Hero />
            <AboutMe />
            <div className="space-y-28">
                <Services />
                <Projects />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
            {/* <div className="h-[400vh]"></div> */}
        </div>
    );
}
