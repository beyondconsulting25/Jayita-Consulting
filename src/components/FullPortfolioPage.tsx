import React, { useState, useEffect, useRef } from "react";
import { Project } from "../types";
import { projectsData } from "../projectsData";
import { ArrowLeft, ExternalLink, X, TrendingUp, Info, Search, Sparkles, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SampleUnlocker from "./SampleUnlocker";

interface FullPortfolioPageProps {
  onBackToHome: () => void;
  onNavigateToContact: () => void;
}

export default function FullPortfolioPage({ onBackToHome, onNavigateToContact }: FullPortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Work");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showSampleUnlocker, setShowSampleUnlocker] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const categories = [
    "All Work",
    "Pitch Decks",
    "Business Plans",
    "Strategy",
    "Market Research",
    "Presentations",
    "Courses"
  ];

  // Filter based on selected category, industry, and search input
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All Work" || (() => {
      if (selectedCategory === "Pitch Decks") return project.badge === "Pitch Deck";
      if (selectedCategory === "Business Plans") return project.badge === "Business Plan";
      if (selectedCategory === "Strategy") return project.badge === "Strategy";
      if (selectedCategory === "Market Research") return project.badge === "Market Research";
      if (selectedCategory === "Presentations") return project.badge === "Presentation";
      if (selectedCategory === "Courses") return project.badge === "Course";
      return true;
    })();

    const matchesIndustry = !selectedIndustry || (() => {
      const cat = project.category.toLowerCase();
      const title = project.title.toLowerCase();
      const sub = project.subtitle.toLowerCase();
      const ind = selectedIndustry.toLowerCase();
      
      if (ind === "technology & saas") {
        return cat.includes("technology") || cat.includes("saas");
      }
      if (ind === "fintech") {
        return cat.includes("fintech");
      }
      if (ind === "healthcare & medtech") {
        return cat.includes("healthcare") || cat.includes("healthtech") || cat.includes("medical");
      }
      if (ind === "edtech") {
        return cat.includes("edtech") || cat.includes("education");
      }
      if (ind === "real estate & proptech") {
        return cat.includes("real estate") || cat.includes("property");
      }
      if (ind === "logistics") {
        return cat.includes("logistics");
      }
      if (ind === "food & beverage") {
        return cat.includes("f&b") || cat.includes("food");
      }
      if (ind === "agritech") {
        return cat.includes("agritech") || cat.includes("agriculture");
      }
      
      const cleanInd = ind.replace(/&/g, " ").replace(/\s+/g, " ").trim();
      const words = cleanInd.split(" ");
      return words.some(word => word.length > 2 && (cat.includes(word) || title.includes(word) || sub.includes(word)));
    })();

    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.badge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.solution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesIndustry && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-navy selection:text-white pb-20 transition-colors duration-200">
      
      {/* Header Banner */}
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
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              The Strategic Ledger
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              A comprehensive archive of corporate scaling interventions, financial restructurings, and pitch decks designed by Jayita S.
            </p>
          </div>
        </div>
      </section>

      {/* Main Filter and Search Controls */}
      <section ref={gridRef} className="py-12 bg-white dark:bg-background transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-6 mb-10 border-b border-border-subtle dark:border-border-subtle/20 pb-8">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 text-navy text-[14px] font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 border rounded-full transition-all duration-250 cursor-pointer text-xs sm:text-sm ${
                    selectedCategory === cat
                      ? "bg-navy text-white border-navy font-bold dark:bg-red dark:border-red"
                      : "border-border-subtle dark:border-border-subtle/20 text-text-muted hover:border-navy hover:text-navy hover:bg-navy/5 dark:hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:max-w-xs">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
              <input
                type="text"
                placeholder="Search intervention profiles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-border-subtle dark:border-border-subtle/20 focus:border-navy focus:outline-none bg-white dark:bg-slate-900 text-text-main dark:text-white rounded-[4px]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-text-muted hover:text-navy dark:hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Results Count and Empty State */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">
              Showing {filteredProjects.length} of {projectsData.length} Case Studies
            </span>
            {selectedIndustry && (
              <div className="inline-flex items-center gap-2 bg-red/10 text-red dark:bg-red/20 dark:text-red px-3 py-1.5 rounded-[4px] text-xs font-bold animate-fadeIn">
                <span>Industry: {selectedIndustry}</span>
                <button 
                  onClick={() => setSelectedIndustry(null)}
                  className="hover:opacity-80 cursor-pointer flex items-center justify-center p-0.5 rounded-full hover:bg-red/20"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center space-y-4 border border-dashed border-border-subtle dark:border-border-subtle/20 rounded-lg bg-surface-container-low dark:bg-slate-900/10">
              <p className="text-text-muted text-base font-medium">No strategic cases match your current query.</p>
              <button 
                onClick={() => { setSelectedCategory("All Work"); setSelectedIndustry(null); setSearchQuery(""); }}
                className="text-red font-bold text-sm underline hover:opacity-80"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            /* Complete 25 Portfolio Grid */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction="up"
                  delay={50 + (index % 3) * 60}
                  duration={700}
                >
                  <div
                    onClick={() => { setSelectedProject(project); setShowSampleUnlocker(false); }}
                    className="group relative bg-background dark:bg-slate-900/40 border border-border-subtle dark:border-border-subtle/20 overflow-hidden rounded-[4px] cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-48 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
                        <img
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out group-hover:scale-103"
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 right-4 bg-navy dark:bg-slate-800 text-white text-[10px] px-3 py-1 uppercase font-bold tracking-tighter rounded-sm">
                          {project.badge}
                        </div>
                      </div>
                      <div className="p-6 space-y-3">
                        <h4 className="text-xl font-bold text-navy dark:text-white group-hover:text-red transition-colors duration-200">
                          {project.title}
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2">
                      <span className="text-red font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Project Details
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 22+ Industries Segment */}
      <section className="py-20 bg-white dark:bg-background border-t border-border-subtle dark:border-border-subtle/15 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12">
          {/* Section Header */}
          <ScrollReveal direction="up" duration={700}>
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-red uppercase tracking-widest block">
                Industry Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight">
                22+ Industries. One Strategic Partner.
              </h2>
              <div className="w-16 h-1 bg-red mx-auto"></div>
              <p className="text-sm text-text-muted font-normal leading-relaxed">
                Broad operational exposure allows cross-pollination of market insights, product structures, and strategic execution plays across diverse business landscapes.
              </p>
            </div>
          </ScrollReveal>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Technology & SaaS",
              "Fintech",
              "Healthcare & MedTech",
              "E-Commerce & Retail",
              "EdTech",
              "Real Estate & PropTech",
              "Manufacturing",
              "Logistics",
              "Media & Entertainment",
              "Hospitality & Travel",
              "Food & Beverage",
              "AgriTech",
              "Energy & CleanTech",
              "Automotive & Mobility",
              "HR Tech",
              "Non-Profit & Impact",
              "Consumer Goods",
              "Telecommunications",
              "Pharma & BioTech",
              "Construction",
              "Legal & CompTech",
              "Fashion & Lifestyle"
            ].map((ind, idx) => {
              const isSelected = selectedIndustry === ind;
              return (
                <ScrollReveal
                  key={ind}
                  direction="up"
                  delay={idx * 15}
                  duration={500}
                >
                  <button
                    onClick={() => {
                      setSelectedIndustry(ind);
                      if (gridRef.current) {
                        gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className={`w-full text-left bg-[#fcfcfc] dark:bg-slate-900 border px-5 py-3.5 rounded-[4px] hover:border-red dark:hover:border-red hover:bg-white dark:hover:bg-slate-950 hover:shadow-md transition-all duration-200 flex items-center gap-3 group cursor-pointer ${
                      isSelected 
                        ? "border-red dark:border-red bg-red/5 dark:bg-red/5 shadow-sm" 
                        : "border-border-subtle dark:border-border-subtle/20"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors flex-shrink-0 ${
                      isSelected ? "bg-red" : "bg-red/40 group-hover:bg-red"
                    }`} />
                    <span className={`text-xs sm:text-sm font-bold transition-colors duration-200 ${
                      isSelected ? "text-red" : "text-navy dark:text-white group-hover:text-red"
                    }`}>
                      {ind}
                    </span>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Micro-insight box */}
          <ScrollReveal direction="up" duration={700} delay={150}>
            <div className="bg-navy dark:bg-slate-950 p-6 sm:p-8 rounded-[4px] border border-white/5 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  Cross-Sector Optimization Advantage
                </span>
                <p className="text-sm text-white/80 font-medium">
                  Because I have structured and delivered projects across twenty-two distinct industries, I do not rely on single-industry silos. I adapt high-performance playbooks from SaaS to healthcare, or fintech compliance systems to operational supply chains.
                </p>
              </div>
              <button
                onClick={onNavigateToContact}
                className="bg-red text-white hover:opacity-90 active:scale-95 px-5 py-3 rounded text-[11px] font-black uppercase tracking-widest transition-all cursor-pointer whitespace-nowrap shadow-md"
              >
                Consult On Your Sector
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dynamic Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-navy/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn" 
          onClick={() => { setSelectedProject(null); setShowSampleUnlocker(false); }}
        >
          <div 
            className={`bg-white dark:bg-slate-900 ${showSampleUnlocker ? "max-w-[720px]" : "max-w-[650px]"} w-full rounded-lg border border-border-subtle dark:border-border-subtle/20 shadow-2xl overflow-hidden relative animate-slideUp transition-all duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image banner */}
            <div className="h-44 relative bg-slate-100 dark:bg-slate-950">
              <img
                className="w-full h-full object-cover"
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-navy/30"></div>
              <button
                onClick={() => { setSelectedProject(null); setShowSampleUnlocker(false); }}
                className="absolute top-4 right-4 bg-white/25 hover:bg-white/40 text-white rounded-full p-2 transition-colors duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 space-y-1 text-white">
                <span className="bg-red text-[10px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl font-bold tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Contents */}
            <div className="p-6 space-y-6">
              {showSampleUnlocker ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setShowSampleUnlocker(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy dark:text-red hover:underline cursor-pointer"
                  >
                    ← Back to Project Details
                  </button>
                  <SampleUnlocker project={selectedProject} />
                </div>
              ) : (
                <>
                  {/* Metrics Highlight bar */}
                  <div className="bg-surface-container-low dark:bg-slate-950/50 p-4 rounded-md border border-border-subtle dark:border-border-subtle/20 flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-red flex-shrink-0" />
                    <div>
                      <span className="text-[12px] font-bold text-navy dark:text-red uppercase tracking-wider block">
                        KEY METRICS & OUTCOME
                      </span>
                      <span className="text-base font-bold text-navy dark:text-white">
                        {selectedProject.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Solution details */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-red uppercase tracking-widest flex items-center gap-1">
                        <Info className="w-3.5 h-3.5" /> THE CHALLENGE
                      </span>
                      <p className="text-[14px] text-text-muted leading-relaxed font-sans">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-border-subtle dark:border-border-subtle/20 pt-4">
                      <span className="text-[11px] font-bold text-navy dark:text-white uppercase tracking-widest flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-navy dark:text-red" /> STRATEGIC SOLUTION
                      </span>
                      <p className="text-[14px] text-text-muted leading-relaxed font-sans">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highly Attractive Secure Resource Vault Banner */}
                  <div className="bg-red/5 dark:bg-red/5 p-4 rounded-md border border-red/10 dark:border-red/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
                    <div className="space-y-1 text-center sm:text-left">
                      <span className="text-[11px] font-black text-red uppercase tracking-widest block">
                        SECURE RESOURCE VAULT
                      </span>
                      <p className="text-xs text-text-muted font-medium">
                        Check a premium structured blueprint & sample file for this project.
                      </p>
                    </div>
                    <button
                      onClick={() => setShowSampleUnlocker(true)}
                      className="bg-navy hover:bg-navy/90 text-white dark:bg-red dark:hover:bg-red/90 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-[4px] cursor-pointer flex items-center gap-2 whitespace-nowrap shadow-sm active:scale-98 transition-all"
                    >
                      <Lock className="w-3.5 h-3.5 text-white" /> Check the Sample
                    </button>
                  </div>

                  {/* Footer action button */}
                  <div className="pt-4 border-t border-border-subtle dark:border-border-subtle/20 flex justify-end">
                    <button
                      onClick={() => { setSelectedProject(null); setShowSampleUnlocker(false); }}
                      className="bg-navy text-white dark:bg-red px-6 py-2.5 rounded-[4px] font-semibold text-sm hover:opacity-90 active:scale-98 transition-all cursor-pointer font-sans"
                    >
                      Close Details
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
