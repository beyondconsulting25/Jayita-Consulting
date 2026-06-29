import React, { useState } from "react";
import { Check, CalendarCheck, FileText, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { BookingInquiry } from "../types";

export default function Contact({ 
  onNavigateToPitchDeckSection 
}: { 
  onNavigateToPitchDeckSection?: (sectionId: "pitch-deck-readiness" | "dilution-modeler") => void 
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [businessStage, setBusinessStage] = useState("Pre-Seed / Seed");
  const [servicesRequired, setServicesRequired] = useState<string[]>([]);
  const [additionalContext, setAdditionalContext] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<BookingInquiry | null>(null);

  const servicesList = ["Pitch Deck", "Business Plan", "Fractional COO", "Growth Strategy", "Other"];

  const handleCheckboxChange = (service: string) => {
    if (servicesRequired.includes(service)) {
      setServicesRequired(servicesRequired.filter((s) => s !== service));
    } else {
      setServicesRequired([...servicesRequired, service]);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!companyName.trim()) newErrors.companyName = "Company name is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newInquiry: BookingInquiry = {
      id: Math.random().toString(36).substr(2, 9),
      fullName,
      email,
      companyName,
      businessStage,
      servicesRequired,
      additionalContext,
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    // Store in localStorage for persistence
    const currentInquiries = JSON.parse(localStorage.getItem("booking_inquiries") || "[]");
    localStorage.setItem("booking_inquiries", JSON.stringify([...currentInquiries, newInquiry]));

    setSubmittedData(newInquiry);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setCompanyName("");
    setBusinessStage("Pre-Seed / Seed");
    setServicesRequired([]);
    setAdditionalContext("");
    setIsSubmitted(false);
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-background transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Value Props & Testimonial */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                Ready to scale?
              </h2>
              <p className="text-base text-text-muted leading-relaxed max-w-lg">
                Book a preliminary consultation to discuss your operational challenges and growth targets. Let's find the shortest path to your next milestone.
              </p>
            </div>

            {/* Checkmark value propositions */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-red" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-navy">No-Obligation Audit</h4>
                  <p className="text-sm text-text-muted">A 30-minute deep dive into your current business model.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-red" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-navy">Strict Confidentiality</h4>
                  <p className="text-sm text-text-muted">All strategic discussions are protected by mutual NDAs.</p>
                </div>
              </div>
            </div>

            {/* Self-Service Investment Tools Links */}
            <div className="p-6 bg-surface-container dark:bg-slate-900/40 border border-border-subtle dark:border-border-subtle/20 space-y-4">
              <h4 className="text-sm font-extrabold text-navy dark:text-white uppercase tracking-wider">
                Interactive Investor Workspaces
              </h4>
              <p className="text-xs text-text-muted leading-relaxed">
                Want to pre-evaluate your preparedness or run dilution scenarios immediately? Access our specialized modules:
              </p>
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => onNavigateToPitchDeckSection?.("pitch-deck-readiness")}
                  className="w-full flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 hover:bg-navy hover:text-white dark:hover:bg-red dark:hover:text-white border border-border-subtle dark:border-border-subtle/20 text-navy dark:text-white transition-all text-xs font-bold uppercase tracking-wider group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-red group-hover:text-white flex-shrink-0" />
                    Test Your Pitch Deck Readiness
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white flex-shrink-0" />
                </button>
                
                <button
                  onClick={() => onNavigateToPitchDeckSection?.("dilution-modeler")}
                  className="w-full flex items-center justify-between p-3.5 bg-white dark:bg-slate-950 hover:bg-navy hover:text-white dark:hover:bg-red dark:hover:text-white border border-border-subtle dark:border-border-subtle/20 text-navy dark:text-white transition-all text-xs font-bold uppercase tracking-wider group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-red group-hover:text-white flex-shrink-0" />
                    Model Your Next Investment Round
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-white flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Request Strategy Session Form / Ticket */}
          <div>
            {!isSubmitted ? (
              <div className="bg-white dark:bg-slate-900 p-8 border border-border-subtle dark:border-border-subtle/20 shadow-lg">
                <h3 className="text-xl font-bold text-navy mb-6">
                  Request Strategy Session
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-navy uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full border ${
                          errors.fullName ? "border-red" : "border-border-subtle dark:border-border-subtle/20"
                        } focus:border-navy focus:outline-none focus:ring-0 px-4 py-3 text-sm bg-white dark:bg-slate-950 dark:text-white rounded-none`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red mt-1">{errors.fullName}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-navy uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        type="text"
                        placeholder="jane@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full border ${
                          errors.email ? "border-red" : "border-border-subtle dark:border-border-subtle/20"
                        } focus:border-navy focus:outline-none focus:ring-0 px-4 py-3 text-sm bg-white dark:bg-slate-950 dark:text-white rounded-none`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-navy uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full border ${
                          errors.companyName ? "border-red" : "border-border-subtle dark:border-border-subtle/20"
                        } focus:border-navy focus:outline-none focus:ring-0 px-4 py-3 text-sm bg-white dark:bg-slate-950 dark:text-white rounded-none`}
                      />
                      {errors.companyName && (
                        <p className="text-xs text-red mt-1">{errors.companyName}</p>
                      )}
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-navy uppercase tracking-wider">
                        Business Stage
                      </label>
                      <select
                        value={businessStage}
                        onChange={(e) => setBusinessStage(e.target.value)}
                        className="w-full border border-border-subtle dark:border-border-subtle/20 focus:border-navy focus:outline-none focus:ring-0 px-4 py-3 text-sm bg-white dark:bg-slate-950 dark:text-white rounded-none"
                      >
                        <option>Pre-Seed / Seed</option>
                        <option>Series A / B</option>
                        <option>Growth Stage</option>
                        <option>Enterprise</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider">
                      Services Required
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {servicesList.map((service) => (
                        <label
                          key={service}
                          className="flex items-center gap-3 text-sm text-text-muted cursor-pointer hover:text-navy transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={servicesRequired.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="rounded-none border-border-subtle dark:border-border-subtle/20 text-navy focus:ring-0 w-4 h-4 bg-white dark:bg-slate-950"
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-navy uppercase tracking-wider">
                      Additional Context
                    </label>
                    <textarea
                      placeholder="Tell me about your primary objective..."
                      rows={4}
                      value={additionalContext}
                      onChange={(e) => setAdditionalContext(e.target.value)}
                      className="w-full border border-border-subtle dark:border-border-subtle/20 focus:border-navy focus:outline-none focus:ring-0 px-4 py-3 text-sm bg-white dark:bg-slate-950 dark:text-white rounded-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-white dark:bg-red dark:text-white py-4 font-semibold text-sm uppercase tracking-widest hover:bg-navy/90 dark:hover:bg-red/90 active:scale-98 transition-all cursor-pointer rounded-none"
                  >
                    Request Confirmation
                  </button>
                </form>
              </div>
            ) : (
              /* Success / Ticket Confirmation Screen */
              <div className="bg-white dark:bg-slate-900 p-8 border border-navy/30 dark:border-border-subtle/20 shadow-2xl space-y-6 relative overflow-hidden rounded-md animate-scaleIn">
                {/* Visual Accent ticket cutouts */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-r border-navy/10 dark:border-border-subtle/20"></div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-l border-navy/10 dark:border-border-subtle/20"></div>

                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-2 border border-green-200 dark:border-green-800/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy">Session Requested!</h3>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    Jayita S Gupta Strategy Office
                  </p>
                </div>

                {/* Ticket Body details */}
                <div className="border-t border-b border-dashed border-border-subtle dark:border-border-subtle/20 py-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        REQUESTOR NAME
                      </span>
                      <span className="font-semibold text-navy">{submittedData?.fullName}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        COMPANY & STAGE
                      </span>
                      <span className="font-semibold text-navy truncate block">
                        {submittedData?.companyName} ({submittedData?.businessStage})
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        REQUEST DATE
                      </span>
                      <span className="font-semibold text-navy">{submittedData?.date}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        EMAIL ADDR
                      </span>
                      <span className="font-semibold text-navy truncate block">{submittedData?.email}</span>
                    </div>
                  </div>

                  {submittedData && submittedData.servicesRequired.length > 0 && (
                    <div className="text-sm">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        SERVICES INTERESTED
                      </span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {submittedData.servicesRequired.map((srv) => (
                          <span
                            key={srv}
                            className="bg-navy/5 text-navy text-[11px] font-semibold px-2.5 py-0.5 rounded border border-navy/10"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {submittedData?.additionalContext && (
                    <div className="text-sm">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                        CONTEXT STATEMENT
                      </span>
                      <p className="text-xs text-text-muted italic leading-relaxed mt-1 line-clamp-2">
                        "{submittedData.additionalContext}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Next Steps walkthrough */}
                <div className="bg-surface-container-low dark:bg-slate-950/40 p-4 rounded border border-border-subtle dark:border-border-subtle/20 text-xs space-y-2">
                  <span className="font-bold text-navy uppercase tracking-wider block">
                    WHAT TO EXPECT NEXT:
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-text-muted">
                    <li>An NDA proposal and calendar invitation will be dispatched within 2 business hours.</li>
                    <li>Please prepare a brief operational summary draft prior to our strategy call.</li>
                  </ul>
                </div>

                {/* Direct Action buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="flex-1 border border-navy text-navy font-semibold text-xs py-3 hover:bg-navy/5 dark:hover:bg-white/5 transition-all uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another
                  </button>
                  <a
                    href="mailto:beyondconsulting25@gmail.com"
                    className="flex-1 bg-navy text-white dark:bg-red dark:text-white font-semibold text-xs py-3 text-center hover:bg-navy/90 dark:hover:bg-red/90 transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Email Strategy team
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
