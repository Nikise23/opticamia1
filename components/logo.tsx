export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 46 18"
        className="h-[18px] w-11"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="8" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="24" cy="9" r="5.25" stroke="currentColor" strokeWidth="1.35" />
        <path
          d="M13.2 8.1c1.6 3.4 3.2 3.4 4.8 0"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-7 w-px bg-current" aria-hidden="true" />
      <span className="flex flex-col gap-1">
        <span className="text-[0.92rem] font-bold leading-none tracking-[0.16em] uppercase">
          Óptica Mía
        </span>
        <span className="slogan">Cambia tu forma de ver</span>
      </span>
    </span>
  );
}
