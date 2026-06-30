import React, { useState } from "react";
import { Project } from "../types";
import { ExternalLink, X, TrendingUp, Info, Lock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { projectsData } from "../projectsData";
import SampleUnlocker from "./SampleUnlocker";

interface PortfolioProps {
  onExploreMore: () => void;
}

export default function Portfolio({ onExploreMore }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Work");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showSampleUnlocker, setShowSampleUnlocker] = useState<boolean>(false);

  const categories = [
   "All Work",
    "Pitch Decks",
    "Business Plans",
    "Strategy",
    "Market Research",
    "Presentations",
    "Financial Reporting",
    "Frameworks",
    "Courses”,
    "Others"
  ];

  // Slice exactly the first 6 projects to showcase on the homepage
  const featuredProjects = projectsData.slice(0, 6);

  const filteredProjects = selectedCategory === "All Work"
    ? featuredProjects
    : featuredProjects.filter((p) => {
        if (selectedCategory === "Pitch Decks") return p.badge === "Pitch Deck";
        if (selectedCategory === "Business Plans") return p.badge === "Business Plan";
        if (selectedCategory === "Strategy") return p.badge === "Strategy";
        if (selectedCategory === "Market Research") return p.badge === "Market Research";
        if (selectedCategory === "Presentations") return p.badge === "Presentation";
       if (selectedCategory === "Financial Reporting") return p.badge === "Financial Reporting";
       if (selectedCategory === "Frameworks") return p.badge === "Frameworks";
        if (selectedCategory === "Courses") return p.badge === "Course";
       if (selectedCategory === "Others") return p.badge === "Others";
        return true;
      });

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-background transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Section */}
        <ScrollReveal direction="up" duration={700}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                Impact at Scale
              </h2>
              <p className="text-base text-text-muted max-w-md leading-relaxed">
                A selection of strategic interventions and successful capital raises.
              </p>
            </div>

            {/* Filtering Tab controls */}
            <div className="flex flex-wrap gap-2 text-navy text-[14px] font-semibold">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-1.5 border rounded-full transition-all duration-250 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-navy text-white border-navy font-bold dark:bg-red dark:border-red"
                      : "border-border-subtle dark:border-border-subtle/20 text-text-muted hover:border-navy hover:text-navy hover:bg-navy/5 dark:hover:bg-white/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              direction="up"
              delay={100 + (index % 3) * 80}
              duration={800}
            >
              <div
                onClick={() => { setSelectedProject(project); setShowSampleUnlocker(false); }}
                className="group relative bg-background dark:bg-slate-900/40 border border-border-subtle dark:border-border-subtle/20 overflow-hidden rounded-[4px] cursor-pointer hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between"
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

        {/* Explore More link */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreMore}
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy/90 dark:bg-red dark:hover:bg-red/90 text-white px-8 py-3.5 rounded-[4px] font-bold text-sm tracking-wider uppercase shadow-md active:scale-98 transition-all duration-200 cursor-pointer group"
          >
            Explore More Cases
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </button>
        </div>

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
    </section>
  );
}
