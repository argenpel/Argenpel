import { companyLocation } from "@/data/company";

const mapHeightClassName = "h-[clamp(20rem,45vw,30rem)]";

export function LocationMap() {
  return (
    <section
      aria-labelledby="location-map-heading"
      className={`relative isolate overflow-hidden bg-[#bbbbbb] ${mapHeightClassName}`}
    >
      <h2 className="sr-only" id="location-map-heading">
        Ubicación de {companyLocation.name}
      </h2>

      <iframe
        allowFullScreen
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        src={companyLocation.embedUrl}
        title={`Mapa de ubicación de ${companyLocation.name}`}
      />
    </section>
  );
}
