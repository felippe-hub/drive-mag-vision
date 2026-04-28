export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <defs>
          <linearGradient id="sd-logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="55%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        <path d="M12 3 L21.5 20 H2.5 Z" stroke="url(#sd-logo-grad)" strokeWidth="2" strokeLinejoin="round" fill="none" />
        <path d="M12 9.5 L17 18 H7 Z" fill="url(#sd-logo-grad)" opacity="0.35" />
      </svg>
      <span className="font-bold tracking-tight text-white text-[17px] leading-none">
        SALES <span className="sd-text-gradient">DRIVE</span>
      </span>
    </div>
  );
}