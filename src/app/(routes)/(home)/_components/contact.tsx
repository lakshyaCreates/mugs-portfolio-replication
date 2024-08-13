import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Contact = () => {
    return (
        <section
            id="contact"
            className="xl:px-321 flex h-full w-full flex-col items-center justify-center space-y-6 px-12 text-center font-poppins md:px-16 lg:px-24"
        >
            <SectionHeading text="Lets Design Together" />
            <p className="w-3/4 text-sm">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
            </p>
            <div className="flex h-20 w-[75%] flex-col items-center justify-between gap-3 md:flex-row">
                <Input
                    placeholder="Enter Your Email"
                    className="rounded-lg dark:bg-primary dark:text-black"
                />
                <Button className="w-full rounded-lg bg-orange-400 font-semibold text-secondary transition-all duration-150 ease-in hover:scale-[1.03] hover:bg-orange-500 dark:text-primary md:w-fit">
                    Contact Me
                </Button>
            </div>
        </section>
    );
};
