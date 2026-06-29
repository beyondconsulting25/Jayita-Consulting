import React from "react";
import { 
  Presentation, 
  TrendingUp, 
  FileText, 
  Search, 
  Briefcase,
  ArrowRight,
  Sparkles,
  GraduationCap
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ServicesProps {
  onExploreServices: () => void;
}

export default function Services({ onExploreServices }: ServicesProps) {
  const serviceHeadings = [
    {
      number: "01",
      icon: Presentation,
      title: "Investor Pitch Deck Creation & Fundraising Story Design"
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Business Strategy & Growth Consulting (End-to-End)"
    },
    {
      number: "03",
      icon: Briefcase,
      title: "Corporate Presentation Design & Executive Slide Decks"
    },
    {
      number: "04",
      icon: Search,
      title: "Market Research & Competitive Analysis"
    },
    {
      number: "05",
      icon: FileText,
      title: "Business Plan Development (Investor + Operational Ready)"
    },
    {
      number: "06",
      icon: GraduationCap,
      title: "Startup Advisory & Mentoring"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#fcfcfc] dark:bg-background border-b border-border-subtle dark:border-border-subtle/15 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-red uppercase tracking-widest block">
              What I Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
              Services Built for Real Business Impact
            </h2>
            <div className="w-16 h-1 bg-red mx-auto"></div>
            <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto font-normal">
              From strategy to execution — I bring clarity, structure, and momentum to every engagement.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Headings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceHeadings.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal
                key={service.number}
                direction="up"
                delay={index * 80}
                duration={700}
              >
                <div 
                  onClick={onExploreServices}
                  className="bg-white dark:bg-slate-900/40 p-6 sm:p-8 border border-border-subtle dark:border-border-subtle/20 rounded-[4px] hover:border-red dark:hover:border-red hover:shadow-md cursor-pointer transition-all duration-300 group flex flex-col justify-between h-full min-h-[220px]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-extrabold text-red/20 group-hover:text-red/40 transition-colors">
                        {service.number}
                      </span>
                      <div className="p-2.5 bg-navy/5 dark:bg-slate-800 rounded group-hover:bg-red/10 transition-colors">
                        <IconComponent className="w-5 h-5 text-navy dark:text-red" />
                      </div>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-navy dark:text-white group-hover:text-red transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  <div className="pt-4 flex items-center gap-1 text-[11px] font-black text-red uppercase tracking-widest group-hover:gap-2 transition-all">
                    Explore Deliverables & Scope
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Big Central Gateway CTA button */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreServices}
            className="inline-flex items-center gap-2 bg-navy text-white dark:bg-red hover:opacity-90 active:scale-95 px-6 py-3 rounded text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4 fill-white text-white" />
            Explore Full Deliverables & Scope
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
