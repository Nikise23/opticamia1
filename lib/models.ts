export type FrameKind = "receta" | "sol" | "clip";

export type Shot = {
  src: string;
  alt: string;
  position?: string;
};

export type Model = {
  id: string;
  name: string;
  kind: FrameKind;
  shots: Shot[];
};

export const frameFilters = [
  { id: "todos", label: "Todos" },
  { id: "receta", label: "Receta" },
  { id: "sol", label: "Sol" },
  { id: "clip", label: "Clip" },
] as const;

export type FrameFilter = (typeof frameFilters)[number]["id"];

export const models: Model[] = [
  {
    id: "transparente",
    name: "Transparente",
    kind: "receta",
    shots: [
      {
        src: "/armazones/transparente.webp",
        alt: "Armazón transparente con forma de ojito, sobre fondo rosa",
        position: "center 58%",
      },
    ],
  },
  {
    id: "rosa",
    name: "Rosa",
    kind: "receta",
    shots: [
      {
        src: "/armazones/rosa-1.webp",
        alt: "Armazón transparente rosa, de frente, sobre un estuche estampado",
        position: "center 62%",
      },
      {
        src: "/armazones/rosa-2.webp",
        alt: "Mismo armazón rosa, de costado, junto al estuche",
        position: "center 55%",
      },
      {
        src: "/armazones/rosa-3.webp",
        alt: "Armazón rosa sobre el estuche, con un anteojo de sol adelante",
        position: "center 45%",
      },
    ],
  },
  {
    id: "metal",
    name: "Metal",
    kind: "receta",
    shots: [
      {
        src: "/armazones/metal.webp",
        alt: "Armazón transparente de metal, con patillas celestes",
      },
    ],
  },
  {
    id: "negro",
    name: "Negro",
    kind: "clip",
    shots: [
      {
        src: "/armazones/clip.webp",
        alt: "Anteojos de sol negros y armazón de metal, sostenidos con la mano",
        position: "center 42%",
      },
      {
        src: "/armazones/negro.webp",
        alt: "Armazón negro de metal, sostenido con la mano",
        position: "center 45%",
      },
    ],
  },
  {
    id: "hexagonal",
    name: "Hexagonal",
    kind: "sol",
    shots: [
      {
        src: "/armazones/hexagonal.webp",
        alt: "Anteojos de sol con lentes hexagonales",
        position: "center 22%",
      },
    ],
  },
  {
    id: "geometrico",
    name: "Geométrico",
    kind: "sol",
    shots: [
      {
        src: "/armazones/geometrico.webp",
        alt: "Anteojos de sol geométricos, con marco fino",
        position: "center 28%",
      },
    ],
  },
  {
    id: "carey",
    name: "Sol carey",
    kind: "sol",
    shots: [
      {
        src: "/armazones/carey.webp",
        alt: "Anteojos de sol oscuros con marco carey",
        position: "68% 28%",
      },
    ],
  },
  {
    id: "deportivo",
    name: "Deportivo",
    kind: "sol",
    shots: [
      {
        src: "/armazones/deportivo.webp",
        alt: "Anteojos de sol deportivos, negros, con lentes envolventes",
        position: "center 38%",
      },
    ],
  },
  {
    id: "mascara",
    name: "Máscara",
    kind: "sol",
    shots: [
      {
        src: "/armazones/mascara.webp",
        alt: "Anteojos de sol negros tipo máscara, de una sola lente",
        position: "center 40%",
      },
    ],
  },
  {
    id: "redondos",
    name: "Redondos",
    kind: "sol",
    shots: [
      {
        src: "/armazones/redondos.webp?v=2",
        alt: "Armazones redondos negros, con lentes de varios colores",
        position: "center 58%",
      },
    ],
  },
  {
    id: "ambar",
    name: "Ámbar",
    kind: "sol",
    shots: [
      {
        src: "/armazones/ambar.webp",
        alt: "Anteojos de sol cuadrados, color ámbar, junto a un pañuelo",
        position: "center 68%",
      },
    ],
  },
  {
    id: "dorado",
    name: "Dorado",
    kind: "receta",
    shots: [
      {
        src: "/armazones/dorado.webp",
        alt: "Armazón dorado fino, puesto al aire libre",
        position: "center 30%",
      },
    ],
  },
  {
    id: "acero",
    name: "Acero",
    kind: "receta",
    shots: [
      {
        src: "/armazones/acero.webp",
        alt: "Dos armazones de metal, uno verde agua y otro azul",
        position: "center 48%",
      },
    ],
  },
  {
    id: "chico",
    name: "Chico",
    kind: "sol",
    shots: [
      {
        src: "/armazones/chico.webp",
        alt: "Anteojos de sol chicos, de marco dorado",
        position: "center 32%",
      },
    ],
  },
  {
    id: "rosado",
    name: "Rosado",
    kind: "receta",
    shots: [
      {
        src: "/armazones/rosado.webp",
        alt: "Armazón grande color rosa, de marco fino",
        position: "center 24%",
      },
    ],
  },
  {
    id: "doble",
    name: "Doble",
    kind: "clip",
    shots: [
      {
        src: "/armazones/doble.webp",
        alt: "Anteojos de sol negros sobre un armazón de metal",
        position: "center 40%",
      },
    ],
  },
  {
    id: "conductor",
    name: "Conductor",
    kind: "sol",
    shots: [
      {
        src: "/armazones/conductor.webp",
        alt: "Anteojos de sol con lentes ámbar, puestos en el auto",
        position: "center 32%",
      },
    ],
  },
  {
    id: "agua",
    name: "Verde agua",
    kind: "receta",
    shots: [
      {
        src: "/armazones/agua.webp",
        alt: "Armazón de metal color verde agua",
        position: "center 48%",
      },
    ],
  },
  {
    id: "azul",
    name: "Azul espejado",
    kind: "sol",
    shots: [
      {
        src: "/armazones/azul.webp",
        alt: "Anteojos de sol con lentes azules espejadas, en el local",
        position: "center 28%",
      },
    ],
  },
  {
    id: "redondo",
    name: "Redondo",
    kind: "receta",
    shots: [
      {
        src: "/armazones/redondo.webp",
        alt: "Armazón redondo negro, sostenido con la mano",
        position: "center 42%",
      },
    ],
  },
  {
    id: "rojo",
    name: "Rojo",
    kind: "sol",
    shots: [
      {
        src: "/armazones/rojo-1.webp",
        alt: "Anteojos de sol negros con lentes rojos, de costado",
        position: "center 55%",
      },
      {
        src: "/armazones/rojo-2.webp",
        alt: "Los mismos anteojos de sol con lentes rojos, desde arriba",
        position: "center 48%",
      },
    ],
  },
  {
    id: "gasoil-metal",
    name: "Gasoil Metal (Lima)",
    kind: "receta",
    shots: [
      {
        src: "/armazones/lima-1.webp",
        alt: "Armazón Gasoil de metal gris, con patillas lima",
        position: "center 55%",
      },
      {
        src: "/armazones/lima-2.webp",
        alt: "El mismo Gasoil Metal lima, más de cerca",
        position: "center 52%",
      },
    ],
  },
  {
    id: "usual",
    name: "Usual",
    kind: "receta",
    shots: [
      {
        src: "/armazones/marino.webp",
        alt: "Armazón Usual azul marino, de acetato, con forma redondeada",
        position: "center 55%",
      },
    ],
  },
  {
    id: "puente",
    name: "Puente (Señal)",
    kind: "receta",
    shots: [
      {
        src: "/armazones/puente-1.webp",
        alt: "Dos armazones Señal con doble puente, uno negro y uno gris",
        position: "center 58%",
      },
      {
        src: "/armazones/puente-2.webp",
        alt: "Los mismos armazones Señal de doble puente, desde otro ángulo",
        position: "center 55%",
      },
    ],
  },
  {
    id: "gasoil-transparente",
    name: "Gasoil Transparente",
    kind: "receta",
    shots: [
      {
        src: "/armazones/lila.webp",
        alt: "Armazón Gasoil transparente, color lila",
        position: "center 55%",
      },
    ],
  },
  {
    id: "carey-ojito",
    name: "Carey",
    kind: "receta",
    shots: [
      {
        src: "/armazones/carey-ojito.webp",
        alt: "Armazón carey con forma de ojito",
        position: "center 55%",
      },
    ],
  },
  {
    id: "beige",
    name: "Beige",
    kind: "receta",
    shots: [
      {
        src: "/armazones/beige-1.webp",
        alt: "Armazón beige con forma de ojito, de costado",
        position: "center 55%",
      },
      {
        src: "/armazones/beige-2.webp",
        alt: "El mismo armazón beige, de frente",
        position: "center 62%",
      },
    ],
  },
  {
    id: "miel",
    name: "Miel",
    kind: "receta",
    shots: [
      {
        src: "/armazones/miel-1.webp",
        alt: "Armazón color miel con forma de ojito, de frente",
        position: "center 62%",
      },
      {
        src: "/armazones/miel-2.webp",
        alt: "El mismo armazón miel, de costado",
        position: "center 55%",
      },
    ],
  },
  {
    id: "nylon",
    name: "Nylon",
    kind: "receta",
    shots: [
      {
        src: "/armazones/nylon-1.webp",
        alt: "Dos armazones redondos de nylon, uno oscuro y uno traslúcido",
        position: "center 58%",
      },
      {
        src: "/armazones/nylon-2.webp",
        alt: "Los mismos armazones redondos, desde otro ángulo",
        position: "center 55%",
      },
    ],
  },
  {
    id: "al-aire",
    name: "Al aire",
    kind: "receta",
    shots: [
      {
        src: "/armazones/alaire-1.webp",
        alt: "Dos armazones al aire, de metal, uno plateado y uno oscuro",
        position: "center 55%",
      },
      {
        src: "/armazones/alaire-2.webp",
        alt: "Los mismos armazones al aire, desde otro ángulo",
        position: "center 52%",
      },
    ],
  },
  {
    id: "sol-redondo",
    name: "Sol redondo",
    kind: "sol",
    shots: [
      {
        src: "/armazones/sol-redondo.webp",
        alt: "Anteojos de sol redondos, de metal negro",
        position: "center 55%",
      },
    ],
  },
  {
    id: "clip-carey",
    name: "Clip carey",
    kind: "clip",
    shots: [
      {
        src: "/armazones/polarizado-1.webp",
        alt: "Clip carey: armazón de receta y sol polarizado, juntos",
        position: "center 62%",
      },
      {
        src: "/armazones/polarizado-2.webp",
        alt: "El clip de sol carey polarizado, de costado",
        position: "center 55%",
      },
    ],
  },
  {
    id: "clip-tira",
    name: "Clip con tira",
    kind: "clip",
    shots: [
      {
        src: "/armazones/clip-tira-1.webp",
        alt: "Clip de receta y sol, negro, con las patillas abiertas",
        position: "center 62%",
      },
      {
        src: "/armazones/clip-tira-2.webp",
        alt: "El mismo clip, con el sol separado del armazón",
        position: "center 50%",
      },
      {
        src: "/armazones/clip-tira-3.webp",
        alt: "La tira del clip, abrochada atrás para usarlo al hacer deporte",
        position: "center 32%",
      },
      {
        src: "/armazones/clip-tira-4.webp",
        alt: "El clip armado, de costado",
        position: "center 40%",
      },
      {
        src: "/armazones/clip-tira-5.webp",
        alt: "El clip armado, en tres cuartos",
        position: "center 48%",
      },
    ],
  },
];
