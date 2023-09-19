"use client";

import { UserButton, useUser } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { useSidebarStore } from "@/stores/sidebar-store";
import { Progress } from "@/components/ui/progress";
import { MAX_FREE_COUNTS } from "@/constants";
import ThemeToggle from "./theme-toggle";
import SidebarToggle from "./sidebar-toggle";
import Navbar from "./navbar";
import SubscriptionButton from "../subscription-button";

export interface SidebarProps {
  className?: string;
  isProPlan?: boolean;
  userLimitCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isProPlan, userLimitCount }) => {
  const { isMinimal } = useSidebarStore();
  const { user } = useUser();

  return (
    <div className={cn(
      "text-white",
      className
    )}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {
            !isMinimal &&
            <Logo />
          }
          <SidebarToggle />
        </div>
      </div>
      <div className="grow overflow-y-auto scroll-smooth scrollbar-none">
        <Navbar />
      </div>
      <div className={cn(
        "fixed bottom-8 left-4 right-4",
        "lg:left-7 lg:right-auto",
        isMinimal && "lg:left-3"
      )}>
        <div className="mb-4 p-4 rounded-lg bg-gray-900">
          <div className="mb-4 flex items-center">
            <UserButton afterSignOutUrl="/" />
            {
              !isMinimal &&
              <span className="text-sm ml-4">
                {user?.emailAddresses?.[0]?.emailAddress}
              </span>
            }
          </div>
          {
            !isMinimal &&
            <div className="border-t border-t-gray-950 pt-2">
              {
                !isProPlan &&
                <div className="mb-4">
                  <div className="text-center mb-2 text-muted-foreground font-semibold">
                    {userLimitCount}/{MAX_FREE_COUNTS} Free Generations
                  </div>
                  <Progress
                    value={(userLimitCount/MAX_FREE_COUNTS) * 100}
                    className="bg-gray-950 h-3"
                    indicatorClassName="gradient-btn"
                  />
                </div>
              }
              <SubscriptionButton isPro={isProPlan} />
            </div>
          }
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Sidebar;
