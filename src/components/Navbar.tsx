import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown, Award, Globe, Shield, Briefcase, FileText } from "lucide-react";

interface DropdownItem {
  label: string;
  href?: string;
  pageName?: "home" | "pitch-deck" | "portfolio" | "awards" | "value-propositions" | "international-exposure" | "services-page";
  id: string;
  type: string;
  icon?: React.ComponentType<any>;
}

interface NavbarProps {
  currentPage: "home" | "pitch-deck" | "portfolio" | "awards" | "value-propositions" | "international-exposure" | "services-page";
  setCurrentPage: (page: "home" | "pitch-deck" | "portfolio" | "awards" | "value-propositions" | "international-exposure" | "services-page") => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  // Track open state of dropdowns on desktop/mobile
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const aboutDropdownItems: DropdownItem[] = [
    { label: "About Me", href: "#about", id: "about", type: "section" },
    { label: "Honors & Awards", pageName: "awards", id: "awards", type: "page", icon: Award },
    { label: "Value Propositions", pageName: "value-propositions", id: "value-propositions", type: "page", icon: Shield },
    { label: "International Exposure", pageName: "international-exposure", id: "international-exposure", type: "page", icon: Globe }
  ];

  const servicesDropdownItems: DropdownItem[] = [
    { label: "My Services", pageName: "services-page", id: "services-page", type: "page", icon: Briefcase },
    { label: "Investment Ready Blueprint", pageName: "pitch-deck", id: "pitch-deck", type: "page", icon: FileText }
  ];

  // Global scroll listener for section tracking on the homepage
  useEffect(() => {
    if (currentPage !== "home") {
      setActiveSection(currentPage);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      // Check general sections
      const sections = ["home", "about", "services", "portfolio", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  // Unified click handler for all items
  const handleItemClick = (item: DropdownItem) => {
    setIsOpen(false);
    setAboutOpen(false);
    setServicesOpen(false);

    if (item.type === "page") {
      setCurrentPage(item.pageName as any);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection(item.id);
    } else if (item.href) {
      if (currentPage !== "home") {
        setCurrentPage("home");
        setTimeout(() => {
          const target = document.querySelector(item.href!);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 150);
      } else {
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      setActiveSection(item.id);
    }
  };

  return (
    <nav className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-md text-[14px] font-semibold shadow-sm sticky top-0 border-b border-border-subtle dark:border-border-subtle/20 z-50 text-text-main transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-[1200px] mx-auto">
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold text-navy dark:text-white hover:opacity-90 transition-opacity flex items-center gap-1.5"
          id="nav-logo"
        >
          Jayita S Gupta
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          
          {/* Home Link */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("home");
            }}
            className={`transition-colors py-1 ${
              currentPage === "home" && activeSection === "home"
                ? "text-navy dark:text-white font-bold border-b-2 border-navy dark:border-red"
                : "text-text-muted hover:text-navy dark:hover:text-white"
            }`}
          >
            Home
          </a>

          {/* About Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className={`flex items-center gap-1 py-1 transition-colors hover:text-navy dark:hover:text-white cursor-pointer ${
                ["about", "awards", "value-propositions", "international-exposure"].includes(activeSection)
                  ? "text-navy dark:text-white font-bold border-b-2 border-navy dark:border-red"
                  : "text-text-muted"
              }`}
            >
              About
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? "rotate-180 text-red" : ""}`} />
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-60 bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 rounded shadow-lg py-2 animate-fadeIn z-50">
                {aboutDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href || `#${item.pageName}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item);
                      }}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-text-muted hover:text-navy dark:hover:text-white hover:bg-navy/5 dark:hover:bg-white/5 transition-colors font-semibold"
                    >
                      {Icon && <Icon className="w-4 h-4 text-red flex-shrink-0" />}
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 py-1 transition-colors hover:text-navy dark:hover:text-white cursor-pointer ${
                ["services", "services-page", "pitch-deck"].includes(activeSection)
                  ? "text-navy dark:text-white font-bold border-b-2 border-navy dark:border-red"
                  : "text-text-muted"
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180 text-red" : ""}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-64 bg-white dark:bg-slate-900 border border-border-subtle dark:border-border-subtle/20 rounded shadow-lg py-2 animate-fadeIn z-50">
                {servicesDropdownItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.href || `#${item.pageName}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item);
                      }}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-xs text-text-muted hover:text-navy dark:hover:text-white hover:bg-navy/5 dark:hover:bg-white/5 transition-colors font-semibold"
                    >
                      {Icon && <Icon className="w-4 h-4 text-red flex-shrink-0" />}
                      {item.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Portfolio Section Link */}
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick({ label: "Portfolio", href: "#portfolio", id: "portfolio", type: "section" });
            }}
            className={`transition-colors py-1 ${
              activeSection === "portfolio"
                ? "text-navy dark:text-white font-bold border-b-2 border-navy dark:border-red"
                : "text-text-muted hover:text-navy dark:hover:text-white"
            }`}
          >
            Portfolio
          </a>

          {/* Contact Section Link */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick({ label: "Contact", href: "#contact", id: "contact", type: "section" });
            }}
            className={`transition-colors py-1 ${
              activeSection === "contact"
                ? "text-navy dark:text-white font-bold border-b-2 border-navy dark:border-red"
                : "text-text-muted hover:text-navy dark:hover:text-white"
            }`}
          >
            Contact
          </a>

          {/* Theme Toggle Button Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-navy/5 dark:hover:bg-white/5 text-text-muted hover:text-navy dark:hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
            id="theme-toggle-desktop"
          >
            {theme === "dark" ? (
              <Sun className="w-[18px] h-[18px] text-yellow-500 animate-fadeIn" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-navy animate-fadeIn" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick({ label: "Contact", href: "#contact", id: "contact", type: "section" });
            }}
            className="bg-navy text-white dark:bg-red dark:text-white px-5 py-2.5 rounded-[4px] hover:opacity-85 transition-all active:scale-95 duration-150 flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider cursor-pointer"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-navy/5 dark:hover:bg-white/5 text-text-muted hover:text-navy dark:hover:text-white transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
            id="theme-toggle-mobile"
          >
            {theme === "dark" ? (
              <Sun className="w-[18px] h-[18px] text-yellow-500 animate-fadeIn" />
            ) : (
              <Moon className="w-[18px] h-[18px] text-navy animate-fadeIn" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-navy dark:text-white hover:opacity-80 transition-opacity animate-fadeIn p-2 cursor-pointer"
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-border-subtle dark:border-border-subtle/20 bg-white dark:bg-slate-900 px-6 py-4 flex flex-col gap-4 animate-fadeIn transition-colors duration-200 overflow-y-auto max-h-[85vh]">
          
          {/* Home Link */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
              setActiveSection("home");
              setIsOpen(false);
            }}
            className="text-lg font-bold text-navy dark:text-white border-b border-border-subtle/45 dark:border-border-subtle/10 pb-2"
          >
            Home
          </a>

          {/* About Section Block */}
          <div className="space-y-2 border-b border-border-subtle/45 dark:border-border-subtle/10 pb-3">
            <span className="text-xs font-bold text-red uppercase tracking-widest block mb-1">
              About Section
            </span>
            <div className="pl-3 flex flex-col gap-2.5">
              {aboutDropdownItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href || `#${item.pageName}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                  className={`text-[15px] font-semibold transition-colors flex items-center gap-2 ${
                    activeSection === item.id ? "text-red font-bold" : "text-text-muted hover:text-navy dark:hover:text-white"
                  }`}
                >
                  <span className="text-red font-bold text-lg leading-none">•</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services Section Block */}
          <div className="space-y-2 border-b border-border-subtle/45 dark:border-border-subtle/10 pb-3">
            <span className="text-xs font-bold text-red uppercase tracking-widest block mb-1">
              Services & Blueprints
            </span>
            <div className="pl-3 flex flex-col gap-2.5">
              {servicesDropdownItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href || `#${item.pageName}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                  className={`text-[15px] font-semibold transition-colors flex items-center gap-2 ${
                    activeSection === item.id ? "text-red font-bold" : "text-text-muted hover:text-navy dark:hover:text-white"
                  }`}
                >
                  <span className="text-red font-bold text-lg leading-none">•</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Portfolio & Contact Links */}
          <a
            href="#portfolio"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick({ label: "Portfolio", href: "#portfolio", id: "portfolio", type: "section" });
            }}
            className={`text-lg font-bold border-b border-border-subtle/45 dark:border-border-subtle/10 pb-2 ${
              activeSection === "portfolio" ? "text-red" : "text-navy dark:text-white"
            }`}
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick({ label: "Contact", href: "#contact", id: "contact", type: "section" });
            }}
            className={`text-lg font-bold border-b border-border-subtle/45 dark:border-border-subtle/10 pb-2 ${
              activeSection === "contact" ? "text-red" : "text-navy dark:text-white"
            }`}
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleItemClick({ label: "Contact", href: "#contact", id: "contact", type: "section" });
            }}
            className="bg-navy text-white dark:bg-red dark:text-white text-center py-3 rounded-[4px] font-bold text-base hover:bg-navy/90 dark:hover:bg-red/90 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
          >
            Book a Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
