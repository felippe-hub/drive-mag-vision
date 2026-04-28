export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="h-2 w-2 rounded-full" style={{ background: "#FF6B35" }} />
      <span className="font-bold tracking-tight text-white text-[17px]">Sales Drive</span>
    </div>
  );
}