import React, { useState, useEffect } from "react";
import { 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Award, 
  Globe, 
  ArrowRight, 
  Network, 
  Compass, 
  MapPin, 
  ShieldAlert, 
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface ValueAndExposureProps {
  initialTab?: "propositions" | "exposure";
  isTeaser?: boolean;
  onNavigate?: (page: "value-propositions" | "international-exposure") => void;
}

export default function ValueAndExposure({ 
  initialTab = "propositions",
  isTeaser = false,
  onNavigate
}: ValueAndExposureProps) {
  const [activeTab, setActiveTab] = useState<"propositions" | "exposure">(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const values = [
    {
      id: "ownership",
      badge: "Scale Accomplishment",
      title: "End-to-End Business Ownership",
      subtitle: "Built TreisTek India from zero to ₹50Cr+ (₹500M+ ARR)",
      description: "Owns every strategic and operational growth lever. Experienced in building and executing corporate blueprints from initial formulation to complete P&L delivery.",
      details: [
        "Led process architecture, operational matrices, and organizational strategy.",
        "Ensured rigorous ISO quality standards and corporate compliance controls.",
        "Executed full balance sheet optimization and capital allocation models.",
        "Scaled teams and multi-disciplinary structures under rapid-growth conditions."
      ],
      icon: ShieldCheck,
      highlightText: "₹50Cr+ scaled"
    },
    {
      id: "execution",
      badge: "Core Dynamic",
      title: "Strategy Meets Execution",
      subtitle: "C-Suite vision fused with hands-on system building",
      description: "Offers a rare combination of high-stakes strategic foresight and direct execution capabilities. No theoretical advice—only concrete, deployable frameworks.",
      details: [
        "Formulates actionable roadmaps tailored for resource-constrained teams.",
        "Structures clear performance scorecards, KPIs, and tracking loops.",
        "Translates enterprise-grade workflows into lightweight, scalable setups.",
        "Builds high-trust governance systems and board-reporting lines."
      ],
      icon: Target,
      highlightText: "0% Fluff, 100% Action"
    },
    {
      id: "fundraising",
      badge: "Capital Catalyst",
      title: "Fundraising & Investor Ready",
      subtitle: "Compiles premium, capital-grade investor blueprints",
      description: "Extensive background preparing deep strategic narratives, visual slide models, and mathematical projections that secure VC commitments.",
      details: [
        "Structures compelling investment narratives and growth stories.",
        "Develops rigorous 3-5 year financial models and projections.",
        "Frames market opportunities, TAM/SAM, and user-acquisition plans.",
        "Creates competitive positioning grids and defensive IP roadmaps."
      ],
      icon: TrendingUp,
      highlightText: "Investor Grade"
    },
    {
      id: "leadership",
      badge: "Industry Credibility",
      title: "Nationally Recognised Leader",
      subtitle: "Credibility and proven execution across engagements",
      description: "Recipient of national distinctions validating exceptional executive capability, technological foresight, and corporate leadership.",
      details: [
        "Honored as one of the 10 Most Inspiring Business Women in India.",
        "Recognized as a leading Female Executive in technology and engineering.",
        "Brings industry credibility to board positions and corporate advisories.",
        "Trusted mentor for startup founders, research hubs, and MBA institutions."
      ],
      icon: Award,
      highlightText: "National Honor"
    }
  ];

  const exposures = [
    {
      region: "APAC",
      title: "India Marketing Authority",
      context: "Infor APAC Regional HQ Alignment",
      location: "South & Southeast Asia Regional Hubs",
      summary: "Adapting high-level worldwide programs to regional consumer behaviors while satisfying strict regional policies.",
      details: [
        "Aligned with APAC regional HQ governance to configure marketing initiatives across South and Southeast Asia.",
        "Customized high-volume corporate digital frameworks to meet regional performance matrices.",
        "Ensured zero-drift localized regulatory compliance inside highly sensitive vertical markets.",
        "Directed regional agency partners to hit unified quarterly brand benchmarks."
      ],
      icon: Compass
    },
    {
      region: "United States",
      title: "Analytics & Performance Lead",
      context: "Oracle US Corporate Stakeholders",
      location: "San Francisco, CA / Multi-Timezone Teams",
      summary: "Reporting mission-critical campaign KPIs and insights to global product and sales leads in real time.",
      details: [
        "Collaborated directly with Oracle's US marketing leads, delivering digital analytics and campaign reporting.",
        "Synthesized massive cross-border performance insights to steer resource optimization.",
        "Presented weekly campaign status charts to stakeholders across 3 distinct US timezones.",
        "Optimized client-retention digital pathways to reduce SaaS subscription attrition rates."
      ],
      icon: ArrowUpRight
    },
    {
      region: "Global Matrix Operations",
      title: "Governance & Operations Manager",
      context: "Infor & InterCall Matrix Teams",
      location: "Globally Governed Multi-Hub Architecture",
      summary: "Leading multi-million budget strategies across geographical divides without relying on formal local direct power.",
      details: [
        "Supervised compliance-driven operations across matrix structures to preserve brand standards.",
        "Influenced cross-border decision frameworks, budget allocations, and regional marketing setups.",
        "Negotiated multi-market resource allocation models across isolated regional sales leaders.",
        "Created digital knowledge-transfer pipelines to accelerate cross-border team onboarding."
      ],
      icon: Network
    },
    {
      region: "Middle East & Oil Sector",
      title: "Online Marketing & Growth Advisor",
      context: "Oil Professionals & Oil Advisers Network",
      location: "Global Energy & Infrastructure Core",
      summary: "Driving specialized digital strategies for massive energy consortiums and specialized drilling operations.",
      details: [
        "Supplied direct digital growth advisory to premier international energy and oil network forums.",
        "Formulated specialized content roadmaps targeting heavy engineering and drilling contractors.",
        "Established web analytics trackers to map investor conversion pathways across international zones.",
        "Maintained premium information integrity within secure, corporate energy web environments."
      ],
      icon: ShieldAlert
    }
  ];

  if (isTeaser) {
    return (
      <section id="value-exposure-teaser" className="py-24 bg-[#fafafa] dark:bg-slate-950/20 border-b border-border-subtle dark:border-border-subtle/15 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          
          {/* Header styled exactly like "Credentials & Operations Directory" */}
          <ScrollReveal direction="up" duration={700}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-subtle dark:border-border-subtle/20 pb-8">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-bold text-red uppercase tracking-widest block font-sans">
                  Pedigree & Records
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy dark:text-white tracking-tight font-sans">
                  Credentials & Operations Directory
                </h2>
              </div>

              {/* Tab controls */}
              <div className="flex flex-wrap gap-2 bg-surface-container-low dark:bg-slate-900/50 p-1.5 rounded-lg border border-border-subtle dark:border-border-subtle/20 self-start md:self-auto shadow-sm">
                <button
                  onClick={() => setActiveTab("propositions")}
                  className={`px-5 py-3 rounded text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    activeTab === "propositions"
                      ? "bg-navy text-white dark:bg-red shadow-sm"
                      : "text-text-muted hover:text-navy dark:hover:text-white"
                  }`}
                >
                  Value Propositions
                </button>
                <button
                  onClick={() => setActiveTab("exposure")}
                  className={`px-5 py-3 rounded text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                    activeTab === "exposure"
                      ? "bg-navy text-white dark:bg-red shadow-sm"
                      : "text-text-muted hover:text-navy dark:hover:text-white"
                  }`}
                >
                  International Exposure
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Active Tab Panel with Teaser contents (short, attractive) */}
          <div className="transition-all duration-300 min-h-[380px]">
            {activeTab === "propositions" && (
              <div className="space-y-8 animate-fadeIn">
                {/* 2x2 Beautiful Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((val, idx) => {
                    const IconComponent = val.icon;
                    return (
                      <ScrollReveal key={val.id} direction="up" delay={idx * 80} duration={800}>
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-border-subtle dark:border-border-subtle/20 hover:border-red dark:hover:border-red hover:shadow-lg transition-all duration-300 flex gap-5 group h-full">
                          <div className="p-3 bg-red/5 dark:bg-slate-800 rounded-lg text-red self-start group-hover:bg-red group-hover:text-white transition-all flex-shrink-0">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-base sm:text-lg font-bold text-navy dark:text-white group-hover:text-red transition-colors font-sans">
                              {val.title}
                            </h4>
                            {/* Two-liner limited description */}
                            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-medium line-clamp-2 font-sans">
                              {val.description}
                            </p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* Highly Attractive Action button at the bottom */}
                <div className="pt-6 flex justify-center">
                  <button
                    onClick={() => onNavigate?.("value-propositions")}
                    className="inline-flex items-center gap-2.5 bg-navy hover:bg-navy/90 text-white dark:bg-red dark:hover:bg-red/90 px-6 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer font-sans group"
                  >
                    <span>Check Full Value Propositions</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === "exposure" && (
              <div className="space-y-8 animate-fadeIn">
                {/* 2x2 Beautiful Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {exposures.map((exp, idx) => {
                    const IconComponent = exp.icon;
                    return (
                      <ScrollReveal key={idx} direction="up" delay={idx * 80} duration={800}>
                        <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-xl border border-border-subtle dark:border-border-subtle/20 hover:border-red dark:hover:border-red hover:shadow-lg transition-all duration-300 flex gap-5 group h-full">
                          <div className="p-3 bg-red/5 dark:bg-slate-800 rounded-lg text-red self-start group-hover:bg-red group-hover:text-white transition-all flex-shrink-0">
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-base sm:text-lg font-bold text-navy dark:text-white group-hover:text-red transition-colors font-sans">
                                {exp.title}
                              </h4>
                              <span className="text-[10px] sm:text-xs font-extrabold text-red bg-red/10 px-2 py-0.5 rounded uppercase tracking-wider font-sans">
                                {exp.region}
                              </span>
                            </div>
                            {/* Two-liner limited summary */}
                            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-medium line-clamp-2 font-sans">
                              {exp.summary}
                            </p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* Highly Attractive Action button at the bottom */}
                <div className="pt-6 flex justify-center">
                  <button
                    onClick={() => onNavigate?.("international-exposure")}
                    className="inline-flex items-center gap-2.5 bg-navy hover:bg-navy/90 text-white dark:bg-red dark:hover:bg-red/90 px-6 py-3.5 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer font-sans group"
                  >
                    <span>Check Full International Exposure</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    );
  }

  return (
    <section id="value-exposure" className="py-24 bg-[#fafafa] dark:bg-slate-950/20 border-b border-border-subtle dark:border-border-subtle/15 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        
        {/* Header with layout style exact to Pedigree & Records section */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-subtle dark:border-border-subtle/20 pb-8">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-red uppercase tracking-widest block font-sans">Pedigree & Records</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight font-sans">
                Value Propositions & International Exposure
              </h2>
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 bg-surface-container-low dark:bg-slate-900/50 p-1.5 rounded-lg border border-border-subtle dark:border-border-subtle/20 self-start md:self-auto shadow-sm">
              <button
                onClick={() => setActiveTab("propositions")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "propositions"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                Value Propositions
              </button>
              <button
                onClick={() => setActiveTab("exposure")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "exposure"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                International Exposure
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Tab Panel */}
        <div className="transition-all duration-300">
          {activeTab === "propositions" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="grid lg:grid-cols-2 gap-8">
                {values.map((val, idx) => {
                  const IconComponent = val.icon;
                  return (
                    <ScrollReveal
                      key={val.id}
                      direction="up"
                      delay={idx * 100}
                      duration={800}
                    >
                      <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border border-border-subtle dark:border-border-subtle/20 h-full flex flex-col justify-between hover:shadow-lg transition-all group">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between">
                            <div className="p-3 bg-navy/5 dark:bg-slate-800 rounded-lg">
                              <IconComponent className="w-6 h-6 text-red" />
                            </div>
                            <span className="text-xs font-extrabold text-red bg-red/10 px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                              {val.badge}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <h3 className="text-xl font-bold text-navy dark:text-white group-hover:text-red transition-colors duration-200 font-sans">
                              {val.title}
                            </h3>
                            <p className="text-xs font-bold text-red/90 uppercase tracking-wide font-sans">
                              {val.subtitle}
                            </p>
                          </div>

                          <p className="text-sm text-text-muted leading-relaxed font-semibold font-sans">
                            {val.description}
                          </p>

                          <div className="border-t border-border-subtle/60 dark:border-border-subtle/10 pt-4 space-y-3">
                            <span className="text-[10px] font-black text-navy dark:text-white uppercase tracking-widest block font-sans">
                              Key Work Drivers:
                            </span>
                            <ul className="space-y-2">
                              {val.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed font-semibold font-sans">
                                  <span className="w-1.5 h-1.5 bg-red rounded-full mt-1.5 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-border-subtle/30 dark:border-border-subtle/10 flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold text-text-muted/60">
                            METRIC REFERENCE
                          </span>
                          <span className="text-xs font-bold text-navy dark:text-red flex items-center gap-1 font-sans">
                            {val.highlightText}
                            <ArrowUpRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Quote Panel */}
              <ScrollReveal direction="up" duration={700}>
                <div className="bg-navy dark:bg-slate-900 text-white p-8 sm:p-12 rounded-lg relative overflow-hidden flex flex-col md:flex-row items-center gap-8 justify-between mt-8">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red/5 rounded-full blur-3xl"></div>
                  <div className="space-y-3 max-w-xl">
                    <Sparkles className="w-8 h-8 text-red" />
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight font-sans">
                      Need an actionable, structured execution framework?
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal font-sans">
                      I bring senior corporate execution and startup agility to help transform highly complex plans into clear, step-by-step P&L realities.
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="bg-red hover:bg-red/90 text-white px-8 py-3.5 rounded-[4px] font-bold text-xs tracking-wider uppercase flex-shrink-0 cursor-pointer shadow-md active:scale-98 transition-all font-sans"
                  >
                    Let's Partner Up
                  </a>
                </div>
              </ScrollReveal>
            </div>
          )}

          {activeTab === "exposure" && (
            <div className="space-y-10 animate-fadeIn">
              <div className="grid md:grid-cols-2 gap-8">
                {exposures.map((exp, idx) => {
                  const IconComp = exp.icon;
                  return (
                    <ScrollReveal
                      key={idx}
                      direction="up"
                      delay={idx * 100}
                      duration={800}
                    >
                      <div className="bg-white dark:bg-slate-900 p-8 rounded-lg border-l-4 border-l-red border-y border-r border-border-subtle dark:border-border-subtle/20 h-full flex flex-col justify-between hover:shadow-md transition-all group">
                        <div className="space-y-5">
                          <div className="flex justify-between items-center">
                            <span className="inline-flex items-center gap-1 bg-red/10 text-red text-xs font-extrabold px-3 py-1 rounded-sm uppercase tracking-widest font-sans">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.region}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-text-muted bg-white dark:bg-slate-950 px-2.5 py-1 rounded border border-border-subtle dark:border-border-subtle/25">
                              {exp.context}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <h3 className="text-xl font-bold text-navy dark:text-white group-hover:text-red transition-colors duration-200 font-sans">
                              {exp.title}
                            </h3>
                            <p className="text-xs font-semibold text-text-muted font-sans">
                              {exp.location}
                            </p>
                          </div>

                          <p className="text-sm text-navy dark:text-white/90 italic font-medium leading-relaxed font-sans">
                            "{exp.summary}"
                          </p>

                          <div className="border-t border-border-subtle/60 dark:border-border-subtle/10 pt-4 space-y-3">
                            <span className="text-[10px] font-black text-navy dark:text-white uppercase tracking-widest block font-sans">
                              Operational Highlights:
                            </span>
                            <ul className="space-y-2">
                              {exp.details.map((detail, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-2 text-sm text-text-muted leading-relaxed font-semibold font-sans">
                                  <span className="text-red font-bold mt-0.5">•</span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-border-subtle/30 dark:border-border-subtle/10 flex items-center justify-between text-xs text-text-muted">
                          <span className="text-[10px] font-black tracking-wider uppercase font-sans">Matrix Infrastructure</span>
                          <IconComp className="w-5 h-5 text-red/60 group-hover:text-red transition-colors" />
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Testimonial Banner */}
              <ScrollReveal direction="up" duration={700}>
                <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-lg border border-dashed border-border-subtle dark:border-border-subtle/20 max-w-4xl mx-auto text-center space-y-4 font-sans">
                  <Globe className="w-8 h-8 text-red mx-auto animate-pulse" />
                  <p className="text-sm sm:text-base text-navy dark:text-white italic leading-relaxed font-medium">
                    "Navigating international matrix environments demands deep diplomatic precision, zero-compromise compliance alignment, and the cross-border capacity to speak both visual analytics and direct board narrative."
                  </p>
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-red block">Jayita S Gupta</span>
                    <span className="text-xs text-text-muted">Senior Strategic Consultant & Independent Advisor</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
