import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  metric: string;
  metricLabel: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "CEO",
      company: "Flux Technologies",
      quote: "Jayita transformed our operational chaos into a predictable engine of growth. Her pitch deck narrative and business model audit were absolutely instrumental in securing our $12M Series A funding when markets were tightening.",
      metric: "$12M Raised",
      metricLabel: "Series A Capital",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "COO & VP of Product",
      company: "FinVerge Solutions",
      quote: "As our Fractional COO, Jayita restructured our cross-border engineering workflow and eliminated operational compliance bottlenecks. Our overall feature shipping velocity increased by 35% within the first 90 days.",
      metric: "+35% Speed",
      metricLabel: "Operational Velocity",
    },
    {
      id: 3,
      name: "Marcus Thorne",
      role: "Founder & Executive Director",
      company: "Nexus Fleet Logistics",
      quote: "The EV fleet transition roadmap prepared by Jayita was masterclass operational strategy. She simplified highly complex grid infrastructure logistics and secured unanimous board approval on a 5-year fleet overhaul.",
      metric: "$4.2M Saved",
      metricLabel: "Capex Optimizations",
    },
    {
      id: 4,
      name: "Dr. Evelyn Chen",
      role: "Co-Founder",
      company: "MedLink HealthTech",
      quote: "Jayita helped us execute a high-stakes pivot from low-margin consumer sales to lucrative enterprise software licensing. She established our B2B pipeline structure and coached our leadership transition with total precision.",
      metric: "300% ARR",
      metricLabel: "Annual Recurring Revenue",
    },
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }
    return () => {
      resetTimeout();
    };
  }, [activeIndex, isPaused, testimonials.length]);

  const handlePrev = () => {
    resetTimeout();
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    resetTimeout();
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-surface-container-low overflow-hidden relative">
      {/* Decorative ambient background assets */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-navy/2 opacity-5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-red/2 opacity-5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              Client Success Stories
            </h2>
            <div className="w-16 h-1 bg-red mx-auto"></div>
            <p className="text-sm sm:text-base text-text-muted max-w-lg mx-auto">
              Real outcomes from growth-stage startups and enterprise executives who transformed their operational systems.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal direction="up" delay={200} duration={800}>
          <div 
            className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 shadow-xl rounded-[4px] relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Visual background Quote watermark */}
            <Quote className="absolute right-8 top-6 w-32 h-32 text-navy/2 pointer-events-none" />

            {/* Testimonial Active Slide View */}
            <div className="p-8 sm:p-12 lg:p-16 min-h-[380px] flex flex-col justify-between">
              
              {/* Slide content wrapper with transition effect */}
              <div 
                key={activeIndex} 
                className="grid lg:grid-cols-12 gap-8 items-center animate-fadeIn"
              >
                {/* Metric highlight box */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-navy dark:bg-slate-950 text-white p-8 rounded border-b-4 border-red shadow-inner">
                  <Award className="w-10 h-10 text-red mb-3" />
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1.5">
                    {testimonials[activeIndex].metric}
                  </span>
                  <span className="text-[12px] font-bold text-on-primary-container opacity-80 uppercase tracking-widest">
                    {testimonials[activeIndex].metricLabel}
                  </span>
                </div>

                {/* Quote Content */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-lg sm:text-xl font-medium text-navy dark:text-white leading-relaxed italic">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="border-t border-border-subtle dark:border-border-subtle/20 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-navy">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {testimonials[activeIndex].role}, <span className="font-semibold text-navy">{testimonials[activeIndex].company}</span>
                      </p>
                    </div>

                    {/* Progress indicators */}
                    <div className="flex gap-2">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            resetTimeout();
                            setActiveIndex(idx);
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                            activeIndex === idx
                              ? "bg-red w-8"
                              : "bg-navy/15 hover:bg-navy/35"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel navigation controls */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 text-navy dark:text-white border border-border-subtle dark:border-border-subtle/20 rounded-full shadow-md flex items-center justify-center hover:bg-navy dark:hover:bg-red hover:text-white dark:hover:text-white active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6">
              <button
                onClick={handleNext}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-slate-800 text-navy dark:text-white border border-border-subtle dark:border-border-subtle/20 rounded-full shadow-md flex items-center justify-center hover:bg-navy dark:hover:bg-red hover:text-white dark:hover:text-white active:scale-95 transition-all duration-200 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
