"use client";

import Image from "next/image";
import { useState } from "react";
import type { Model } from "@/lib/models";

export function ModelPhoto({
  model,
  sizes,
  onCycle,
  eager = false,
}: {
  model: Model;
  sizes: string;
  onCycle?: () => void;
  eager?: boolean;
}) {
  const [shot, setShot] = useState(0);
  const current = model.shots[shot];
  const total = model.shots.length;
  const many = total > 1;

  const photo = (
    <Image
      key={current.src}
      src={current.src}
      alt={current.alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      className="object-cover"
      style={{ objectPosition: current.position ?? "center" }}
    />
  );

  if (!many) {
    return <div className="lens-mask relative aspect-[3/4] w-full">{photo}</div>;
  }

  return (
    <button
      type="button"
      className="lens-mask relative aspect-[3/4] w-full cursor-pointer"
      aria-label={`Foto ${shot + 1} de ${total} del modelo ${model.name}. Ver la siguiente.`}
      onClick={() => {
        setShot((value) => (value + 1) % total);
        onCycle?.();
      }}
    >
      {photo}
      <span className="shot-count" aria-live="polite">
        {shot + 1} / {total}
      </span>
    </button>
  );
}
