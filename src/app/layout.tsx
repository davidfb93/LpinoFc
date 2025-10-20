// NextJS
import type { Metadata } from "next";

// // Providers
// import Provider from "@providers/Providers";

// Config
import { fontMontserrat } from "@config/fonts";

// Styles
import "./globals.css";

//Components
import HeaderSocialMedia from "@/components/HeaderSocialMedia";
import Header from "@/components/Header";

// Metadata
export const metadata: Metadata = {
    description: "Aplicacion Web LPino Fc",
    title: "Lpino | Web"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </head>
            <body className={`${fontMontserrat.variable} antialiased min-w-[320px] overflow-x-hidden`}>
            <HeaderSocialMedia/>
            <Header/>
                    {children}
            </body>
        </html>
    );
}