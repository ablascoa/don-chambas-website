type Tone = "dark" | "light";

/**
 * Watermark de marca (wordmark "Don Chambas" en mosaico, baja opacidad) para
 * usarse como fondo sutil de una sección.
 *
 * Uso: marca el contenedor con `has-watermark` y mete <Watermark/> como primer
 * hijo. El contenido (`.wrap`) queda por encima automáticamente.
 *   <section className="alt has-watermark">
 *     <Watermark tone="light" />
 *     <div className="wrap"> … </div>
 *   </section>
 *
 * tone="dark"  → tile blanco, para fondos navy/oscuros.
 * tone="light" → tile navy, para fondos claros.
 */
export default function Watermark({
  tone = "light",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={`watermark watermark--${tone}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    />
  );
}
