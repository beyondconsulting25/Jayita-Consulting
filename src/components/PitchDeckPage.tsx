import React, { useState } from "react";
import { 
  Presentation, 
  HelpCircle, 
  TrendingUp, 
  Layers, 
  Users, 
  DollarSign, 
  Award, 
  Percent, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  FileText,
  Calculator,
  Shield,
  Lightbulb,
  Target
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface SlideBlueprint {
  number: number;
  title: string;
  focus: string;
  mustInclude: string[];
  mistakeToAvoid: string;
  expertTip: string;
}

export default function PitchDeckPage({ onNavigateToContact }: { onNavigateToContact: () => void }) {
  // Calculator States
  const [raiseAmount, setRaiseAmount] = useState<number>(1500000); // Default $1.5M
  const [preMoneyVal, setPreMoneyVal] = useState<number>(8500000); // Default $8.5M
  const [optionPool, setOptionPool] = useState<number>(10); // Default 10%

  // Strategy Generator States
  const [selectedStage, setSelectedStage] = useState<string>("Seed");
  const [selectedSector, setSelectedSector] = useState<string>("SaaS");

  // Selected Slide View State
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  // Self-Assessment States
  const [assessmentAnswers, setAssessmentAnswers] = useState<boolean[]>([false, false, false, false, false]);
  const [showAssessmentResult, setShowAssessmentResult] = useState<boolean>(false);

  const assessmentQuestions = [
    {
      id: 1,
      label: "Quantifiable Problem Statement",
      text: "Is your problem slide built around a clear, bottom-up quantifiable pain metric (e.g., specific dollar losses or hours wasted per customer group) rather than abstract industry generalities?",
    },
    {
      id: 2,
      label: "Granular Pricing & Unit Economics",
      text: "Do you explicitly present your exact pricing tiers, customer lifetime value (LTV), acquisition costs (CAC), and clear target software margins (ideally 80%+)?",
    },
    {
      id: 3,
      label: "Bottom-Up Market Sizing (TAM)",
      text: "Is your TAM calculated bottom-up (total target customers multiplied by your annual contract value) rather than stating top-down percentages of a massive general sector?",
    },
    {
      id: 4,
      label: "Cohort-Based Traction Curves",
      text: "Do you showcase clean Month-over-Month cohort retention rates or compounding MRR/ARR trajectory instead of using cumulative vanity metrics?",
    },
    {
      id: 5,
      label: "Milestone-Mapped Use of Funds",
      text: "Is your requested funding capital mapped directly to 18-24 months of runway tied to explicit valuation-increasing operational milestones (e.g., 'to reach $3M ARR')?",
    }
  ];

  // Math for Dilution
  const postMoneyVal = raiseAmount + preMoneyVal;
  const investorOwnership = (raiseAmount / postMoneyVal) * 100;
  const remainingOwnership = 100 - investorOwnership;
  const founderPostRaise = remainingOwnership * (1 - optionPool / 100);

  // Slide blueprints
  const slides: SlideBlueprint[] = [
    {
      number: 1,
      title: "The Hook & Vision",
      focus: "Set the rhythm and state your high-level investment value proposition in under 10 seconds.",
      mustInclude: [
        "One-sentence business definition (no complex jargon)",
        "Company logo and key speaker name",
        "The primary investment theme (e.g., 'Scaling B2B checkout automation')",
      ],
      mistakeToAvoid: "Writing a generic tagline like 'The Uber for X' that fails to clarify the actual industry value.",
      expertTip: "Pair a single high-fidelity product mockup with a bold, clear statement of your fundamental core thesis.",
    },
    {
      number: 2,
      title: "The Unfair Problem",
      focus: "Establish a massive, growing pain point backed by quantifiable customer metrics.",
      mustInclude: [
        "The precise operational bottleneck (time/money lost)",
        "The size of the underserved market audience",
        "Why current workarounds are failing or unsustainably costly",
      ],
      mistakeToAvoid: "Listing 5-6 separate problems. Focus on the single, massive anchor problem.",
      expertTip: "Tell a short customer narrative or highlight a single, staggering industry metric to drive immediate empathy.",
    },
    {
      number: 3,
      title: "The Solution & Value",
      focus: "Demonstrate your product's unique value proposition and immediate user ROI.",
      mustInclude: [
        "Product architecture / screen mockups demonstrating usability",
        "The three primary value drivers (e.g., 10x faster, 40% cheaper)",
        "Clear explanation of why this solution is defensible",
      ],
      mistakeToAvoid: "Focusing purely on technical code features instead of business results and benefits.",
      expertTip: "Use a simple 3-step 'Before' and 'After' diagram to illustrate the immediate operational relief.",
    },
    {
      number: 4,
      title: "The Market (TAM/SAM/SOM)",
      focus: "Prove that your target market is massive, addressable, and worth a venture-scale return.",
      mustInclude: [
        "Total Addressable Market (TAM) based on a credible bottom-up calculation",
        "Serviceable Addressable Market (SAM) and your initial beachhead SOM",
        "The market growth rate (CAGR) and macro regulatory tailwinds",
      ],
      mistakeToAvoid: "Using a top-down claim like 'If we just capture 1% of a $100B market...' VCs hate this.",
      expertTip: "Show a bottom-up calculation: Number of target customers multiplied by your annual contract value (ACV).",
    },
    {
      number: 5,
      title: "The Business Model",
      focus: "Explain exactly how you charge, your pricing structures, and unit economics.",
      mustInclude: [
        "Primary pricing tiers (SaaS subscription, transaction percentage, licensing)",
        "Current average contract value (ACV) or customer lifetime value (LTV)",
        "Customer Acquisition Cost (CAC) and pay-back period targets",
      ],
      mistakeToAvoid: "Hiding your pricing behind 'consultative pricing' or listing too many complex fee variables.",
      expertTip: "Maintain a clean table showing pricing, gross margins (aim for 80%+ for software), and customer lifespans.",
    },
    {
      number: 6,
      title: "Traction & Milestones",
      focus: "Showcase historical achievements that prove product-market fit and operational velocity.",
      mustInclude: [
        "Annual Recurring Revenue (ARR) growth path or booking rates over time",
        "Active pilot counts, contract values, or letters of intent (LOI)",
        "Key operational milestones reached (e.g., security clearances, key hires)",
      ],
      mistakeToAvoid: "Using cumulative charts that mask a flat-lining month-over-month growth rate.",
      expertTip: "Format your traction on a clean, month-over-month bar chart with highlights for product launch dates.",
    },
    {
      number: 7,
      title: "Defensibility & IP",
      focus: "Detail why you are hard to copy and how you will maintain your market advantage.",
      mustInclude: [
        "Proprietary tech, patented algorithms, or unique data loops",
        "High customer switching costs or data network effects",
        "Regulatory advantages or exclusive supply/distribution contracts",
      ],
      mistakeToAvoid: "Claiming you have 'no competition' — this signals lack of market research.",
      expertTip: "Present a standard quadrant chart or 2-axis competitor map where the axes represent strategic value metrics.",
    },
    {
      number: 8,
      title: "Go-To-Market Plan",
      focus: "Outline your predictable, scalable channels to acquire high-value customers.",
      mustInclude: [
        "Your primary acquisition channel (direct sales force, content marketing, agency networks)",
        "Strategic channel partnership deals signed or in negotiation",
        "Detailed sales cycle duration and conversion benchmarks",
      ],
      mistakeToAvoid: "Writing 'word of mouth' or 'viral social marketing' as your core B2B growth engine.",
      expertTip: "Present a 12-month GTM roadmap broken down into specific quarters, highlighting resource allocation.",
    },
    {
      number: 9,
      title: "The Team",
      focus: "Build trust by demonstrating deep founder-market fit and specialized execution capability.",
      mustInclude: [
        "Headshots and operational backgrounds of the active founders",
        "Prior exits, relevant technical achievements, or domain expertise",
        "Credible board members, active advisors, or early venture backers",
      ],
      mistakeToAvoid: "Listing 15 part-time advisors while the core engineering team is completely outsourced.",
      expertTip: "Highlight Logos of highly respected former employers (e.g., Google, Stripe, Goldman Sachs) for rapid validation.",
    },
    {
      number: 10,
      title: "The Ask & Use of Funds",
      focus: "State the target raise capital and map it directly to 18-24 months of operational milestones.",
      mustInclude: [
        "Target funding amount and vehicle (e.g., SAFE, Preferred Equity)",
        "Visual allocation pie chart (Product development, sales hiring, marketing expense)",
        "The exact metrics you will achieve with this capital (e.g., 'Scale to $3M ARR')",
      ],
      mistakeToAvoid: "Asking for money without stating the exact operational milestones it buys.",
      expertTip: "Specify: 'This capital secures 18 months of runway and prepares the company for a Series A raise.'",
    }
  ];

  // Strategy recommendation based on Stage and Sector selection
  const getStrategyAdvice = (stage: string, sector: string) => {
    // 1. Sector-specific metrics and narratives
    const sectorMeta: Record<string, {
      kpi: string;
      term: string;
      checklistItems: string[];
      narrativeFocus: string;
    }> = {
      SaaS: {
        kpi: "Net Revenue Retention (NRR > 115%) & LTV/CAC Ratio (> 3.5x)",
        term: "Recurring Revenue & Logo Retention",
        checklistItems: [
          "Establish high-accuracy cohort tables showing monthly logo & revenue retention.",
          "Map sales pipeline metrics: SDR-to-AE ratios, sales cycle duration, and win rates.",
          "Outline professional services vs. pure software revenue split (aim for 80%+ software)."
        ],
        narrativeFocus: "proving compound expansion potential where existing accounts grow in value without incremental sales costs."
      },
      Fintech: {
        kpi: "Take Rate percentage, Annualized Transaction Volume (ATV), and Gross Margin on processing",
        term: "Transaction Volumes, Take Rates & Regulatory Moats",
        checklistItems: [
          "Detail payment processing partners, transaction fee splits, and clearing speeds.",
          "Show regulatory roadmap: licensing status (e.g., PCI-DSS, EMI, banking partners).",
          "Map risk/fraud exposure mitigation protocols and default rate metrics."
        ],
        narrativeFocus: "demonstrating a massive transaction highway with defensible unit margins and tight risk control."
      },
      DeepTech: {
        kpi: "Technology Readiness Level (TRL), Patent defensibility, and active corporate proof-of-concept (PoC) timelines",
        term: "IP Defensibility, Feasibility & Tech Milestones",
        checklistItems: [
          "Highlight academic research credentials, exclusive patents filed, or proprietary algorithm architectures.",
          "Map core engineering benchmarks to clear product development sprint timelines.",
          "Document initial high-profile corporate letters of intent (LOI) or co-development pilots."
        ],
        narrativeFocus: "selling highly defensible technical breakthroughs that create an insurmountable competitive barrier."
      },
      Marketplace: {
        kpi: "Gross Merchandise Value (GMV), Liquidity Rate (buyer-seller fill rates), and Take Rate trend",
        term: "Network Effects, Buyer-Seller Liquidity & GMV Growth",
        checklistItems: [
          "Document cohort health of both supply (sellers) and demand (buyers) sides.",
          "Analyze CAC recovery curves for both sides of the marketplace separately.",
          "Map localized density strategies to prove geographical copy-paste playbooks."
        ],
        narrativeFocus: "showcasing powerful organic network effects where every new participant increases platform utility."
      },
      Healthtech: {
        kpi: "FDA or CE clearance pathways, clinical pilot efficacy percentages, and hospital/provider integration timelines",
        term: "Regulatory Clearance, Clinical Validation & Institutional Sales",
        checklistItems: [
          "Outline formal clinical validation milestones, trial group results, and academic publications.",
          "Map specific regulatory status: Class I/II/III device filings or HIPAA/GDPR compliance frameworks.",
          "Detail integrations with legacy Electronic Health Record (EHR) systems to prove low implementation friction."
        ],
        narrativeFocus: "aligning scientific credibility with clear economic utility for health systems or insurance payers."
      },
      EdTech: {
        kpi: "Daily Active Users to Monthly Active Users ratio (DAU/MAU), organic course completion rate, and curriculum LTV",
        term: "Course Completion Rates, Engagement Loops & B2B/School Sales",
        checklistItems: [
          "Provide student engagement metrics, course completions, and referral loops.",
          "Outline distribution: Direct-to-Consumer (D2C) vs. Enterprise/School board multi-year contracts.",
          "Show standard content production cost-to-revenue models."
        ],
        narrativeFocus: "demonstrating sticky, habit-forming learning behaviors that yield high retention and viral referral."
      },
      CleanTech: {
        kpi: "Levelized Cost of Energy/Carbon saved (LCOE), initial CAPEX payback, and government subsidy alignment",
        term: "Carbon Offset/Energy Efficiency, CAPEX Scale & Subsidies",
        checklistItems: [
          "Detail carbon offset tracking certifications or localized energy grid connection compliance.",
          "Map 5-year hardware/facility capital expenditure (CAPEX) vs. long-term operational efficiency.",
          "Outline policy alignment: Inflation Reduction Act (IRA) or national environmental grants."
        ],
        narrativeFocus: "matching sustainable, carbon-negative impact with institutional-grade economic returns."
      },
      AgriTech: {
        kpi: "Yield increase percentage, farm-level operational cost reduction, and sensor/hardware unit deployment speed",
        term: "Agricultural Yield Optimization, Farm CAC & Hardware Durability",
        checklistItems: [
          "Verify field testing results, crop-specific yield increases, and soil health metrics.",
          "Detail hardware distribution channels (co-ops, equipment dealers) and outdoor durability ratings.",
          "Show agricultural season-independent pricing or SaaS-equivalent subscription models."
        ],
        narrativeFocus: "modernizing traditional farming supply chains through scalable, low-friction digital tools."
      },
      PropTech: {
        kpi: "Asset Management Value under platform (AUM), occupancy optimization, and real estate developer pipeline",
        term: "Property Under Management (AUM), Occupancy Efficiency & Broker Loops",
        checklistItems: [
          "Map real estate developer pipelines, broker network partnerships, and geographic asset classes.",
          "Detail smart-building hardware integrations or automated digital leasing efficiencies.",
          "Outline regulatory zoning compliance and property insurance partnerships."
        ],
        narrativeFocus: "unlocking hidden equity and yield in high-value real estate through intelligent software layers."
      },
      Logistics: {
        kpi: "On-Time Delivery (OTD) rate, route utilization efficiency, and average freight margin",
        term: "Route Optimization, Freight Margins & Supply Chain Visibility",
        checklistItems: [
          "Map fleet/warehouse capacity utilization rates, carrier network scales, and API tracking integrations.",
          "Outline cost reductions achieved through dynamic multi-stop route optimization algorithms.",
          "Document enterprise supply-chain pilot agreements with multi-year volume commitments."
        ],
        narrativeFocus: "streamlining modern physical supply chains through real-time asset coordination and high margin routing."
      },
      Web3: {
        kpi: "Total Value Locked (TVL), Active Address counts, and tokenomic protocol utility sinks",
        term: "Protocol Liquidity, Token Utility & Developer Ecosystem",
        checklistItems: [
          "Provide detailed smart-contract security audit reports (e.g., CertiK, OpenZeppelin).",
          "Map utility token sinks, staking rewards, and structural governance (DAO) mechanics.",
          "Show community/developer growth: Discord counts, active GitHub commits, and ecosystem grants."
        ],
        narrativeFocus: "building a secure, self-sustaining decentralized protocol with deep developer alignment."
      },
      D2C: {
        kpi: "Customer Contribution Margin (CM2), Repeat Purchase Rate, and blended CAC paybacks",
        term: "Contribution Margins, Customer Lifetime Value & Retail Scale",
        checklistItems: [
          "Detail supply chain logistics, manufacturing partners, and gross margins (aim for 65%+).",
          "Analyze customer repeat-purchase cohorts, average order value (AOV), and blended CAC payback.",
          "Outline Omni-channel distribution strategies: Shopify vs. physical retail/wholesale agreements."
        ],
        narrativeFocus: "scaling a highly loved, emotionally resonant brand with robust repeat cohorts and clear unit profits."
      }
    };

    const sectorDetail = sectorMeta[sector] || sectorMeta["SaaS"];

    // 2. Stage-specific baseline
    const stageMap: Record<string, { coreStory: string; criticalMetric: string; checklist: string[] }> = {
      "Pre-Seed": {
        coreStory: `My Core Recommendation for Pre-Seed: Sell founder-market fit and the long-term vision. Since your historical financials are early, you must convince investors why your founding team has the unique, deep expertise to build the technology and dominate this space. In ${sector}, focus heavily on ${sectorDetail.narrativeFocus}`,
        criticalMetric: `Qualitative feedback loops and initial proof-of-concept velocity in ${sectorDetail.term}`,
        checklist: [
          ...sectorDetail.checklistItems.slice(0, 1),
          "Build high-fidelity interactive wireframes and collect early user validation notes.",
          "Show absolute founder alignment: Have you faced and solved this specific pain in your previous executive roles?"
        ]
      },
      "Seed": {
        coreStory: `My Core Recommendation for Seed: Demonstrate early traction and solid product-market fit. Prove that early customers are consistently paying, actively engaging, and staying. In the ${sector} space, you must show momentum by ${sectorDetail.narrativeFocus}`,
        criticalMetric: `Consistent MoM growth in ${sectorDetail.term} and robust cohort retention`,
        checklist: [
          ...sectorDetail.checklistItems.slice(0, 2),
          "Formulate a realistic bottom-up financial model with transparent unit cost assumptions.",
          "Draft a clear, repeatable GTM model showing customer acquisition channels that scale."
        ]
      },
      "Series A": {
        coreStory: `My Core Recommendation for Series A: Prove the scale engine is highly predictable. At this stage, VCs look for a repeatable machine where placing $1 of marketing capital yields $3+ of customer lifetime value. In ${sector}, this means ${sectorDetail.narrativeFocus}`,
        criticalMetric: `${sectorDetail.kpi}`,
        checklist: [
          ...sectorDetail.checklistItems,
          "Prepare a granular 3-year P&L forecast mapped to hiring pipelines.",
          "Compile complete client case studies and strategic ROI metrics."
        ]
      },
      "Series B": {
        coreStory: `My Core Recommendation for Series B: Dominate the broader market and outline international scale. Show how your system can expand into adjacent verticals, handle larger enterprises, or grow geographically using heavy growth capital. In ${sector}, show how you will achieve this by ${sectorDetail.narrativeFocus}`,
        criticalMetric: `Market penetration percentage, international revenue cohorts, and multi-million dollar expansion deals`,
        checklist: [
          ...sectorDetail.checklistItems.slice(1, 3),
          "Prepare a detailed mergers and acquisitions (M&A) playbook and dynamic market expansion plan.",
          "Deliver fully audited financial reports and proof of enterprise SLA delivery capabilities."
        ]
      }
    };

    return stageMap[stage] || stageMap["Seed"];
  };

  const advice = getStrategyAdvice(selectedStage, selectedSector);

  return (
    <div className="bg-background min-h-screen text-text-main font-sans selection:bg-navy selection:text-white pb-20 transition-colors duration-200">
      
      {/* 1. Header Hero Area */}
      <section className="relative bg-navy dark:bg-slate-950 text-white pt-24 pb-20 overflow-hidden border-b border-white/5 transition-colors duration-200">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-[#122e57] opacity-90 z-0"></div>
        
        {/* Subtle grid accent background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-red/10 text-red px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-wider border border-red/20">
              <Presentation className="w-3.5 h-3.5" />
              Strategic Investor Readiness
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Investor-Grade Pitch Decks <span className="text-red">Designed to Close</span>
            </h1>
            <p className="text-lg sm:text-xl text-on-primary-container opacity-85 max-w-2xl leading-relaxed">
              I help high-growth founders refine their business narratives, polish financial unit economics, and develop pitch decks that command attention from top-tier institutional VCs.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onNavigateToContact}
                className="bg-red text-white px-8 py-4 font-semibold hover:opacity-90 active:scale-98 transition-all flex items-center gap-2 text-sm rounded-[4px] cursor-pointer shadow-md"
              >
                Book a Deck Audit Session
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
              <a
                href="#blueprint-explorer"
                className="border border-white/30 text-white px-8 py-4 font-semibold hover:bg-white/10 active:scale-98 transition-all text-sm rounded-[4px] flex items-center justify-center"
              >
                Explore Slide Blueprints
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            {/* Visual card mimicking a clean, professional slide mockup */}
            <div className="bg-white dark:bg-slate-900 text-navy dark:text-white p-6 rounded-lg shadow-2xl border border-white/10 dark:border-border-subtle/20 relative overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-red"></div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">SLIDE 05: REVENUE CAPABILITY</span>
                <span className="text-red font-bold text-xs">J.S.G. STRATEGY</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-navy dark:text-white">Unit Economics Model</h3>
              <p className="text-xs text-text-muted mb-4 leading-relaxed">
                Demonstrating scaling leverage: ACV trends upward while target customer CAC declines via referral loops.
              </p>
              
              <div className="space-y-2.5">
                <div className="bg-background dark:bg-slate-950 p-3 rounded border border-border-subtle dark:border-border-subtle/20 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-navy dark:text-white">LTV / CAC Ratio</span>
                  <span className="text-xs font-extrabold text-red bg-red/5 px-2 py-0.5 rounded">4.2x Target</span>
                </div>
                <div className="bg-background dark:bg-slate-950 p-3 rounded border border-border-subtle dark:border-border-subtle/20 flex justify-between items-center">
                  <span className="text-[11px] font-bold text-navy dark:text-white">Payback Period</span>
                  <span className="text-xs font-extrabold text-navy dark:text-white">7.4 Months</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-subtle dark:border-border-subtle/20 flex justify-between items-center text-[10px] text-text-muted">
                <span>CONFIDENTIAL DECK PROTOCOL</span>
                <span>PAGE 05</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Strategic Blueprint & Stage Selector */}
      <section id="blueprint-explorer" className="py-20 bg-white dark:bg-background transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              The Strategic Strategy Blueprint
            </h2>
            <div className="w-16 h-1 bg-red mx-auto"></div>
            <p className="text-sm sm:text-base text-text-muted max-w-lg mx-auto">
              Select your funding stage to see how investors will evaluate your presentation and key metrics.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left controls: Stage & Sector */}
            <div className="lg:col-span-4 bg-background dark:bg-slate-900/40 p-6 rounded-lg border border-border-subtle dark:border-border-subtle/20 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                <Target className="w-5 h-5 text-red" />
                Context Alignments
              </h3>

              {/* Stage selector buttons */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1">
                  Target Funding Stage
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {["Pre-Seed", "Seed", "Series A", "Series B"].map((stg) => (
                    <button
                      key={stg}
                      onClick={() => setSelectedStage(stg)}
                      className={`py-2 px-3 border text-xs font-semibold rounded transition-all cursor-pointer ${
                        selectedStage === stg
                          ? "bg-navy text-white border-navy font-bold shadow-sm dark:bg-red dark:border-red"
                          : "bg-white dark:bg-slate-950 border-border-subtle dark:border-border-subtle/20 text-text-muted dark:text-text-muted hover:border-navy dark:hover:border-white/30 hover:text-navy dark:hover:text-white"
                      }`}
                    >
                      {stg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sector Selector dropdown */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold text-navy uppercase tracking-widest mb-1">
                  Business Vertical
                </label>
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full border border-border-subtle dark:border-border-subtle/20 focus:border-navy focus:outline-none focus:ring-0 px-4 py-3 text-sm bg-white dark:bg-slate-950 dark:text-white rounded"
                >
                  <option value="SaaS">SaaS / Enterprise Software</option>
                  <option value="Fintech">FinTech & Payments</option>
                  <option value="DeepTech">DeepTech / AI Laboratories</option>
                  <option value="Marketplace">Marketplaces & E-Commerce</option>
                  <option value="Healthtech">HealthTech & Medical Devices</option>
                  <option value="EdTech">EdTech & E-Learning</option>
                  <option value="CleanTech">CleanTech & ClimateTech</option>
                  <option value="AgriTech">AgriTech & Smart Farming</option>
                  <option value="PropTech">PropTech & Real Estate</option>
                  <option value="Logistics">Logistics & Supply Chain</option>
                  <option value="Web3">Web3 & Decentralized Protocols</option>
                  <option value="D2C">D2C & Consumer Retail</option>
                </select>
              </div>

              {/* Highlighting warning/context */}
              <div className="bg-red/5 p-4 rounded border-l-4 border-red text-xs space-y-1">
                <span className="font-bold text-navy flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-red" />
                  THE VC DECISION BAR
                </span>
                <p className="text-text-muted leading-relaxed">
                  Different stages require totally different story weights. Avoid overcomplicating traction if you are at Pre-Seed, but never skip robust cohort analysis at Series A.
                </p>
              </div>
            </div>

            {/* Right Display output card */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 p-8 rounded-lg shadow-md space-y-6">
              <div className="flex flex-wrap items-center justify-between border-b border-border-subtle dark:border-border-subtle/20 pb-5 gap-4">
                <div>
                  <span className="text-[10px] font-bold text-red uppercase tracking-widest block">
                    CURRENT SELECTION REPORT
                  </span>
                  <h3 className="text-2xl font-bold text-navy">
                    {selectedStage} Narrative Guide ({selectedSector})
                  </h3>
                </div>
                <span className="bg-navy dark:bg-slate-950 text-white text-[11px] font-bold px-3 py-1 rounded">
                  Investment Focus
                </span>
              </div>

              {/* Core Storyline Paragraph */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                  Core Story Focus
                </span>
                <p className="text-sm text-text-muted leading-relaxed bg-background dark:bg-slate-950 p-4 rounded border border-border-subtle dark:border-border-subtle/20 italic">
                  "{advice.coreStory}"
                </p>
              </div>

              {/* Metrics highlights */}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-surface-container-low dark:bg-slate-950/40 p-4 rounded border border-border-subtle dark:border-border-subtle/20">
                  <span className="text-[10px] font-bold text-red uppercase tracking-wider block mb-1">
                    MOST CRITICAL KPI VC WILL EXAMINE
                  </span>
                  <span className="text-sm font-bold text-navy flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-red flex-shrink-0" />
                    {advice.criticalMetric}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                    Must-Verify Preparation Steps
                  </span>
                  <ul className="space-y-2">
                    {advice.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-text-muted leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-red flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to action within the report */}
              <div className="pt-6 border-t border-border-subtle dark:border-border-subtle/20 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-text-muted">
                  Ready to align your deck with this specific framework?
                </span>
                <button
                  onClick={onNavigateToContact}
                  className="bg-navy text-white dark:bg-red px-5 py-2.5 font-semibold text-xs uppercase tracking-wider hover:opacity-95 rounded cursor-pointer flex items-center gap-1"
                >
                  Request Customized Audit
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 10-Slide Blueprint Interactive Accordion */}
      <section className="py-20 bg-surface-container-low dark:bg-slate-950/20 border-t border-b border-border-subtle dark:border-border-subtle/20 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              The Anatomy of a Flawless Pitch Deck
            </h2>
            <div className="w-16 h-1 bg-red mx-auto"></div>
            <p className="text-sm sm:text-base text-text-muted max-w-lg mx-auto">
              Click on any of the core slides below to inspect the strategic focal points, required elements, and design traps to avoid.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Slide list buttons (Left Column) */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest block mb-3">
                10 STANDARD VC SLIDE PILLARS
              </span>
              <div className="space-y-1.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.number}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`w-full flex items-center justify-between p-4 rounded text-left transition-all cursor-pointer border ${
                      activeSlideIndex === idx
                        ? "bg-navy text-white border-navy font-bold shadow-md dark:bg-red dark:border-red"
                        : "bg-white dark:bg-slate-900 text-navy dark:text-white border-border-subtle dark:border-border-subtle/20 hover:bg-navy/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        activeSlideIndex === idx ? "bg-red text-white" : "bg-navy/10 text-navy"
                      }`}>
                        {slide.number}
                      </span>
                      <span className="text-sm font-semibold">{slide.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 opacity-75 transition-transform ${
                      activeSlideIndex === idx ? "rotate-90 text-red" : ""
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Slide active description (Right Column) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 p-8 rounded-lg shadow-lg space-y-6">
              <div className="flex justify-between items-start border-b border-border-subtle dark:border-border-subtle/20 pb-4">
                <div>
                  <span className="text-[10px] font-extrabold text-red uppercase tracking-wider block">
                    DECK STRUCTURE PROTOCOL: SLIDE {slides[activeSlideIndex].number}
                  </span>
                  <h3 className="text-2xl font-bold text-navy">
                    {slides[activeSlideIndex].title}
                  </h3>
                </div>
                <div className="p-3 bg-red/10 rounded">
                  <Presentation className="w-6 h-6 text-red" />
                </div>
              </div>

              {/* Focus/Objective */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                  Strategic Objective
                </span>
                <p className="text-sm text-text-muted leading-relaxed">
                  {slides[activeSlideIndex].focus}
                </p>
              </div>

              {/* Must include checklist */}
              <div className="space-y-2 bg-background dark:bg-slate-950 p-4 rounded border border-border-subtle dark:border-border-subtle/20">
                <span className="text-xs font-bold text-navy uppercase tracking-wider block">
                  Must-Include Elements
                </span>
                <ul className="grid sm:grid-cols-1 gap-2">
                  {slides[activeSlideIndex].mustInclude.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-text-muted leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-red flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Danger / Common traps & Tips */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border border-red/20 bg-red/2 rounded text-xs space-y-1.5">
                  <span className="font-bold text-red uppercase tracking-wider block">
                    Critical Trap to Avoid
                  </span>
                  <p className="text-text-muted leading-relaxed">
                    {slides[activeSlideIndex].mistakeToAvoid}
                  </p>
                </div>

                <div className="p-4 border border-green-200 dark:border-green-800/30 bg-green-50/50 dark:bg-green-950/20 rounded text-xs space-y-1.5">
                  <span className="font-bold text-green-700 dark:text-green-400 uppercase tracking-wider block">
                    Jayita's Tactical Tip
                  </span>
                  <p className="text-text-muted leading-relaxed">
                    {slides[activeSlideIndex].expertTip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Pitch Readiness Assessment */}
      <section id="pitch-deck-readiness" className="py-20 bg-background border-b border-border-subtle dark:border-border-subtle/20 transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold text-red uppercase tracking-widest block">
              Strategic Diagnostic Audit
            </span>
            <h2 className="text-3xl font-bold text-navy dark:text-white tracking-tight">
              Test Your Pitch Deck Readiness
            </h2>
            <div className="w-16 h-1 bg-red mx-auto"></div>
            <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto">
              Take this quick 5-question baseline assessment to evaluate if your presentation meets the rigorous investment criteria of modern venture capital firms.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: The 5 diagnostic checklist questions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 p-6 sm:p-8 rounded-lg shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-navy dark:text-white border-b border-border-subtle dark:border-border-subtle/20 pb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-red" />
                  Self-Assessment Scorecard
                </h3>

                <div className="space-y-6">
                  {assessmentQuestions.map((q, idx) => (
                    <div key={q.id} className="space-y-3">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-red uppercase tracking-widest block">
                            CRITERION 0{q.id}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-navy dark:text-white">
                            {q.label}
                          </h4>
                        </div>
                        
                        {/* Interactive toggle switch/buttons */}
                        <div className="flex bg-background dark:bg-slate-950 p-1 rounded border border-border-subtle dark:border-border-subtle/20 gap-1">
                          <button
                            onClick={() => {
                              const next = [...assessmentAnswers];
                              next[idx] = true;
                              setAssessmentAnswers(next);
                              setShowAssessmentResult(true);
                            }}
                            className={`px-3 py-1 text-xs font-bold rounded transition-all cursor-pointer ${
                              assessmentAnswers[idx]
                                ? "bg-red text-white shadow-sm"
                                : "text-text-muted hover:text-navy dark:hover:text-white hover:bg-navy/5"
                            }`}
                          >
                            YES
                          </button>
                          <button
                            onClick={() => {
                              const next = [...assessmentAnswers];
                              next[idx] = false;
                              setAssessmentAnswers(next);
                              setShowAssessmentResult(true);
                            }}
                            className={`px-3 py-1 text-xs font-bold rounded transition-all cursor-pointer ${
                              !assessmentAnswers[idx]
                                ? "bg-navy text-white dark:bg-slate-800 shadow-sm"
                                : "text-text-muted hover:text-navy dark:hover:text-white hover:bg-navy/5"
                            }`}
                          >
                            NO
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {q.text}
                      </p>
                      {idx < assessmentQuestions.length - 1 && (
                        <div className="border-b border-border-subtle/40 dark:border-border-subtle/10 pt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Diagnostic Feedback and Score card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="bg-navy dark:bg-slate-900 text-white p-8 rounded-lg shadow-xl border border-white/10 dark:border-border-subtle/20 flex-grow flex flex-col justify-between space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                    <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">
                      Diagnostic Metrics Engine
                    </span>
                    <span className="text-red font-bold text-xs">J.S.G. AUDIT</span>
                  </div>

                  {/* Circular Score display or progress bar */}
                  <div className="text-center space-y-3">
                    <span className="text-xs text-white/70 uppercase font-bold tracking-widest block">
                      YOUR ESTIMATED READINESS SCORE
                    </span>
                    <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-red/20 bg-white/5 relative">
                      <span className="text-4xl font-extrabold tracking-tight">
                        {assessmentAnswers.filter(Boolean).length * 20}%
                      </span>
                    </div>
                    <div className="text-xs text-white/50 font-semibold uppercase tracking-wider">
                      {assessmentAnswers.filter(Boolean).length} OF 5 CRITERIA FULFILLED
                    </div>
                  </div>

                  {/* Segmented Progress Bar */}
                  <div className="flex gap-1.5 mt-6 justify-center">
                    {[1, 2, 3, 4, 5].map((step, idx) => (
                      <div
                        key={step}
                        className={`h-2 flex-grow rounded-sm transition-all duration-300 ${
                          idx < assessmentAnswers.filter(Boolean).length
                            ? "bg-red"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Jayita's dynamic diagnostic advice text box */}
                <div className="space-y-4 pt-4 border-t border-white/10 flex-grow">
                  <span className="text-xs font-bold text-red uppercase tracking-wider block">
                    My Strategic Diagnostic:
                  </span>
                  
                  {(() => {
                    const score = assessmentAnswers.filter(Boolean).length * 20;
                    if (score <= 40) {
                      return (
                        <div className="space-y-3">
                          <h4 className="text-base font-bold text-red">
                            Critical Refactoring Required
                          </h4>
                          <p className="text-xs text-white/80 leading-relaxed italic font-normal">
                            "Your deck currently lacks the core structural and operational metrics that sophisticated institutional VCs expect. We need to completely rebuild your problem framing, transition from top-down TAM to a granular bottom-up formula, and clearly align your ask with operational runway. Let's schedule an audit to address these immediately."
                          </p>
                        </div>
                      );
                    } else if (score <= 80) {
                      return (
                        <div className="space-y-3">
                          <h4 className="text-base font-bold text-amber-400">
                            Strong Core, Needs Polishing
                          </h4>
                          <p className="text-xs text-white/80 leading-relaxed italic font-normal">
                            "You have established solid foundation blocks, but your deck likely suffers from standard presentation traps—such as abstract problem statements or hiding unit economics behind complex variables. With some targeted narrative polishing and unit-economics structuring, you'll be fully ready to capture term sheets. Let's schedule a call to refine the narrative."
                          </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="space-y-3">
                          <h4 className="text-base font-bold text-green-400">
                            Investor Grade Readiness
                          </h4>
                          <p className="text-xs text-white/80 leading-relaxed italic font-normal">
                            "Excellent work. Your presentation structure aligns perfectly with the standard protocols of top-tier VCs. Your next challenge is executing the delivery with total confidence, preparing for aggressive due diligence, and aligning investor conversations. I'd love to help you run a dry-run mock pitch to stress-test your financial model."
                          </p>
                        </div>
                      );
                    }
                  })()}
                </div>

                {/* Direct Audit CTA inside the card */}
                <div className="pt-4">
                  <button
                    onClick={onNavigateToContact}
                    className="w-full bg-red hover:bg-red/95 text-white py-3 px-4 rounded font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Audit For My Score</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Valuation & Dilution Estimator */}
      <section id="dilution-modeler" className="py-20 bg-white dark:bg-background transition-colors duration-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Explanatory text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 text-red font-bold uppercase tracking-widest text-xs">
                <Calculator className="w-4 h-4 text-red" />
                VALUATION ENGINEERING
              </div>
              <h2 className="text-3xl font-bold text-navy tracking-tight leading-tight">
                Model Your Next Investment Round
              </h2>
              <p className="text-base text-text-muted leading-relaxed">
                Founders often miscalculate dilution due to unallocated option pools or a poor understanding of pre-money vs. post-money valuation metrics.
              </p>
              <p className="text-base text-text-muted leading-relaxed">
                Use my interactive tool to model target raise capital and map how equity allocations partition between original founders, new lead investors, and future executive hires.
              </p>

              {/* Highlighting key advice */}
              <div className="p-5 bg-background dark:bg-slate-900/40 rounded border border-border-subtle dark:border-border-subtle/20 space-y-2.5">
                <span className="font-bold text-sm text-navy uppercase tracking-wider block">
                  Strategic Baseline Rules:
                </span>
                <ul className="space-y-1.5 text-xs text-text-muted list-disc list-inside">
                  <li>Aim for <span className="font-semibold text-navy">15% to 25%</span> total dilution per priced round.</li>
                  <li>An ESOP (Employee Option Pool) created *prior* to a raise dilutes the founders, not the incoming investors.</li>
                  <li>Valuation should align with 18-24 months of metrics.</li>
                </ul>
              </div>
            </div>

            {/* Interactive Calculator widget */}
            <div className="lg:col-span-7 bg-background dark:bg-slate-900/40 p-8 rounded-lg border border-border-subtle dark:border-border-subtle/20 shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-navy border-b border-border-subtle dark:border-border-subtle/20 pb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-red" />
                Seed / Series A Dilution Modeler
              </h3>

              <div className="space-y-5">
                {/* 1. Target Raise slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-navy uppercase">
                    <span>Target Raise Capital</span>
                    <span className="text-red font-bold text-sm">${(raiseAmount / 1000000).toFixed(2)}M</span>
                  </div>
                  <input
                    type="range"
                    min="250000"
                    max="10000000"
                    step="250000"
                    value={raiseAmount}
                    onChange={(e) => setRaiseAmount(Number(e.target.value))}
                    className="w-full accent-navy cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-text-muted">
                    <span>$250K</span>
                    <span>$5.0M</span>
                    <span>$10M</span>
                  </div>
                </div>

                {/* 2. Pre-Money Valuation slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-navy uppercase">
                    <span>Target Pre-Money Valuation</span>
                    <span className="text-red font-bold text-sm">${(preMoneyVal / 1000000).toFixed(2)}M</span>
                  </div>
                  <input
                    type="range"
                    min="1000000"
                    max="40000000"
                    step="500000"
                    value={preMoneyVal}
                    onChange={(e) => setPreMoneyVal(Number(e.target.value))}
                    className="w-full accent-navy cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-text-muted">
                    <span>$1.0M</span>
                    <span>$20.5M</span>
                    <span>$40M</span>
                  </div>
                </div>

                {/* 3. Option Pool percentage */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-navy uppercase">
                    <span>Target Employee Option Pool (ESOP)</span>
                    <span className="text-red font-bold text-sm">{optionPool}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={optionPool}
                    onChange={(e) => setOptionPool(Number(e.target.value))}
                    className="w-full accent-navy cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-text-muted">
                    <span>0% (No ESOP)</span>
                    <span>10% (Standard)</span>
                    <span>20% (Aggressive)</span>
                  </div>
                </div>
              </div>

              {/* Output / Results dashboard */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white dark:bg-slate-950 p-5 rounded border border-border-subtle dark:border-border-subtle/20 mt-4">
                
                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                    POST-MONEY VAL
                  </span>
                  <span className="text-base font-extrabold text-navy">
                    ${(postMoneyVal / 1000000).toFixed(2)}M
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                    INVESTOR SHARES
                  </span>
                  <span className="text-base font-extrabold text-red">
                    {investorOwnership.toFixed(1)}%
                  </span>
                </div>

                <div className="space-y-1 col-span-2 md:col-span-1">
                  <span className="text-[9px] font-bold text-text-muted uppercase tracking-wider block">
                    FOUNDER POOL (NET)
                  </span>
                  <span className="text-base font-extrabold text-navy">
                    {founderPostRaise.toFixed(1)}%
                  </span>
                </div>

              </div>

              {/* Direct tactical guidance for these calculator numbers */}
              <div className="p-4 rounded border border-navy/10 dark:border-white/10 bg-navy/2 dark:bg-slate-950/60 text-xs space-y-1.5">
                <span className="font-bold text-navy flex items-center gap-1 uppercase tracking-wider">
                  <Lightbulb className="w-3.5 h-3.5 text-red" />
                  Tactical Financial Advice
                </span>
                <p className="text-text-muted leading-relaxed">
                  {investorOwnership > 30 ? (
                    <span className="text-red-700 font-bold">Caution: High Dilution.</span>
                  ) : (
                    <span className="text-green-700 font-bold">Healthy Dilution.</span>
                  )}{" "}
                  Acquiring {raiseAmount / 1000000}M capital at a {preMoneyVal / 1000000}M pre-money valuation means giving up {investorOwnership.toFixed(1)}% to your new lead investors. Including your {optionPool}% option pool, the original founders will retain {founderPostRaise.toFixed(1)}% equity. Ensure this dilution buys you at least 18 months of aggressive development to increase the company's valuation before your next round.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Direct call to action footer banner */}
      <section className="py-16 bg-navy dark:bg-slate-950 text-white text-center relative overflow-hidden transition-colors duration-200">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy to-[#122e57] opacity-90"></div>
        <div className="max-w-[800px] mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Let's Make Your Venture Investment-Ready
          </h2>
          <p className="text-sm sm:text-base opacity-80 leading-relaxed max-w-xl mx-auto">
            Book a dedicated consultation. I will audit your current pitch structure, review your target unit-economics slides, and optimize your overall investor narrative.
          </p>
          <button
            onClick={onNavigateToContact}
            className="inline-flex bg-red text-white px-8 py-4 font-bold rounded-[4px] hover:opacity-95 cursor-pointer shadow-lg active:scale-95 transition-all text-sm uppercase tracking-wider"
          >
            Schedule Strategy Audit
          </button>
        </div>
      </section>

    </div>
  );
}
