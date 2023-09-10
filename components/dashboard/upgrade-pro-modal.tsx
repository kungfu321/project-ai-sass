"use client";

import axios from "axios";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useProStore } from "@/stores/pro-store";
import PlanItem from "./plan-item";
import { useToast } from "../ui/use-toast";

const UpgradeProModal = () => {
  const { isOpen } = useProStore();
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
    <Dialog open={isOpen}>
      <DialogContent>
        <div className="flex items-center space-x-4">
          <PlanItem
            title="Pro"
            onClick={handleSubcribe}
            description="Basic chat functionality"
            highlight="Free forever"
            price={1000}
            loading={loading}
            features={[
              "Email support",
              "Unlimited generations",
              "Access to AI capabilities"
            ]}
            buttonText="Upgraded to Pro"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default UpgradeProModal;
