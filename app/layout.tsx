import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], weight: ['300', '400', '600', '800'] });

export const metadata: Metadata = {
    title: "REST Countries API",
    description: "Frontend Mentor project",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={nunitoSans.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
