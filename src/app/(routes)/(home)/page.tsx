import { Projects } from "./_components/Projects/projects";
import { Testimonials } from "./_components/Testimonials/testimonials";
import { AboutMe } from "./_components/about-me";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";

export default function HomePage() {
    return (
        <div className="space-y-8">
            <Hero />
            <AboutMe />
            <div className="space-y-28">
                <Services />
                <Projects />
                <Testimonials />
            </div>
            <div className="h-[400vh]"></div>
        </div>
    );
}
