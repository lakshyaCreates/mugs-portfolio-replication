import { SectionHeading } from "@/components/section-heading";

import { TestimonialsContainer } from "./testimonials-container";

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="xl:px-321 flex h-full w-full flex-col items-center justify-center space-y-6 px-12 text-center font-poppins md:px-16 lg:px-24"
        >
            <SectionHeading text="Testimonials" />
            <p className="w-3/4 text-sm">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <TestimonialsContainer />
        </section>
    );
};
