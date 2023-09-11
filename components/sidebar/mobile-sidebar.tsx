"use client";

import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { useSidebarStore } from "@/stores/sidebar-store";
import Sidebar from ".";

interface MobileSidebarProps {
  isProPlan?: boolean;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isProPlan }) => {
  const { isOpen } = useSidebarStore();

  return (
    <Sheet open={isOpen}>
      <SheetContent side="left" className="w-screen border-none bg-black p-0 pt-8">
        <Sidebar isProPlan={isProPlan} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar;
