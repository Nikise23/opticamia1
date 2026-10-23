"use client";

import { useMemo, useState } from "react";
import { ModelPhoto } from "@/components/model-photo";
import { frameFilters, models, type FrameFilter } from "@/lib/models";
import { modelWhatsapp } from "@/lib/site";

function fold(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function FramesBrowser() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<FrameFilter>("todos");

  const visible = useMemo(() => {
    const needle = fold(query.trim());
    return models.filter((model) => {
      const matchesKind = kind === "todos" || model.kind === kind;
      const matchesQuery = needle.length === 0 || fold(model.name).includes(needle);
      return matchesKind && matchesQuery;
    });
  }, [query, kind]);

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <label className="block w-full max-w-sm">
          <span className="eyebrow">Buscar</span>
          <input
            className="field mt-3"
            type="search"
            value={query}
            placeholder="Nombre del modelo"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por tipo">
          {frameFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="chip"
              aria-pressed={kind === filter.id}
              onClick={() => setKind(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <p className="eyebrow mt-8">
        {visible.length} {visible.length === 1 ? "modelo" : "modelos"}
      </p>
      {visible.length === 0 ? (
        <p className="mt-6 max-w-[32ch]">Ningún modelo coincide con esa búsqueda.</p>
      ) : (
        <ul className="frames-grid mt-8">
          {visible.map((model) => (
            <li key={model.id} id={model.id}>
              <ModelPhoto model={model} sizes="(min-width: 768px) 30vw, 45vw" />
              <p className="mt-4 text-lg leading-snug">{model.name}</p>
              <p className="eyebrow mt-1">
                {frameFilters.find((filter) => filter.id === model.kind)?.label}
              </p>
              <a
                className="btn btn-primary mt-4"
                href={modelWhatsapp(model.name)}
                target="_blank"
                rel="noreferrer"
              >
                Consultar
                <span className="sr-only"> el modelo {model.name}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
