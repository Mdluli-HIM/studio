const services = ["Photography", "Film", "Fashion", "Promotional"];

export function ServicesPreview() {
  return (
    <section className="border-t border-white/10 py-20 md:py-32">
      <div className="container-luxury">
        <p className="section-label mb-8">Services</p>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service}
              className="border-b border-white/10 pb-3 text-4xl tracking-[-0.05em] text-zinc-200 md:text-7xl"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
