import type { Metadata } from "next";

import { Toaster } from "sonner";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Header } from "@/components/Header/header";
import { ModeToggle } from "@/components/mode-toggle";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

// TODO: Add all the advanced metadata suitable
export const metadata: Metadata = {
    title: "Mumair",
    description: "Mumair's Personal Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "fonts.poppins overflow-x-hidden selection:bg-orange-400",
                    poppins.variable,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="mt-24">{children}</main>
                    <div className="fixed bottom-10 right-12 z-50">
                        <ModeToggle />
                    </div>
                    <Toaster richColors position="bottom-center" />
                </ThemeProvider>
            </body>
        </html>
    );
}
