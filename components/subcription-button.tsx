"use client";

import { useState } from "react";

import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import axios from "axios";
import { Sparkles } from "lucide-react";

interface SubcriptionButtonProps {
  isPro?: boolean;
}

const SubcriptionButton: React.FC<SubcriptionButtonProps> = ({ isPro }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubcribe = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/stripe");
      location.href = data.url;
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubcribe}
        className="text-white w-full font-semibold hover:text-white border-none gradient-btn"
      >
        <span className="mr-2">{isPro ? "Manage Subcription" : "Upgrade to Pro"}</span>
        {
          !isPro &&
          <Sparkles />
        }
      </Button>
    </div>
  )
}

export default SubcriptionButton;
