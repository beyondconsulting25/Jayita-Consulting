import React, { useEffect } from "react";
import { 
  ArrowLeft,
  Presentation, 
  TrendingUp, 
  FileText, 
  Search, 
  Briefcase,
  CheckCircle2,
  Sparkles,
  GraduationCap
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface FullServicesPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function FullServicesPage({ onBackToHome, onNavigateToContact }: FullServicesPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const services = [
    {
      number: "01",
      icon: Presentation,
      title: "Investor Pitch Deck Creation & Fundraising Story Design",
      description: "End-to-end pitch deck development for startups and growth-stage businesses. From narrative structuring and financial storytelling to visual slide design — I help you communicate your business case compellingly to investors, VCs, and funding bodies.",
      highlights: [
        "Fundraising narrative & story arc",
        "Slide deck design (investor-ready)",
        "Financial highlights & projections",
        "Market opportunity framing",
        "Competitive positioning slides"
      ]
    },
    {
      number: "02",
      icon: TrendingUp,
      title: "Business Strategy & Growth Consulting (End-to-End)",
      description: "Structured strategy engagements for startups and SMEs looking to define direction, enter new markets, or accelerate growth. I deliver actionable strategy frameworks grounded in market intelligence and operational reality.",
      highlights: [
        "Strategic planning & roadmaps",
        "Market entry strategy",
        "Competitive intelligence",
        "Business model design",
        "Revenue growth planning"
      ]
    },
    {
      number: "03",
      icon: Briefcase,
      title: "Corporate Presentation Design & Executive Slide Decks",
      description: "Professional PowerPoint and presentation design for board meetings, leadership reviews, sales pitches, and stakeholder communications. Transforming complex data and strategy into clear, compelling executive narratives.",
      highlights: [
        "Board & governance presentations",
        "Executive business reviews",
        "Sales & partnership decks",
        "Strategy & vision presentations",
        "Investor update decks"
      ]
    },
    {
      number: "04",
      icon: Search,
      title: "Market Research & Competitive Analysis Report",
      description: "Deep-dive market research, industry sizing, competitor benchmarking, and opportunity analysis reports — designed to inform strategic decisions and investor conversations.",
      highlights: [
        "Market sizing & segmentation",
        "Competitor benchmarking",
        "Industry trend analysis",
        "Customer persona mapping",
        "Go-to-market opportunity assessment"
      ]
    },
    {
      number: "05",
      icon: FileText,
      title: "Business Plan Development (Investor + Operational Ready)",
      description: "Comprehensive business plans that work for both investors and internal execution teams. Structured around financial projections, operational plans, market analysis, and strategic milestones.",
      highlights: [
        "Full business plan document",
        "Financial model & projections",
        "Operational execution plan",
        "Risk assessment framework",
        "Milestone & KPI framework"
      ]
    },
    {
      number: "06",
      icon: GraduationCap,
      title: "Startup Advisory & Mentoring",
      description: "Advisory board membership and ongoing mentoring for first-time founders — covering governance, leadership, team building, and scaling decisions at every stage.",
      highlights: [
        "Advisory board governance setup",
        "Founder-to-executive mindset coaching",
        "Organizational design & talent mapping",
        "Scaling roadmap & pivot validation",
        "Investor readiness & review loops"
      ]
    }
  ];

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-navy selection:text-white pb-20 transition-colors duration-200">
      
      {/* Header Banner */}
      <section className="relative bg-navy dark:bg-slate-950 text-white pt-24 pb-16 overflow-hidden border-b border-white/5 transition-colors duration-200">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-[#122e57] opacity-90 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors mb-4 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-red" />
              Strategic Execution Frameworks
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              My Consulting Services
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl">
              Specialised advisory blueprints built on two decades of operational expertise. Empowering early-stage startups and SMEs to structure strategy, streamline operations, and secure growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 bg-white dark:bg-background transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollReveal
                  key={service.number}
                  direction="up"
                  delay={index * 100}
                  duration={800}
                >
                  <div className="bg-[#fcfcfc] dark:bg-slate-900/30 p-8 sm:p-10 border border-border-subtle dark:border-border-subtle/20 rounded-[4px] hover:shadow-md transition-all duration-300 relative group flex flex-col lg:flex-row gap-8 items-stretch justify-between">
                    
                    {/* Left Column - Number, Icon & Description */}
                    <div className="space-y-4 max-w-xl lg:w-[60%] flex flex-col justify-center">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-4xl font-extrabold text-red/30 dark:text-red/20">
                          {service.number}
                        </span>
                        <div className="p-2.5 bg-navy/5 dark:bg-slate-800 rounded">
                          <IconComponent className="w-6 h-6 text-navy dark:text-red" />
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-navy dark:text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Right Column - Deliverables checklist */}
                    <div className="lg:w-[35%] w-full bg-white dark:bg-slate-950/40 p-6 rounded border border-border-subtle dark:border-border-subtle/15 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black text-navy dark:text-red uppercase tracking-widest block mb-4">
                          DELIVERABLES & SCOPE
                        </span>
                        <ul className="space-y-3">
                          {service.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs font-semibold text-text-muted">
                              <CheckCircle2 className="w-4 h-4 text-red flex-shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA Banner at bottom */}
          <div className="mt-16 bg-navy dark:bg-slate-950 border border-white/5 p-8 sm:p-10 rounded-lg text-white text-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Design Your Strategy Blueprint?
            </h3>
            <p className="text-sm text-white/80 max-w-xl mx-auto">
              Collaborate directly with an enterprise-grade COO advisor to audit your operations, formulate go-to-market plans, or build your pitch deck structure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button
                onClick={onNavigateToContact}
                className="bg-red text-white hover:opacity-90 active:scale-95 px-6 py-3 rounded text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer shadow-md"
              >
                Schedule Boardroom Audit
              </button>
              <button
                onClick={onBackToHome}
                className="bg-white/10 text-white hover:bg-white/20 active:scale-95 px-6 py-3 rounded text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
