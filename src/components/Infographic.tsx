import { useState } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Legend
} from "recharts";
import { TrendingUp, Clock, FileCheck, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Infographic() {
  const [activeTab, setActiveTab] = useState<"growth" | "efficiency" | "pitch">("growth");

  // Chart Data 1: Client ARR growth trajectory
  const growthData = [
    { name: "Year 1", arr: 0, annotation: "Zero Base" },
    { name: "Year 2", arr: 4, annotation: "Initial GTM" },
    { name: "Year 3", arr: 15, annotation: "Ops Automation" },
    { name: "Year 4", arr: 32, annotation: "SOP Execution" },
    { name: "Year 5", arr: 52, annotation: "₹50Cr+ scaled" },
  ];

  // Chart Data 2: Before vs After operational optimizations
  const efficiencyData = [
    { name: "Reporting Lag", Before: 24, After: 8, unit: "days" },
    { name: "Sales Cycle", Before: 45, After: 30, unit: "days" },
    { name: "Shipping Lag", Before: 21, After: 12, unit: "days" },
  ];

  // Chart Data 3: standard decks vs Jayita's tailored framework
  const conversionData = [
    { name: "Pre-Seed", Industry: 25, Tailored: 85 },
    { name: "Seed", Industry: 15, Tailored: 75 },
    { name: "Series A", Industry: 10, Tailored: 68 },
  ];

  const stats = [
    {
      value: "85%",
      title: "Fundraising Success",
      desc: "Decks reaching term sheets",
      accent: true,
    },
    {
      value: "2.4x",
      title: "OpEx Efficiency",
      desc: "Average cost reduction",
      accent: false,
    },
    {
      value: "12",
      title: "Exits Guided",
      desc: "Strategic M&A closures",
      accent: true,
    },
    {
      value: "14k",
      title: "Strategy Hours",
      desc: "Of dedicated executive advisory",
      accent: false,
    },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-navy border border-white/10 p-3 rounded shadow-md text-xs space-y-1 text-white">
          <p className="font-bold">{label}</p>
          {payload.map((pld: any) => (
            <p key={pld.name} style={{ color: pld.color }}>
              <span className="capitalize">{pld.name}</span>: {pld.value}
              {activeTab === "growth" ? " Cr ARR" : activeTab === "efficiency" ? " days" : "% success"}
            </p>
          ))}
          {activeTab === "growth" && payload[0]?.payload?.annotation && (
            <p className="text-[10px] text-red font-medium italic mt-1 border-t border-white/5 pt-1">
              Status: {payload[0].payload.annotation}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-20 bg-[#0A0F1D] text-white transition-colors duration-200 border-t border-white/5 relative overflow-hidden">
      {/* Background visual details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 space-y-16">
        
        {/* Header */}
        <ScrollReveal direction="up" duration={700}>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-red uppercase tracking-widest block">
              Quantitative Metrics & Performance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              My Impact by the Numbers & Curves
            </h2>
            <div className="w-16 h-1 bg-red mx-auto"></div>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-normal">
              A data-driven view of standard performance benchmarks vs customized operational architectures.
            </p>
          </div>
        </ScrollReveal>

        {/* Dynamic Graphic Dashboard */}
        <ScrollReveal direction="up" duration={700} delay={100}>
          <div className="bg-navy/40 border border-white/5 p-6 sm:p-8 rounded-[4px] space-y-8 backdrop-blur-md">
            
            {/* Dashboard Tabs */}
            <div className="flex flex-wrap gap-2 justify-center border-b border-white/5 pb-6">
              <button
                onClick={() => setActiveTab("growth")}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "growth"
                    ? "bg-red text-white shadow"
                    : "bg-white/5 hover:bg-white/10 text-white/70"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Client ARR Scaling Curve
              </button>
              <button
                onClick={() => setActiveTab("efficiency")}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "efficiency"
                    ? "bg-red text-white shadow"
                    : "bg-white/5 hover:bg-white/10 text-white/70"
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                Operational Lag Reductions
              </button>
              <button
                onClick={() => setActiveTab("pitch")}
                className={`px-5 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "pitch"
                    ? "bg-red text-white shadow"
                    : "bg-white/5 hover:bg-white/10 text-white/70"
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                Pitch Deck Success Rates
              </button>
            </div>

            {/* Active Graphic Panel */}
            <div className="h-[320px] w-full">
              {activeTab === "growth" && (
                <div className="h-full w-full space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
                    <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-red" />
                      TreisTek India ARR trajectory
                    </span>
                    <span className="text-white/60 font-mono">Unit: INR Crores ARR</span>
                  </div>
                  <ResponsiveContainer width="100%" height="88%">
                    <AreaChart data={growthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorArr" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#C0392B" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#C0392B" stopOpacity={0.0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                      <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area type="monotone" dataKey="arr" name="Revenue Growth" stroke="#C0392B" strokeWidth={3} fillOpacity={1} fill="url(#colorArr)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              )}

              {activeTab === "efficiency" && (
                <div className="h-full w-full space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
                    <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-red" />
                      Core process speed optimization (lower is faster)
                    </span>
                    <span className="text-white/60 font-mono">Unit: Average Days</span>
                  </div>
                  <ResponsiveContainer width="100%" height="88%">
                    <BarChart data={efficiencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                      <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: 11, color: '#fff' }} />
                      <Bar dataKey="Before" name="Before SOPs" fill="rgba(255,255,255,0.25)" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="After" name="After SOPs" fill="#C0392B" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {activeTab === "pitch" && (
                <div className="h-full w-full space-y-4 animate-fadeIn">
                  <div className="flex flex-wrap justify-between items-center gap-2 text-xs">
                    <span className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-red" />
                      Pitch Deck term sheets secured rate vs industry standard
                    </span>
                    <span className="text-white/60 font-mono">Unit: Term Sheet Success Rate %</span>
                  </div>
                  <ResponsiveContainer width="100%" height="88%">
                    <BarChart data={conversionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" fontSize={11} />
                      <YAxis stroke="rgba(255,255,255,0.4)" fontSize={11} />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: 11, color: '#fff' }} />
                      <Bar dataKey="Industry" name="Standard Deck Rate" fill="rgba(255,255,255,0.2)" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="Tailored" name="My Tailored Narrative" fill="#C0392B" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>

            {/* Explanatory context */}
            <p className="text-center text-xs text-white/50 leading-relaxed max-w-xl mx-auto italic font-medium pt-2">
              {activeTab === "growth" && "*Metrics verify structural operational command during scaling of TreisTek India from ₹0 base through targeted team orchestration and executive alignment."}
              {activeTab === "efficiency" && "*Comparative metrics based on cross-border operational audits and streamlined CRM and lead SOP deployments across early-stage SaaS networks."}
              {activeTab === "pitch" && "*Performance metrics summarize results from 20+ pitch deck advisory mandates targeting institutional angel and venture capital firms."}
            </p>
          </div>
        </ScrollReveal>

        {/* High-level Summary Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center pt-8">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100} duration={600}>
              <div className="flex flex-col items-center space-y-4 group">
                <div
                  className={`w-24 h-24 rounded-full border-2 flex items-center justify-center transition-transform duration-500 hover:scale-105 ${
                    stat.accent ? "border-red" : "border-white/20"
                  }`}
                >
                  <span className="text-3xl font-bold tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-[14px] font-bold uppercase tracking-wider text-white">
                    {stat.title}
                  </h4>
                  <p className="text-[12px] text-white/60">
                    {stat.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
