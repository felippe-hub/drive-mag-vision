export function SectionLabel({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <div className="mb-5">
      <div className={`sd-label ${muted ? "sd-label-muted" : ""}`}>{children}</div>
      <div className={`sd-label-line ${muted ? "sd-label-line-muted" : ""}`} />
    </div>
  );
}