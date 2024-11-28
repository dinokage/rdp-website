"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Host",
    },
    {
      text: "your",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "RDP Datacenter.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      
      <TypewriterEffectSmooth words={words} />
      <div className="">
        
        
        
      </div>
    </div>
  );
}