import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import ValueAndExposure from "./ValueAndExposure";

interface InternationalExposurePageProps {
  onBackToHome: () => void;
}

export default function InternationalExposurePage({ onBackToHome }: InternationalExposurePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-background min-h-screen text-text-main font-sans pb-20 transition-colors duration-200">
      <section className="bg-navy dark:bg-slate-950 text-white pt-24 pb-8 border-b border-white/5 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </section>

      <ValueAndExposure initialTab="exposure" />
    </div>
  );
}
