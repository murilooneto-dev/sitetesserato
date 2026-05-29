"use client";

interface LogoSVGProps {
  variant?: "icon" | "horizontal" | "vertical";
  className?: string;
  iconSize?: number;
}

export default function LogoSVG({
  variant = "horizontal",
  className = "",
  iconSize = 60,
}: LogoSVGProps) {
  const Diamond = ({ size = 60 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="outerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4EC" />
          <stop offset="100%" stopColor="#00A0B8" />
        </linearGradient>
        <linearGradient id="midGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B47C5" />
          <stop offset="100%" stopColor="#1B1F5E" />
        </linearGradient>
      </defs>
      {/* Outer teal diamond */}
      <path
        d="M50 5 L95 50 L50 95 L5 50 Z"
        fill="url(#outerGrad)"
        opacity="0.9"
      />
      {/* Middle navy diamond */}
      <path
        d="M50 14 L86 50 L50 86 L14 50 Z"
        fill="url(#midGrad)"
      />
      {/* Inner cutout (hollow center) */}
      <path
        d="M50 28 L72 50 L50 72 L28 50 Z"
        fill="white"
      />
    </svg>
  );

  if (variant === "icon") {
    return (
      <div className={className}>
        <Diamond size={iconSize} />
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <Diamond size={iconSize} />
        <div className="text-center">
          <div className="font-bold tracking-widest text-[#1B1F5E]" style={{ fontSize: iconSize * 0.3 }}>
            TESSERATO
          </div>
          <div className="font-semibold tracking-[0.2em] text-[#1B1F5E]" style={{ fontSize: iconSize * 0.18 }}>
            CONTABILIDADE
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Diamond size={iconSize} />
      <div>
        <div className="font-bold tracking-widest text-[#1B1F5E] leading-tight" style={{ fontSize: iconSize * 0.28 }}>
          TESSERATO
        </div>
        <div className="font-semibold tracking-[0.2em] text-[#1B1F5E]" style={{ fontSize: iconSize * 0.18 }}>
          CONTABILIDADE
        </div>
      </div>
    </div>
  );
}
