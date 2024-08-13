import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { addContact } from "@/actions/add-contact";

const formSchema = z.object({
    email: z.string().email(),
});

export const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const { handleSubmit, control } = form;

    async function onSubmit(data: z.infer<typeof formSchema>) {
        await addContact(data.email).then(() => {
            toast.success("I received your Email. I will contact you soon!");
        });
    }

    return (
        <Form {...form}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex h-20 w-[75%] flex-col items-center justify-between gap-3 md:flex-row"
            >
                <FormField
                    control={control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="rounded-lg dark:bg-primary dark:text-black"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage className="absolute text-start dark:font-medium dark:text-red-500" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="w-full rounded-lg bg-orange-400 font-semibold text-secondary transition-all duration-150 ease-in hover:scale-[1.03] hover:bg-orange-500 dark:text-primary md:w-fit"
                >
                    Contact Me
                </Button>
            </form>
        </Form>
    );
};
