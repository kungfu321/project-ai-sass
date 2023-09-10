"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { THEME_MODES } from "@/constants";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { isMinimal } = useSidebarStore();

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "p-2 rounded-lg flex items-center bg-gray-900 w-full cursor-pointer",
        isMinimal && "w-14 h-14 justify-center"
      )}>
      {
        isMinimal ?
          <span>
            {
              theme === "dark" ?
                <Moon />
                :
                <Sun />
            }
          </span>
          :
          THEME_MODES.map(({ label, value }) =>
            <span
              key={value}
              className={cn(
                "flex items-center p-2 rounded-lg px-7 w-full justify-center cursor-pointer text-muted-foreground font-medium",
                theme === value && "bg-gray-950 shadow text-white"
              )}>
              {
                value === "dark" ?
                  <Moon />
                  :
                  <Sun />
              }
              <span className="ml-2">{label}</span>
            </span>
          )
      }
    </div>
  );
}

export default ThemeToggle;
