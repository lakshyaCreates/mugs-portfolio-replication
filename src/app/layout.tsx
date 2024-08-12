import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import { Header } from "@/components/Header/header";
import { ModeToggle } from "@/components/mode-toggle";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={cn("fonts.poppins", poppins.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="mt-20">{children}</main>
                    <div className="fixed bottom-10 right-12 z-50">
                        <ModeToggle />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
