import React, { useState } from "react";
import { Linkedin, X, ShieldAlert, Mail, BookOpen, Send, Rss } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault();
    setActiveDoc(label);
  };

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-border-subtle dark:border-border-subtle/20 text-[12px] font-medium py-12 transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-6 space-y-10">
        
        {/* Top half with newsletter promo */}
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-border-subtle dark:border-border-subtle/10 items-center">
          <div className="md:col-span-7 space-y-2">
            <span className="inline-flex items-center gap-1.5 bg-red/10 text-red text-[10px] font-extrabold px-3 py-1 rounded-sm uppercase tracking-wider">
              <Rss className="w-3 h-3" />
              Strategic Insights Publication
            </span>
            <h3 className="text-xl font-bold text-navy dark:text-white tracking-tight">
              Subscribe to My LinkedIn Newsletter
            </h3>
            <p className="text-xs text-text-muted leading-relaxed max-w-xl">
              Join thousands of startup founders, engineers, and SME operators receiving monthly execution playbooks, scale blueprints, and boardroom risk advisory.
            </p>
          </div>
          <div className="md:col-span-5 flex justify-start md:justify-end">
            <a
              href="https://www.linkedin.com/newsletters/she-means-business-7359204731958779907"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white dark:bg-red hover:opacity-90 active:scale-95 px-5 py-3 rounded text-xs font-bold uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <Linkedin className="w-4 h-4 fill-white" />
              Subscribe on LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom half with branding and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side branding */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <div className="space-y-1">
              <span className="text-xl font-bold text-navy dark:text-white block">Jayita S</span>
              <span className="text-[11px] text-text-muted block">Strategic Advisory & Independent COO Advisory</span>
            </div>
            <span className="text-text-muted hidden md:inline">|</span>
            <span className="text-text-muted">
              &copy; {currentYear} Jayita Consulting Portfolio. All rights reserved.
            </span>
          </div>

          {/* Right Side legal + social links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#privacy"
              onClick={(e) => handleLinkClick(e, "Privacy Policy")}
              className="text-text-muted hover:text-navy dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              onClick={(e) => handleLinkClick(e, "Terms of Service")}
              className="text-text-muted hover:text-navy dark:hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            
            <span className="text-border-subtle hidden md:inline">|</span>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/jayitasgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-navy dark:hover:text-white transition-colors p-1.5 rounded bg-navy/5 dark:bg-white/5 flex items-center justify-center cursor-pointer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-navy dark:hover:text-white transition-colors p-1.5 rounded bg-navy/5 dark:bg-white/5 flex items-center justify-center cursor-pointer"
                aria-label="X / Twitter Profile"
                title="X / Twitter"
              >
                {/* Standard X / simple generic placeholder cross since Twitter logo is customized */}
                <span className="text-xs font-black leading-none">𝕏</span>
              </a>
              <a
                href="mailto:beyondconsulting25@gmail.com"
                className="text-text-muted hover:text-navy dark:hover:text-white transition-colors p-1.5 rounded bg-navy/5 dark:bg-white/5 flex items-center justify-center cursor-pointer"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Polish inside-app modal dialog replacing raw alert */}
      {activeDoc && (
        <div className="fixed inset-0 bg-navy/60 dark:bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn" onClick={() => setActiveDoc(null)}>
          <div 
            className="bg-white dark:bg-slate-900 max-w-[450px] w-full rounded-lg border border-border-subtle dark:border-border-subtle/20 p-6 shadow-2xl relative animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveDoc(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-navy dark:hover:text-white rounded-full p-1 cursor-pointer"
              aria-label="Close document"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-red/10 rounded-full flex-shrink-0">
                <ShieldAlert className="w-5 h-5 text-red" />
              </div>
              <div className="space-y-2 text-navy dark:text-white">
                <h3 className="text-base font-bold tracking-tight">{activeDoc}</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  This is a demonstration of the strategy advisory portfolio's <strong>{activeDoc}</strong>.
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  In a production release, clicking this action would securely navigate to a dedicated document viewer or dispatch legal agreements.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveDoc(null)}
                className="bg-navy text-white dark:bg-red px-4 py-2 rounded text-xs font-semibold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
