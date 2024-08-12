import { AboutMe } from "./_components/about-me";
import { Hero } from "./_components/hero";

export default function HomePage() {
    return (
        <div className="space-y-8">
            <Hero />
            <AboutMe />
            <div className="h-[400vh]"></div>
        </div>
    );
}
