import { Sparkles } from "lucide-react";
import Logo from "../logo";
import { Button } from "../ui/button";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="border-b w-full p-4">
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        <Logo />
        <div>
         <a href="#features">
            <Button className="gradient-btn">
              <span className="mr-2">Get Started</span>
              <Sparkles />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Topbar;
