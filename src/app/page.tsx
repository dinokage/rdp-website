import { Globe } from "@/components/globe";
import Pricing from "@/components/pricing";
import { TypewriterEffectSmoothDemo } from "@/components/typewriter-demo";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 text-center">
        <TypewriterEffectSmoothDemo />
        
      </div>

      {/* Globe Section */}
      <div className="w-full flex justify-center mt-6 hidden sm:flex">
        <div className="w-[90%]">
          <Globe />
          <Pricing />
        </div>
      </div>
    </div>
    
  );
}
