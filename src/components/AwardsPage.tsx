import React, { useEffect } from "react";
import { Award, ShieldCheck, TrendingUp, Sparkles, Building, ArrowLeft, Trophy, Star, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface AwardsPageProps {
  onBackToHome: () => void;
}

export default function AwardsPage({ onBackToHome }: AwardsPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const awardsList = [
    {
      title: "Women Leaders in Engineering",
      year: "2023",
      conferredBy: "Women Entrepreneur India",
      description: "Recognized for driving technical excellence, overseeing state-of-the-art building design workflows, and championing advanced engineering technologies nationally.",
      linkUrl: "https://2b50131b-4618-445d-9f68-66ba03669894.filesusr.com/ugd/044ee4_0c960329b41041228d0b14bc823c2f56.pdf",
      badgeText: "ENGINEERING EXCELLENCE"
    },
    {
      title: "10 Most Inspiring Business Women in India",
      year: "2022",
      conferredBy: "CXO Outlook",
      description: "Conferred for outstanding operational leadership, showing high business grit in scaling operations, and establishing robust corporate frameworks.",
      linkUrl: "https://www.treistek.in/cxomagazine",
      badgeText: "NATIONAL LEADERSHIP"
    },
    {
      title: "India Icon Awards",
      year: "2019",
      conferredBy: "National Recognition",
      description: "Presented for pioneering industrial development, demonstrating high-growth startup practices, and excellence in organizational setup.",
      linkUrl: "https://www.treistek.in/india-icon-award-2019",
      badgeText: "DISTINGUISHED HONOR"
    },
    {
      title: "Featured Profile: Secrets to a Sustainable Passion",
      year: "Featured Profile",
      conferredBy: "Brandz Magazine & Construction World Magazine",
      description: "Published profile detailing successful tech-led business scaling secrets, leadership principles, and building sustainable, high-impact business models.",
      linkUrl: "https://brandzmagazine.com/a-successful-woman-entrepreneurs-secrets-to-a-sustainable-passion/",
      badgeText: "INDUSTRY PRESS"
    }
  ];

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-navy selection:text-white pb-20 transition-colors duration-200">
      
      {/* Banner/Header */}
      <section className="relative bg-navy dark:bg-slate-950 text-white pt-24 pb-16 overflow-hidden border-b border-white/5 transition-colors duration-200">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-[#122e57] opacity-90 z-0"></div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white transition-colors mb-4 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </button>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center gap-3">
              <Trophy className="w-10 h-10 text-red animate-pulse" />
              Honors & Recognition
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Official press profiles, industry features, and national leadership awards recognizing outstanding executive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Awards & Achievements Grid */}
      <section className="py-16 bg-white dark:bg-background transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6 space-y-16">
          
          {/* Key Awards Section */}
          <div className="space-y-8">
            <div className="border-b border-border-subtle dark:border-border-subtle/20 pb-4">
              <span className="text-xs font-bold text-red uppercase tracking-widest block mb-1">PRESTIGIOUS HONORS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight">
                National Leadership Awards & Press Features
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {awardsList.map((award, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100} duration={800}>
                  <div className="bg-surface-container-low dark:bg-slate-900/40 p-8 rounded-lg border border-border-subtle dark:border-border-subtle/20 relative overflow-hidden group h-full hover:shadow-lg transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-red/10 rounded-lg flex-shrink-0">
                          <Award className="w-7 h-7 text-red" />
                        </div>
                        <span className="text-[10px] font-extrabold text-red uppercase tracking-widest bg-red/5 px-2.5 py-1 rounded">
                          {award.badgeText}
                        </span>
                      </div>
                      
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-mono font-bold text-red block">
                          {award.year} — {award.conferredBy}
                        </span>
                        <h3 className="text-xl font-bold text-navy dark:text-white leading-snug group-hover:text-red transition-colors duration-200">
                          {award.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-text-muted leading-relaxed font-medium">
                        {award.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-border-subtle/60 dark:border-border-subtle/10 mt-6">
                      <a
                        href={award.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red hover:text-navy dark:hover:text-white transition-colors group/link"
                      >
                        Verify Award Link
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Scale Milestones Section */}
          <div className="space-y-8">
            <div className="border-b border-border-subtle dark:border-border-subtle/20 pb-4">
              <span className="text-xs font-bold text-red uppercase tracking-widest block mb-1">OPERATIONAL EXCELLENCE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight">
                Scale & Build Milestone Highlight
              </h2>
            </div>

            <ScrollReveal direction="up" duration={900}>
              <div className="bg-navy text-white p-8 sm:p-10 rounded-lg border border-white/5 relative overflow-hidden dark:bg-slate-900 transition-all">
                <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-red/10 rounded-full blur-3xl"></div>
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-red/10 text-red text-xs px-3 py-1 font-bold uppercase tracking-wider rounded-sm">
                      <Building className="w-3.5 h-3.5" />
                      TreisTek India Scale Execution
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      Scaling From Zero to ₹50Cr+
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal">
                      Supervised all operational, financial, and strategic growth drivers as a primary business leader. Successfully expanded business capabilities across multidisciplinary engineering, mapping, and spatial CAD portfolios.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                      <div className="border-l-2 border-red pl-4">
                        <span className="text-xs text-white/60 block uppercase font-bold tracking-widest">Revenue Scale</span>
                        <span className="text-lg sm:text-xl font-black text-red">₹500M+ ARR</span>
                      </div>
                      <div className="border-l-2 border-red pl-4">
                        <span className="text-xs text-white/60 block uppercase font-bold tracking-widest">Operational Base</span>
                        <span className="text-lg sm:text-xl font-black text-red">100% P&L Own</span>
                      </div>
                      <div className="border-l-2 border-red pl-4 col-span-2 sm:col-span-1">
                        <span className="text-xs text-white/60 block uppercase font-bold tracking-widest">Compliance</span>
                        <span className="text-lg sm:text-xl font-black text-red">ISO Audit Ready</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-4 bg-white/5 dark:bg-black/20 p-6 rounded-md border border-white/10 space-y-4">
                    <span className="text-xs font-bold text-red uppercase tracking-widest block">Executive Focus Area</span>
                    <ul className="space-y-2.5 text-xs text-white/95 font-medium">
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red flex-shrink-0" />
                        Corporate Strategy Formulation
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red flex-shrink-0" />
                        Process Architecture Optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red flex-shrink-0" />
                        Regulatory Compliance & Audits
                      </li>
                      <li className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red flex-shrink-0" />
                        Consolidated Risk Management
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Testimonial / Industry Endorsement Quote */}
          <div className="bg-surface-container-low dark:bg-slate-900/10 p-8 rounded-lg border border-dashed border-border-subtle dark:border-border-subtle/20 text-center max-w-3xl mx-auto space-y-4">
            <Sparkles className="w-8 h-8 text-red mx-auto" />
            <p className="text-base sm:text-lg text-navy dark:text-white italic leading-relaxed font-medium">
              "Jayita S Gupta brings a rare combination of strategic thinking and hands-on operational command. Her national awards reflect a career of bringing rigorous corporate leadership and clear pathways to scaling businesses."
            </p>
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-red block">CXO OUTLOOK PANELIST</span>
              <span className="text-xs text-text-muted">Honors Evaluation Board</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
