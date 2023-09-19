"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { useProStore } from "@/stores/pro-store";
import SubscriptionButton from "../subscription-button";

interface UpgradeProModalProps {
  isProPlan?: boolean;
}

const UpgradeProModal: React.FC<UpgradeProModalProps> = ({ isProPlan }) => {
  const { isOpen, handleCloseProModal } = useProStore();

  return (
    <Dialog open={isOpen}>
      <DialogContent
        onClose={handleCloseProModal}
        showOverlay>
        <SubscriptionButton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  )
}

export default UpgradeProModal;
