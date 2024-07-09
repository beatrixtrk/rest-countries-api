'use client'

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggler: React.FC = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div className="flex items-center gap-2">
            <Button variant="link" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <span className="text-xs md:text-base font-semibold">Dark Mode</span>
        </div>
    );
}

export default ThemeToggler;
