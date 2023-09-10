import UpgradeProModal from "@/components/dashboard/upgrade-pro-modal";
import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar/mobile-sidebar";
import Topbar from "@/components/topbar";
import { cn } from "@/lib/utils";

const DashboardLayout = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <header>
        <Topbar />
      </header>
      <main className="lg:bg-gray-950 lg:overflow-hidden lg:pl-80 [&:has([is-navbar-minimal])]:lg:pl-20 lg:pr-7 lg:py-7">
        <Sidebar className={cn(
          "fixed left-0 z-20 w-80 [&:has([is-navbar-minimal])]:w-fit hidden",
          "lg:block"
        )} />
        <MobileSidebar />
        <UpgradeProModal />
        <div className={cn(
          "bg-background h-[calc(100vh-56px)]",
          "lg:rounded-3xl lg:p-7"
        )}>
          {props.children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout;
