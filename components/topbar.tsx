"use client";

import { useSidebarStore } from "@/stores/sidebar-store";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./logo";
import { cn } from "@/lib/utils";

const Topbar = () => {
  const { handleOpenOrClose } = useSidebarStore();

  return (
    <div className={cn(
      "flex items-center p-4 justify-between sticky top-0 z-30",
      "lg:hidden"
    )}>
      <Logo />
      <Button
        variant="ghost"
        size="icon"
        onClick={handleOpenOrClose}>
        <Menu />
      </Button>
    </div>
  )
}

export default Topbar;
