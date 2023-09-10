import { BrainCircuit } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center">
      <BrainCircuit className="animate-ping" color="#0ea5e9" size={16} />
      <span className="ml-4 text-sm">Thinking ...</span>
    </div>
  )
}

export default Loading;
