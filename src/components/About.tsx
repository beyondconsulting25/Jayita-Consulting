import React, { useState } from "react";
import { 
  Network, Presentation, TrendingUp, BarChart3, Users, ShieldCheck, 
  Briefcase, GraduationCap, Award, BookOpen, ArrowUpRight, CheckCircle, 
  Cpu, Calendar, Building, MapPin, ChevronRight, Sparkles 
} from "lucide-react";
import { Competency } from "../types";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  const [activeTab, setActiveTab] = useState<"experience" | "advisory" | "education">("experience");

  const competencies: Competency[] = [
    {
      icon: "Network",
      title: "Business Strategy",
      description: "Long-term roadmap development and market positioning.",
    },
    {
      icon: "Presentation",
      title: "Pitch Decks",
      description: "Compelling narratives that secure high-value investment.",
    },
    {
      icon: "TrendingUp",
      title: "Growth Strategy",
      description: "Scalable acquisition models and operational efficiency.",
    },
    {
      icon: "BarChart3",
      title: "Market Research",
      description: "Data-driven insights for competitive advantage.",
    },
    {
      icon: "Users",
      title: "Fractional COO",
      description: "Hands-on operational leadership for lean teams.",
    },
    {
      icon: "ShieldCheck",
      title: "Board Presentations",
      description: "Governing communications for stakeholder alignment.",
    },
  ];

  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-navy flex-shrink-0" };
    switch (iconName) {
      case "Network":
        return <Network {...props} />;
      case "Presentation":
        return <Presentation {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      case "BarChart3":
        return <BarChart3 {...props} />;
      case "Users":
        return <Users {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      default:
        return <Network {...props} />;
    }
  };

  const corporateExperience = [
    {
      role: "Chief Operating Officer",
      company: "TreisTek India Pvt. Ltd.",
      period: "Operational Leader & Business Scale Lead",
      metrics: [
        { label: "Revenue Growth", val: "₹0 ➔ ₹50Cr+" },
        { label: "P&L Ownership", val: "₹20-50Cr ARR" },
        { label: "Cost Reduction", val: "30-40% Overhead" },
        { label: "Team Scaled", val: "150+ Org Built" }
      ],
      description: "Directed end-to-end business operations, corporate strategy formulation, process architecture, and financial risk mitigation models.",
      details: [
        "Established rigid ISO-grade operational compliance matrix frameworks and organizational strategy.",
        "Drove product-led growth across multidisciplinary CAD, engineering, and digital mapping portfolios.",
        "Managed high-stakes VC discussions, drafting premium, investor-grade capital blueprints."
      ]
    },
    {
      role: "India Marketing Head",
      company: "Infor",
      period: "Enterprise Software Leader",
      metrics: [
        { label: "Alignment", val: "APAC Regional HQ" },
        { label: "Focus", val: "GTM & Compliance" }
      ],
      description: "Operated as India marketing authority aligned with APAC regional HQ governance.",
      details: [
        "Adapted globally designed enterprise marketing programs to local consumer demographics.",
        "Maintained rigorous compliance and data integrity across high-sensitivity vertical sectors.",
        "Led complex regional campaigns and digital demand generation initiatives."
      ]
    },
    {
      role: "Regional Marketing Manager",
      company: "InterCall",
      period: "Matrix Collaboration Operations",
      metrics: [
        { label: "Structure", val: "Global Matrix" },
        { label: "Leadership", val: "Cross-functional" }
      ],
      description: "Directed regional marketing initiatives and cross-border project management within globally governed matrix systems.",
      details: [
        "Coordinated multi-channel demand pipelines with zero direct authority across disparate sales hubs.",
        "Negotiated marketing asset distribution models and consolidated regional budgets.",
        "Established standardized digital onboarding pathways for regional growth teams."
      ]
    },
    {
      role: "Senior Web Marketing Analyst",
      company: "Oracle",
      period: "US Corporate Stakeholder Focus",
      metrics: [
        { label: "Stakeholders", val: "Oracle US Leads" },
        { label: "Reporting", val: "Campaign Telemetry" }
      ],
      description: "Managed high-volume digital campaign analytics, presenting optimization paths to stakeholders across multiple US timezones.",
      details: [
        "Leveraged enterprise analytics platforms to map complex B2B SaaS acquisition funnels.",
        "Synthesized campaign performance telemetry into structured, board-ready weekly dashboards.",
        "Identified friction points in onboarding flows, decreasing customer churn rate."
      ]
    }
  ];

  const independentAdvisory = {
    title: "Chief Business Advisor | Independent Consultant",
    subtitle: "2021 – Present (Self-Employed Practice)",
    intro: "Runs a parallel independent advisory practice alongside corporate leadership responsibilities, providing enterprise-grade business strategy, marketing/GTM, and board-level counsel to startup founders, SMEs, and academic institutions.",
    collaborations: [
      { name: "Trempplin Academy", role: "Chief Business Advisor" },
      { name: "BIMCortex.AI", role: "Strategic Startup Advisor" },
      { name: "Dayanand Sagar MBA College", role: "Guest Faculty for Entrepreneurship & Start-up Workshop" },
      { name: "Oil Professionals Australis", role: "Online Marketing Advisor (Freelance)" }
    ],
    pillars: [
      {
        title: "Founder & Early-Stage Advisory",
        desc: "Advise startup founders and early-stage businesses on corporate strategy, business model design, and growth planning—translating enterprise-grade frameworks into actionable roadmaps for resource-constrained teams."
      },
      {
        title: "GTM & Marketing Consulting for SMEs",
        desc: "Deliver go-to-market and marketing consulting for SMEs—demand generation strategy, channel selection, brand positioning, and performance marketing setup—to help clients establish or scale revenue-generating marketing functions."
      },
      {
        title: "Board & Strategic Support",
        desc: "Provide board and strategic advisory support, including governance input, investor-readiness guidance, and high-stakes decision counsel, drawing on direct Board-reporting experience from corporate leadership roles."
      },
      {
        title: "Mentorship & Academic Workshops",
        desc: "Mentor founders and student entrepreneurs on business fundamentals, fundraising readiness, and entrepreneurial strategy through structured advisory engagements and institutional workshops."
      }
    ]
  };

  const education = [
    {
      degree: "MBA — Marketing & Brand Management",
      institution: "NIBM (National Institute of Business Management)",
      year: "2010",
      description: "Advanced thesis on consumer behavior frameworks, strategic marketing alignments, and corporate P&L matrices."
    },
    {
      degree: "Bachelor of Science",
      institution: "Calcutta University",
      year: "2005",
      description: "Rigorous scientific foundation, analytical modeling, and structured research methodologies."
    }
  ];

  const certifications = [
    {
      name: "Google AI Professional Certificate",
      issuer: "COURSERA",
      year: "2026",
      badge: "AI-Native Operations"
    },
    {
      name: "AI Certification",
      issuer: "Be10",
      year: "2026",
      badge: "Workflows & Automation"
    },
    {
      name: "Integrated Digital Marketing",
      issuer: "LEARNING CATALYST",
      year: "2013",
      badge: "Performance Marketing"
    },
    {
      name: "Graphics and Web Designing (Multimedia)",
      issuer: "ARENA MULTIMEDIA",
      year: "2007",
      badge: "Visual UX/UI Design"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-background border-b border-border-subtle dark:border-border-subtle/15 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6 space-y-20">
        
        {/* Core Profile section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left bio column */}
          <ScrollReveal direction="up" duration={800} className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-red uppercase tracking-widest block">Executive Summary</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white tracking-tight">
              Two Decades of Operational Results
            </h2>
            <div className="w-12 h-1 bg-red"></div>
            
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-medium">
              Chief Operating Officer with <strong>20+ years</strong> driving business transformation, marketing-led growth, and market expansion — with cross-border stakeholder exposure across EMEA, APAC, and the US.
            </p>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed font-medium">
              I help founders and the Board on strategy, transformation, and growth. Well-versed in investor relations, M&A due diligence, and cross-functional leadership spanning Operations, Marketing, and Sales. Beyond my executive role, I'm an entrepreneur, consultant, and content strategist — deeply invested in India's startup ecosystem and passionate about helping founders and leaders build with clarity and purpose.
            </p>

           

          {/* Right Core Competencies Card Column */}
          <ScrollReveal direction="up" delay={200} duration={800} className="lg:col-span-7">
            <div className="bg-surface-container-low dark:bg-slate-900/40 p-8 border border-border-subtle dark:border-border-subtle/20 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-navy dark:text-white uppercase tracking-wider">
                  Core Competencies
                </h3>
                <Sparkles className="w-5 h-5 text-red" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {competencies.map((comp, idx) => (
                  <ScrollReveal
                    key={idx}
                    direction="up"
                    delay={100 + idx * 50}
                    duration={600}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 hover:border-red dark:hover:border-red transition-all duration-200 group rounded-[4px]"
                  >
                    <div className="p-2.5 bg-navy/5 dark:bg-slate-800 group-hover:bg-red/10 rounded transition-colors duration-200">
                      {renderIcon(comp.icon)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-navy dark:text-white group-hover:text-red transition-colors duration-200">
                        {comp.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed font-medium">
                        {comp.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
 </div>
   {/* AI-Native Daily Workflow Badge */}
            <div className="p-4 bg-[#f8fafc] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg space-y-2.5">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-red" />
                <span className="text-xs font-bold text-navy dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  AI-Native Daily Workflow
                  <span className="inline-flex h-2 w-2 rounded-full bg-red animate-ping" />
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed font-semibold">
                Daily application of advanced tools like Google AI, Claude, ChatGPT, custom AI agents, and workflow automations to streamline execution, unlock capacity, and accelerate strategic reporting.
              </p>
            </div>
          </ScrollReveal>
        {/* Polished Interactive Sub-Dashboard for detailed Journey, Advisory, and Academics */}
        <div className="space-y-8 pt-10 border-t border-border-subtle dark:border-border-subtle/20">
          
          {/* Header/Tab controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-red uppercase tracking-widest block">Pedigree & Records</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy dark:text-white tracking-tight">
                Credentials & Operations Directory
              </h3>
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 bg-surface-container-low dark:bg-slate-900/50 p-1.5 rounded-lg border border-border-subtle dark:border-border-subtle/20 self-start md:self-auto">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "experience"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                Corporate Experience
              </button>
              <button
                onClick={() => setActiveTab("advisory")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "advisory"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                Independent Advisory
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2.5 rounded text-xs font-extrabold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === "education"
                    ? "bg-navy text-white dark:bg-red shadow-sm"
                    : "text-text-muted hover:text-navy dark:hover:text-white"
                }`}
              >
                Education & Certs
              </button>
            </div>
          </div>

          {/* Active Tab Panel with elegant CSS slide-ins */}
          <div className="bg-[#fafafa] dark:bg-slate-900/10 rounded-lg p-6 sm:p-8 border border-border-subtle dark:border-border-subtle/20 min-h-[420px] transition-all duration-300">
            
            {/* Tab Panel 1: Corporate Experience */}
            {activeTab === "experience" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex items-center gap-2 pb-4 border-b border-border-subtle dark:border-border-subtle/10">
                  <Briefcase className="w-5 h-5 text-red" />
                  <span className="text-sm font-black text-navy dark:text-white uppercase tracking-wider">
                    Executive Career Chronology (20+ Years Leadership)
                  </span>
                </div>

                <div className="space-y-8 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[1.5px] before:bg-border-subtle dark:before:bg-slate-800">
                  {corporateExperience.map((exp, index) => (
                    <div key={index} className="flex gap-6 relative group">
                      {/* Left Dot bullet */}
                      <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-950 border-2 border-red flex items-center justify-center flex-shrink-0 z-10 transition-transform group-hover:scale-110">
                        <span className="w-1.5 h-1.5 bg-navy dark:bg-white rounded-full"></span>
                      </div>

                      {/* Content Card */}
                      <div className="space-y-3.5 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                          <div className="space-y-0.5">
                            <h4 className="text-lg font-black text-navy dark:text-white group-hover:text-red transition-colors">
                              {exp.role}
                            </h4>
                            <p className="text-xs font-bold text-text-muted flex items-center gap-2">
                              <Building className="w-3.5 h-3.5 text-red" />
                              {exp.company}
                              <span className="text-border-subtle dark:text-slate-800">|</span>
                              <span className="text-[11px] uppercase tracking-wider font-extrabold text-red">{exp.period}</span>
                            </p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-semibold">
                          {exp.description}
                        </p>

                        {/* Custom visual metrics array */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                          {exp.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/15 p-2.5 rounded text-center">
                              <span className="text-[9px] text-text-muted uppercase font-black tracking-widest block mb-0.5">{m.label}</span>
                              <span className="text-xs font-black text-navy dark:text-red block">{m.val}</span>
                            </div>
                          ))}
                        </div>

                        {/* Bulleted specifics */}
                        <ul className="space-y-1.5 pl-1 pt-1.5">
                          {exp.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed font-semibold">
                              <span className="text-red font-extrabold">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Panel 2: Independent Consulting & Advisory Experience */}
            {activeTab === "advisory" && (
              <div className="space-y-8 animate-fadeIn">
                <div className="flex items-center justify-between pb-4 border-b border-border-subtle dark:border-border-subtle/10 flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-red" />
                    <span className="text-sm font-black text-navy dark:text-white uppercase tracking-wider">
                      Independent Advisory Practice (2021 – Present)
                    </span>
                  </div>
                  <span className="text-[10px] font-black text-red bg-red/10 px-3 py-1 rounded">
                    ACTIVE ENGAGEMENT
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Executive Header info */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-black text-navy dark:text-white">
                      {independentAdvisory.title}
                    </h4>
                    <p className="text-xs text-red font-bold uppercase tracking-wider">
                      {independentAdvisory.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-semibold">
                      {independentAdvisory.intro}
                    </p>
                  </div>

                  {/* Collaborations grid badge */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] font-black text-navy dark:text-white uppercase tracking-widest block">
                      Active Board Seats & Affiliations:
                    </span>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {independentAdvisory.collaborations.map((col, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 p-3.5 rounded flex flex-col justify-between hover:border-red transition-all">
                          <span className="text-xs font-bold text-navy dark:text-white block mb-1">
                            {col.name}
                          </span>
                          <span className="text-[10px] text-red font-extrabold uppercase tracking-wider block">
                            {col.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core advisory pillars */}
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {independentAdvisory.pillars.map((p, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/15 p-4 rounded-md space-y-2 hover:shadow-sm transition-shadow">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red" />
                          <h5 className="text-xs font-black text-navy dark:text-white uppercase tracking-wider">
                            {p.title}
                          </h5>
                        </div>
                        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed font-medium pl-3.5">
                          {p.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

            {/* Tab Panel 3: Education & Certifications */}
            {activeTab === "education" && (
              <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                
                {/* Column 1: Academic Pedigree */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-border-subtle dark:border-border-subtle/10">
                    <GraduationCap className="w-5 h-5 text-red" />
                    <span className="text-sm font-black text-navy dark:text-white uppercase tracking-wider">
                      Academic Credentials
                    </span>
                  </div>

                  <div className="space-y-6">
                    {education.map((edu, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/15 p-5 rounded relative group hover:border-red transition-all">
                        <span className="absolute top-4 right-4 text-xs font-mono font-bold text-red bg-red/5 px-2.5 py-0.5 rounded">
                          {edu.year}
                        </span>
                        <div className="space-y-1.5 max-w-[85%]">
                          <h4 className="text-base font-black text-navy dark:text-white">
                            {edu.degree}
                          </h4>
                          <p className="text-xs font-bold text-text-muted">
                            {edu.institution}
                          </p>
                        </div>
                        <p className="text-[11px] sm:text-xs text-text-muted leading-relaxed font-semibold pt-3 border-t border-dashed border-border-subtle/50 mt-3">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 2: Professional Certifications */}
                <div className="space-y-6">
                  <div className="flex items-center gap-2 pb-3 border-b border-border-subtle dark:border-border-subtle/10">
                    <Award className="w-5 h-5 text-red" />
                    <span className="text-sm font-black text-navy dark:text-white uppercase tracking-wider">
                      Certifications & Badges
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {certifications.map((cert, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/15 p-4 rounded flex flex-col justify-between group hover:border-red transition-all">
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono font-bold text-red uppercase tracking-widest bg-red/5 px-2 py-0.5 rounded block w-max mb-1">
                            {cert.badge}
                          </span>
                          <h4 className="text-xs font-bold text-navy dark:text-white leading-tight group-hover:text-red transition-colors">
                            {cert.name}
                          </h4>
                        </div>
                        <div className="pt-3 border-t border-border-subtle/40 dark:border-border-subtle/10 mt-3 flex justify-between items-center text-[10px] font-bold text-text-muted">
                          <span>{cert.issuer}</span>
                          <span>{cert.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
