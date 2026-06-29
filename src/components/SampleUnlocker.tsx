import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Lock, 
  Unlock, 
  Mail, 
  User, 
  Building, 
  Briefcase, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  FileText, 
  Check, 
  Presentation, 
  TrendingUp, 
  Sparkles, 
  DownloadCloud, 
  Printer, 
  Eye,
  Maximize2
} from "lucide-react";
import { Project } from "../types";

interface SampleUnlockerProps {
  project: Project;
  onClose?: () => void;
}

interface LeadData {
  fullName: string;
  email: string;
}

export default function SampleUnlocker({ project, onClose }: SampleUnlockerProps) {
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [leadForm, setLeadForm] = useState<LeadData>({
    fullName: "",
    email: ""
  });
  const [formErrors, setFormErrors] = useState<Partial<LeadData>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Document Viewer States
  const [activePage, setActivePage] = useState<number>(1);
  const totalPages = project.badge === "Pitch Deck" || project.badge === "Presentation" ? 4 : 3;
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Check if lead already submitted in this browser
  useEffect(() => {
    const savedLead = localStorage.getItem("portfolio_lead_captured");
    if (savedLead) {
      try {
        const parsed = JSON.parse(savedLead);
        if (parsed.fullName && parsed.email) {
          setIsUnlocked(true);
        }
      } catch (e) {
        // Clear corrupt storage
        localStorage.removeItem("portfolio_lead_captured");
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLeadForm(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof LeadData]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<LeadData> = {};
    if (!leadForm.fullName.trim()) errors.fullName = "Full Name is required";
    if (!leadForm.email.trim()) {
      errors.email = "Business Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(leadForm.email)) {
      errors.email = "Please enter a valid business email";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API registration lag
    setTimeout(() => {
      localStorage.setItem("portfolio_lead_captured", JSON.stringify(leadForm));
      setIsUnlocked(true);
      setIsSubmitting(false);
    }, 1200);
  };

  // Generate downloadable blueprint file dynamically
  const triggerDownload = () => {
    const content = `===========================================================
JAYITA - STRATEGIC BLUEPRINT SAMPLE
===========================================================
Project Title: ${project.title}
Asset Classification: Secure ${project.badge} Blueprint
Key Metrics: ${project.metrics}

1. EXECUTIVE BRIEFING
--------------------
Challenge Mapped:
${project.challenge}

Strategic Solution Engineered:
${project.solution}

2. OPERATIONAL STRATEGY & STEPS
------------------------------
A. Resource Allocation & Process Optimization
- Streamline key P&L operational bottlenecks to scale metrics seamlessly.
- Establish rigid milestones, feedback mechanisms, and governance logs.
- Synchronize cross-functional KPIs and dashboard scorecards.

B. Growth Vector & Market Entry Execution
- Localize consumer pathways while adhering to regional compliance protocols.
- Configure enterprise-grade marketing and metrics models.
- Anchor high-trust communication reporting to the board of directors.

===========================================================
This sample document was unlocked securely. 
Contact Jayita for custom enterprise consultations.
Email: beyondconsulting25@gmail.com
===========================================================`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${project.id}_strategic_blueprint.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  // Render Page Content for the interactive document viewer
  const renderDocumentContent = () => {
    const isDark = document.documentElement.classList.contains("dark");
    
    // Custom presentation slides for "Pitch Deck" / "Presentation"
    if (project.badge === "Pitch Deck" || project.badge === "Presentation") {
      switch (activePage) {
        case 1:
          return (
            <div className="flex flex-col justify-between h-full bg-navy text-white p-8 sm:p-12 relative overflow-hidden rounded-md">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-red/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-widest text-red bg-red/10 px-3 py-1 rounded">
                  {project.badge.toUpperCase()} SAMPLE
                </span>
                <span className="text-[10px] font-mono opacity-50">CONFIDENTIAL</span>
              </div>
              
              <div className="space-y-4 my-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  {project.title}
                </h2>
                <div className="h-1 w-20 bg-red"></div>
                <p className="text-sm text-white/85 max-w-md font-medium leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex justify-between items-end border-t border-white/10 pt-4">
                <div className="space-y-0.5">
                  <p className="text-[9px] text-white/50 uppercase tracking-wider font-semibold">Author & Strategist</p>
                  <p className="text-xs font-bold">Jayita</p>
                </div>
                <p className="text-[10px] font-mono opacity-40">Slide 1 of 4</p>
              </div>
            </div>
          );
        case 2:
          return (
            <div className="flex flex-col justify-between h-full bg-slate-50 dark:bg-slate-900 text-navy dark:text-white p-8 sm:p-12 rounded-md border border-border-subtle/40 dark:border-border-subtle/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border-subtle/30 dark:border-border-subtle/15 pb-3">
                  <span className="text-xs font-extrabold uppercase text-red tracking-widest">
                    01. The Strategic Imperative
                  </span>
                  <span className="text-[10px] text-text-muted font-mono">PROBLEM ARCHITECTURE</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold">Addressing Structural Inefficiencies</h3>
                <p className="text-sm text-text-muted leading-relaxed font-semibold">
                  {project.challenge}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-red/5 p-4 rounded border border-red/10">
                    <span className="text-xs font-extrabold text-red block uppercase mb-1">Key Vulnerability</span>
                    <p className="text-xs text-text-muted">Unoptimized reporting pathways & resource constraints leading to growth plateaus.</p>
                  </div>
                  <div className="bg-navy/5 dark:bg-slate-800 p-4 rounded border border-navy/10 dark:border-white/5">
                    <span className="text-xs font-extrabold text-navy dark:text-red block uppercase mb-1">Opportunity Space</span>
                    <p className="text-xs text-text-muted">Re-engineering process matrix to absorb massive scaling without margin attrition.</p>
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-mono text-text-muted/60 text-right">Slide 2 of 4</p>
            </div>
          );
        case 3:
          return (
            <div className="flex flex-col justify-between h-full bg-slate-50 dark:bg-slate-900 text-navy dark:text-white p-8 sm:p-12 rounded-md border border-border-subtle/40 dark:border-border-subtle/10">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border-subtle/30 dark:border-border-subtle/15 pb-3">
                  <span className="text-xs font-extrabold uppercase text-red tracking-widest">
                    02. Operational Playbook
                  </span>
                  <span className="text-[10px] text-text-muted font-mono">SOLUTION MECHANICS</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold">Strategic Execution Blueprints</h3>
                <p className="text-sm text-text-muted leading-relaxed font-semibold">
                  {project.solution}
                </p>
                <div className="bg-white dark:bg-slate-950 p-4 rounded border border-border-subtle/40 dark:border-border-subtle/15 space-y-2">
                  <span className="text-xs font-extrabold text-navy dark:text-white uppercase tracking-wider block">Operational Action Steps:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
                      <span>Phase 1: Metric Alignment</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
                      <span>Phase 2: Governance Deployment</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
                      <span>Phase 3: Automated KPIs</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-text-muted">
                      <span className="w-1.5 h-1.5 bg-red rounded-full"></span>
                      <span>Phase 4: Scalability Verification</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-[10px] font-mono text-text-muted/60 text-right">Slide 3 of 4</p>
            </div>
          );
        case 4:
          return (
            <div className="flex flex-col justify-between h-full bg-navy text-white p-8 sm:p-12 relative overflow-hidden rounded-md">
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-slate-950 opacity-95"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-red">03. Financial Scale & ROI</span>
                  <TrendingUp className="w-5 h-5 text-red" />
                </div>

                <div className="text-center space-y-4 my-auto">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">CONFIRMED BUSINESS OUTCOME</span>
                  <h3 className="text-3xl sm:text-4xl font-black text-red tracking-tight">{project.metrics}</h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-sm mx-auto font-medium">
                    This strategic intervention unlocked high-yield scaling pathways, driving capital efficiency and robust P&L operational compliance.
                  </p>
                </div>

                <div className="flex justify-between items-end border-t border-white/10 pt-4">
                  <span className="text-[10px] text-white/40">Secure Sample Review</span>
                  <p className="text-[10px] font-mono opacity-40">Slide 4 of 4</p>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    }

    // Custom multi-page layout for "Business Plan", "Strategy", "Market Research", "Course"
    switch (activePage) {
      case 1:
        return (
          <div className="bg-white dark:bg-slate-900 text-navy dark:text-white p-8 sm:p-10 h-full rounded-md border border-border-subtle/50 dark:border-border-subtle/15 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center border-b border-border-subtle/30 dark:border-border-subtle/15 pb-4">
                <div>
                  <h4 className="text-sm font-black text-navy dark:text-white tracking-widest uppercase font-sans">
                    JAYITA S GUPTA
                  </h4>
                  <p className="text-[9px] font-mono text-text-muted/80 uppercase">Strategic Consulting & Corporate Advisory</p>
                </div>
                <span className="bg-red/10 text-red text-[9px] font-extrabold px-2.5 py-1 uppercase rounded-sm font-sans tracking-wider">
                  {project.badge.toUpperCase()} BLUEPRINT
                </span>
              </div>

              {/* Title Block */}
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold text-red uppercase tracking-widest block font-sans">
                  EXECUTIVE SUMMARY
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy dark:text-white leading-tight font-sans">
                  {project.title}
                </h3>
                <p className="text-xs text-text-muted italic font-medium font-sans">
                  Sub-classification: {project.category} · Target Metrics: {project.metrics}
                </p>
              </div>

              {/* Challenge summary */}
              <div className="space-y-1.5 bg-slate-50 dark:bg-slate-950 p-4 rounded border border-border-subtle/40 dark:border-border-subtle/15">
                <span className="text-[10px] font-bold text-navy dark:text-white uppercase tracking-widest block font-sans">
                  1.1 Strategic Challenge Mapped
                </span>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-semibold font-sans">
                  {project.challenge}
                </p>
              </div>
            </div>

            <div className="border-t border-border-subtle/30 dark:border-border-subtle/15 pt-4 flex justify-between items-center text-[10px] text-text-muted">
              <span>Section 1.0: Context</span>
              <span>Page 1 of 3</span>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bg-white dark:bg-slate-900 text-navy dark:text-white p-8 sm:p-10 h-full rounded-md border border-border-subtle/50 dark:border-border-subtle/15 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex justify-between items-center border-b border-border-subtle/30 dark:border-border-subtle/15 pb-4">
                <span className="text-[10px] font-black text-navy dark:text-white tracking-widest uppercase">
                  SECTION 2.0: INTERVENTION BLUEPRINT
                </span>
                <span className="text-[9px] font-mono text-text-muted">OPERATIONAL ROADMAP</span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-red uppercase tracking-widest block">
                  2.1 Core Solution Strategy
                </span>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-semibold">
                  {project.solution}
                </p>
              </div>

              {/* Interactive Mock Table of projections */}
              <div className="space-y-2 pt-3">
                <span className="text-[10px] font-black text-navy dark:text-white uppercase tracking-widest block">
                  Projected Operational Improvements Matrix
                </span>
                <div className="border border-border-subtle/60 dark:border-border-subtle/20 rounded overflow-hidden text-[11px]">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 dark:bg-slate-950 border-b border-border-subtle/60 dark:border-border-subtle/20">
                        <th className="p-2 font-bold">Metric Indicator</th>
                        <th className="p-2 font-bold">Baseline</th>
                        <th className="p-2 font-bold text-red">Target (12M)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border-subtle/30 dark:border-border-subtle/10">
                        <td className="p-2 text-text-muted font-medium">Process Velocity</td>
                        <td className="p-2 text-text-muted">1.0x</td>
                        <td className="p-2 text-red font-bold">1.8x Expansion</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-text-muted font-medium">Reporting Inefficiency</td>
                        <td className="p-2 text-text-muted">High Latency</td>
                        <td className="p-2 text-red font-bold">&lt; 24h Real-Time</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="border-t border-border-subtle/30 dark:border-border-subtle/15 pt-4 flex justify-between items-center text-[10px] text-text-muted">
              <span>Section 2.0: Strategy & Data</span>
              <span>Page 2 of 3</span>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bg-white dark:bg-slate-900 text-navy dark:text-white p-8 sm:p-10 h-full rounded-md border border-border-subtle/50 dark:border-border-subtle/15 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-border-subtle/30 dark:border-border-subtle/15 pb-4">
                <span className="text-[10px] font-black text-navy dark:text-white tracking-widest uppercase">
                  SECTION 3.0: METRICS & SCALE
                </span>
                <span className="text-[9px] font-mono text-text-muted">CONFIRMED DELIVERABLES</span>
              </div>

              <div className="space-y-4 text-center py-4 bg-red/5 border border-red/10 rounded">
                <span className="text-[9px] font-black text-red uppercase tracking-widest block">
                  KEY SUCCESS METRIC DELIVERED
                </span>
                <h4 className="text-2xl sm:text-3xl font-black text-navy dark:text-white tracking-tight leading-none">
                  {project.metrics}
                </h4>
                <p className="text-xs text-text-muted max-w-sm mx-auto font-medium">
                  This framework has been vetted and locked for operations, serving as the benchmark strategic reference document for board review.
                </p>
              </div>

              <div className="space-y-2 text-left">
                <span className="text-[10px] font-bold text-navy dark:text-white uppercase tracking-wider block">Risk Management Protocols:</span>
                <p className="text-xs text-text-muted leading-relaxed font-semibold">
                  Comprehensive risk profiling was conducted to ensure zero regulatory drift, absolute client confidentiality, and rapid organization assimilation.
                </p>
              </div>
            </div>

            <div className="border-t border-border-subtle/30 dark:border-border-subtle/15 pt-4 flex justify-between items-center text-[10px] text-text-muted">
              <span>Section 3.0: Closure & Alignment</span>
              <span>Page 3 of 3</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          /* Form UI (Locked State) */
          <motion.div 
            key="locked"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#fafafa] dark:bg-slate-950 p-6 sm:p-10 rounded-lg border border-border-subtle dark:border-border-subtle/20 space-y-6 font-sans relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red/5 rounded-full blur-2xl"></div>
            
            {/* Locked Header */}
            <div className="text-center space-y-3 relative z-10 max-w-md mx-auto">
              <div className="inline-flex items-center justify-center p-3.5 bg-red/10 text-red rounded-full mb-2">
                <Lock className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-navy dark:text-white tracking-tight">
                Unlock Strategic Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-medium">
                Enter your basic contact details to immediately unlock and interact with the full premium blueprint and download the custom sample document.
              </p>
            </div>

            {/* Lead Capture Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-md mx-auto relative z-10 text-left">
              {/* Name */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-navy dark:text-white uppercase tracking-widest flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-red" /> Full Name
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  value={leadForm.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g. Rachel Green"
                  className={`w-full bg-white dark:bg-slate-900 border px-3.5 py-2.5 text-sm rounded-[4px] text-text-main dark:text-white focus:outline-none focus:border-red transition-all ${
                    formErrors.fullName ? "border-red" : "border-border-subtle dark:border-border-subtle/25"
                  }`}
                />
                {formErrors.fullName && <p className="text-[11px] font-bold text-red">{formErrors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-black text-navy dark:text-white uppercase tracking-widest flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-red" /> Business Email
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={leadForm.email}
                  onChange={handleInputChange}
                  placeholder="e.g. rachel@company.com"
                  className={`w-full bg-white dark:bg-slate-900 border px-3.5 py-2.5 text-sm rounded-[4px] text-text-main dark:text-white focus:outline-none focus:border-red transition-all ${
                    formErrors.email ? "border-red" : "border-border-subtle dark:border-border-subtle/25"
                  }`}
                />
                {formErrors.email && <p className="text-[11px] font-bold text-red">{formErrors.email}</p>}
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-navy hover:bg-navy/90 text-white dark:bg-red dark:hover:bg-red/90 py-3.5 rounded-[4px] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Unlocking Blueprint Vault...</span>
                  </>
                ) : (
                  <>
                    <span>Unlock Sample Document</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          /* Interactive Preview & Viewer UI (Unlocked State) */
          <motion.div 
            key="unlocked"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 font-sans text-left"
          >
            {/* Header Notification Banner */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-emerald-500/20 rounded-full text-emerald-500 flex-shrink-0">
                  <Unlock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-wide">Strategic Blueprint Unlocked!</p>
                  <p className="text-xs opacity-90">Thank you for sharing your credentials. You now have full clearance to sample models.</p>
                </div>
              </div>
              <button
                onClick={triggerDownload}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 transition-all cursor-pointer flex-shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Sample PDF</span>
              </button>
            </div>

            {/* Document Viewer Chrome/Toolbar */}
            <div className="bg-[#1e1e1e] text-white rounded-lg overflow-hidden border border-neutral-800 shadow-2xl flex flex-col">
              {/* Viewer Control Bar */}
              <div className="px-4 py-3 bg-[#181818] border-b border-neutral-800 flex flex-wrap justify-between items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold opacity-90">
                  <FileText className="w-4 h-4 text-red" />
                  <span className="truncate max-w-[200px] sm:max-w-xs">{project.id}_sample_blueprint.pdf</span>
                </div>
                
                {/* PDF Controls */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1 bg-[#2a2a2a] px-2 py-1 rounded">
                    <button 
                      onClick={() => setActivePage(p => Math.max(1, p - 1))}
                      disabled={activePage === 1}
                      className="hover:text-red disabled:opacity-30 p-1 cursor-pointer transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono text-center w-14 font-medium select-none">
                      {activePage} / {totalPages}
                    </span>
                    <button 
                      onClick={() => setActivePage(p => Math.min(totalPages, p + 1))}
                      disabled={activePage === totalPages}
                      className="hover:text-red disabled:opacity-30 p-1 cursor-pointer transition-colors"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Zoom indicators */}
                  <div className="hidden sm:flex items-center gap-1.5 text-neutral-400 select-none">
                    <button onClick={() => setZoomLevel(z => Math.max(75, z - 25))} className="hover:text-white font-black cursor-pointer">-</button>
                    <span className="font-mono text-[11px] w-10 text-center">{zoomLevel}%</span>
                    <button onClick={() => setZoomLevel(z => Math.min(150, z + 25))} className="hover:text-white font-black cursor-pointer">+</button>
                  </div>
                </div>

                {/* Toolbar actions */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={triggerDownload} 
                    className="p-1.5 hover:bg-neutral-800 rounded hover:text-red text-neutral-400 cursor-pointer transition-colors"
                    title="Download Blueprint"
                  >
                    <DownloadCloud className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => window.print()} 
                    className="p-1.5 hover:bg-neutral-800 rounded hover:text-red text-neutral-400 cursor-pointer transition-colors"
                    title="Print Document"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Document Paper Canvas container */}
              <div className="p-4 sm:p-6 bg-[#323232] min-h-[420px] max-h-[500px] overflow-y-auto flex justify-center items-start transition-all duration-150">
                <div 
                  className="w-full max-w-[620px] bg-white dark:bg-slate-900 rounded-md shadow-xl transition-all duration-200"
                  style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: "top center" }}
                >
                  <div className="aspect-[4/3] sm:aspect-[1.414/1] w-full">
                    {renderDocumentContent()}
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="px-4 py-2 bg-[#181818] border-t border-neutral-800 flex justify-between items-center text-[10px] text-neutral-500 font-mono">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-red animate-pulse" />
                  Powered by Jayita Strategic Vault
                </span>
                <span>Zoom Optimized: {zoomLevel}%</span>
              </div>
            </div>

            {/* Success message popup trigger confirmation */}
            <AnimatePresence>
              {downloadSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="bg-navy dark:bg-slate-950 border border-border-subtle text-white p-3.5 rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-2 animate-fadeIn"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Interactive Blueprint file download has started successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
