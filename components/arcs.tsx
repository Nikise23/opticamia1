type Corner = "top-right" | "bottom-left";

const geometry: Record<
  Corner,
  { cx: number; cy: number; className: string }
> = {
  "top-right": {
    cx: 400,
    cy: 0,
    className:
      "absolute -right-20 -top-16 h-64 w-64 md:-right-10 md:-top-8 md:h-[26rem] md:w-[26rem]",
  },
  "bottom-left": {
    cx: 0,
    cy: 400,
    className:
      "absolute -bottom-20 -left-16 h-56 w-56 md:-bottom-16 md:-left-10 md:h-80 md:w-80",
  },
};

export function ArcPair({
  corner,
  thick = "var(--navy)",
}: {
  corner: Corner;
  thick?: string;
}) {
  const { cx, cy, className } = geometry[corner];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx={cx} cy={cy} r="168" stroke={thick} strokeWidth="18" />
      <circle
        cx={cx}
        cy={cy}
        r="228"
        stroke="var(--orange)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
