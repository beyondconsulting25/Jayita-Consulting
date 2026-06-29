import React, { useState } from "react";
import { 
  Briefcase, 
  Layers, 
  Calendar, 
  ArrowRight,
  TrendingUp,
  Workflow
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function EngagementModel() {
  const [activeTab, setActiveTab] = useState<"engagement" | "alignment">("engagement");

  const models = [
    {
      icon: Briefcase,
      badge: "Highly Requested",
      title: "Fractional COO Retainer",
      subtitle: "Continuous Operational & Scale Leadership",
      description: "Direct boardroom advisory and hands-on operational leadership on an ongoing fractional basis. Ideal for growth-stage businesses needing executive guidance without the overhead of a full-time hire.",
      features: [
        "Weekly strategic leadership syncs",
        "Ongoing process mapping & SOP optimization",
        "P&L monitoring & operational cost controls",
        "Board meeting preparation & investor-relations support"
      ],
      timeline: "Ongoing (3+ Months Commitment)",
      actionLabel: "Enquire for Retainer"
    },
    {
      icon: Layers,
      badge: "Structured Scope",
      title: "Project-Based Advisory",
      subtitle: "Targeted Deliverables & Strategic Blueprints",
      description: "High-impact, sprint-style engagements focused on creating tangible assets—such as investor pitch decks, business plans, and market entry strategies.",
      features: [
        "Comprehensive investor pitch deck construction",
        "Detailed business plan & financial modeling",
        "GTM launch roadmaps for new market entry",
        "Competitor benchmarking & deep-market sizing analysis"
      ],
      timeline: "4 - 8 Weeks Delivery Cycle",
      actionLabel: "View Project Templates"
    },
    {
      icon: Calendar,
      badge: "Ad-hoc Assessment",
      title: "Strategic Boardroom Audits",
      subtitle: "Executive Diagnostic Sessions",
      description: "Deep-dive diagnostic sessions to identify organizational friction points, evaluate startup readiness, or refine high-stakes fundraising narratives.",
      features: [
        "Comprehensive operational health check",
        "Pitch-deck review & narrative stress-testing",
        "SME growth planning diagnostic",
        "Immediate actionable prioritization list"
      ],
      timeline: "1 - 2 Business Days Execution",
      actionLabel: "Book Diagnostic Session"
    }
  ];

  const steps = [
    {
      step: "01",
      label: "Discover",
      title: "Understand Your World",
      desc: "Structured discovery to understand your goals, challenges, and current state — no generic templates."
    },
    {
      step: "02",
      label: "Diagnose",
      title: "Find the Real Gaps",
      desc: "Identify critical leverage points and the clearest strategic path forward — with honest analysis."
    },
    {
      step: "03",
      label: "Blueprint",
      title: "Build the Plan",
      desc: "Develop a crisp, actionable strategic plan with measurable milestones and clear ownership."
    },
    {
      step: "04",
      label: "Deliver",
      title: "Execute Alongside You",
      desc: "Stay in the loop until outcomes are real and measurable — not just a slide deck handed over."
    }
  ];

  return (
    <section id="engagement-model" className="py-24 bg-[#fafafa] dark:bg-slate-950/20 border-b border-border-subtle dark:border-border-subtle/15 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6 space-y-12">
        
        {/* Polished Interactive Sub-Dashboard Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border-subtle dark:border-border-subtle/20 pb-8">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-red uppercase tracking-widest block">Engagement & Alignment</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight">
                Methodology & Process Framework
              </h2>
            </div>

            {/* Tab controls */}
            <div className="flex flex-wrap gap-2 bg-surface-container-low dark:bg-slate-900/50 p-1.5 rounded-lg border border-border-subtle dark:border-border-subtle/20 self-start md:self-auto shadow-sm">
              <button
                onClick={() => setActiveTab("engagement")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "engagement"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                The Engagement Model
              </button>
              <button
                onClick={() => setActiveTab("alignment")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "alignment"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                Four Steps to Strategic Alignment
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Active Tab Panel */}
        <div className="transition-all duration-300">
          
          {activeTab === "engagement" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-2 pb-2">
                <Workflow className="w-5 h-5 text-red" />
                <span className="text-xs font-black text-navy dark:text-white uppercase tracking-wider">
                  Operational & Advisory Retainers (Flexible Formats)
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted font-medium max-w-2xl leading-relaxed mb-6">
                I offer multiple commitment models tailored to your current scale level. From ongoing part-time fractional operating to strategic sprint assessments, select the framework that perfectly integrates with your board.
              </p>

              <div className="grid md:grid-cols-3 gap-8 pt-4">
                {models.map((model, idx) => {
                  const IconComponent = model.icon;
                  return (
                    <ScrollReveal
                      key={idx}
                      direction="up"
                      delay={idx * 100}
                      duration={800}
                      className="flex"
                    >
                      <div className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 p-8 rounded-[4px] hover:border-red dark:hover:border-red hover:shadow-lg transition-all duration-300 flex flex-col justify-between items-stretch w-full relative group">
                        <div className="space-y-6">
                          {/* Badge & Icon Row */}
                          <div className="flex items-center justify-between">
                            <span className="inline-block text-[9px] font-black text-red uppercase tracking-widest bg-red/10 px-2.5 py-1 rounded">
                              {model.badge}
                            </span>
                            <div className="p-2.5 bg-navy/5 dark:bg-slate-800 rounded group-hover:bg-red/10 transition-colors">
                              <IconComponent className="w-5 h-5 text-navy dark:text-red" />
                            </div>
                          </div>

                          {/* Title */}
                          <div className="space-y-1">
                            <h3 className="text-lg font-black text-navy dark:text-white group-hover:text-red transition-colors tracking-tight">
                              {model.title}
                            </h3>
                            <p className="text-xs text-red font-bold uppercase tracking-wider">
                              {model.subtitle}
                            </p>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-text-muted leading-relaxed font-semibold">
                            {model.description}
                          </p>

                          {/* Divider */}
                          <div className="border-t border-dashed border-border-subtle dark:border-border-subtle/10 pt-4">
                            <span className="text-[10px] font-black text-navy dark:text-white uppercase tracking-widest block mb-3">
                              Scope & Deliverables
                            </span>
                            <ul className="space-y-2">
                              {model.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed font-semibold">
                                  <span className="text-red font-bold">•</span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Card Footer info */}
                        <div className="pt-6 mt-6 border-t border-border-subtle dark:border-border-subtle/10 flex items-center justify-between gap-2">
                          <div className="flex flex-col">
                            <span className="text-[9px] text-text-muted uppercase font-bold tracking-widest">Typical Timeline</span>
                            <span className="text-[11px] font-bold text-navy dark:text-white">{model.timeline}</span>
                          </div>
                          <a
                            href="#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-black text-red uppercase tracking-widest hover:gap-2.5 transition-all"
                          >
                            Enquire
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "alignment" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center gap-2 pb-2">
                <TrendingUp className="w-5 h-5 text-red" />
                <span className="text-xs font-black text-navy dark:text-white uppercase tracking-wider">
                  Strategic Advisory Blueprinting & Implementation
                </span>
              </div>
              <p className="text-xs sm:text-sm text-text-muted font-medium max-w-2xl leading-relaxed mb-6">
                My client lifecycle process is engineered for zero-friction boarding and rapid framework execution. No endless consulting reports — just structured discovery, immediate diagnostic audits, and rigorous delivery.
              </p>

              <div className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/25 rounded-lg p-8 sm:p-10 space-y-10 shadow-sm">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {steps.map((st, sIdx) => (
                    <div key={sIdx} className="space-y-3 relative group">
                      {/* Step Number Display */}
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl font-black text-red/20 group-hover:text-red transition-colors">
                          {st.step}
                        </span>
                        <div className="h-[1.5px] bg-border-subtle dark:bg-slate-800 flex-grow" />
                      </div>
                      {/* Step Detail */}
                      <span className="text-[10px] font-bold text-red uppercase tracking-widest block">
                        {st.label}
                      </span>
                      <h4 className="text-sm font-black text-navy dark:text-white uppercase tracking-wider">
                        {st.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed font-semibold">
                        {st.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
