import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import jayitaPortrait from "../assets/images/jayita_office_desk_1782659567336.jpg";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Wave parameters for the ambient backdrop
    interface Wave {
      y: number;
      length: number;
      amplitude: number;
      speed: number;
      color: string;
      phase: number;
    }

    const waves: Wave[] = [
      {
        y: height * 0.5,
        length: 0.003,
        amplitude: 45,
        speed: 0.012,
        color: "rgba(10, 31, 68, 0.04)", // Light navy
        phase: 0,
      },
      {
        y: height * 0.48,
        length: 0.002,
        amplitude: 60,
        speed: -0.008,
        color: "rgba(26, 74, 138, 0.03)", // Light blue
        phase: Math.PI / 4,
      },
      {
        y: height * 0.52,
        length: 0.004,
        amplitude: 30,
        speed: 0.015,
        color: "rgba(192, 57, 43, 0.02)", // Subtle red accent
        phase: Math.PI / 2,
      },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, height);
      if (isDark) {
        grad.addColorStop(0, "#0B0F19");
        grad.addColorStop(1, "#020617");
      } else {
        grad.addColorStop(0, "#fcfdfd");
        grad.addColorStop(1, "#f3f5f8");
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw flowing waves
      waves.forEach((wave, idx) => {
        ctx.beginPath();
        let fillStyle = wave.color;
        if (isDark) {
          if (idx === 0) fillStyle = "rgba(56, 189, 248, 0.05)";
          else if (idx === 1) fillStyle = "rgba(96, 165, 250, 0.04)";
          else fillStyle = "rgba(248, 113, 113, 0.03)";
        }
        
        wave.phase += wave.speed;
        
        // Dynamic center vertical position based on viewport
        const currentY = height * 0.52;

        ctx.moveTo(0, currentY);
        for (let x = 0; x < width; x++) {
          const y =
            currentY +
            Math.sin(x * wave.length + wave.phase) *
              wave.amplitude *
              Math.sin(wave.phase * 0.5);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = fillStyle;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden py-16"
    >
      {/* Dynamic Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Hero Copy */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 text-red font-semibold tracking-wider text-[14px]">
            <span className="w-12 h-[2px] bg-red"></span>
            STRATEGIC OPERATIONS & GROWTH
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight">
            Jayita S Gupta: Turning Vision into{" "}
            <span className="text-red">Scalable Execution</span>
          </h1>
          <p className="text-lg sm:text-xl text-text-muted leading-relaxed max-w-[520px]">
            A seasoned Business Strategist and fractional COO helping founders and
            executives bridge the gap between ambitious ideas and operational reality.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => handleScrollTo("contact")}
              className="bg-navy text-white dark:bg-red dark:text-white px-8 py-4 font-semibold rounded-[4px] hover:opacity-90 active:scale-98 transition-all flex items-center gap-2 text-[14px] cursor-pointer"
            >
              Schedule a Strategy Audit
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => handleScrollTo("portfolio")}
              className="border border-navy text-navy px-8 py-4 font-semibold rounded-[4px] hover:bg-navy/5 dark:hover:bg-white/5 active:scale-98 transition-all text-[14px] cursor-pointer"
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Hero Portrait Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-[12px] border-white dark:border-slate-800 shadow-2xl overflow-hidden group animate-scaleIn">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A professional portrait of Jayita S Gupta, a female executive with tailored corporate styling"
              referrerPolicy="no-referrer"
              src={jayitaPortrait}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
