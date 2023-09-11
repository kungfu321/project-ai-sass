"use client";

import axios from "axios";
import { useState } from "react";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useProStore } from "@/stores/pro-store";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

const UpgradeProModal = () => {
  const { isOpen, handleCloseProModal } = useProStore();
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
      <DialogContent
        onClose={handleCloseProModal}
        showOverlay>
        <Button
          variant="outline"
          size="lg"
          disabled={loading}
          onClick={handleSubcribe}
          className="text-white w-full font-semibold hover:text-white border-none gradient-btn"
        >
          <span className="mr-2">Upgrade to Pro now</span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default UpgradeProModal;
