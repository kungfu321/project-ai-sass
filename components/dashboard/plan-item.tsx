import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

interface PlanItemProps {
  title: string,
  description: string,
  highlight: string,
  price: number,
  features: string[];
  buttonText: string;
  onClick: () => void;
  loading?: boolean;
}

const PlanItem: React.FC<PlanItemProps> = ({
  title,
  description,
  highlight,
  price,
  features,
  buttonText,
  loading,
  onClick
}) => {
  return (
    <div className="">
      <div className="text-5xl">{title}</div>
      <div>{description}</div>
      <div>
        <span>{price}</span>
        <span>/mo</span>
      </div>
      <div>{highlight}</div>
      <Separator />
      <div>
        {
          features.map((feature, index) => <div key={index}>
            {feature}
          </div>)
        }
      </div>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={onClick}
        className={cn(
          "text-white w-full font-semibold hover:text-white border-none gradient-btn",

        )}>
        <span className="mr-2">{buttonText}</span>
      </Button>
    </div>
  )
}

export default PlanItem;
