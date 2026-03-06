export default function ServicesPage() {
  const services = [
    {
      title: "Photography",
      text: "Editorial, campaign, portrait, and event imagery crafted with a premium visual language.",
    },
    {
      title: "Film",
      text: "Cinematic promotional videos, branded storytelling, and motion-led campaign work.",
    },
    {
      title: "Fashion",
      text: "Lookbooks, studio concepts, editorial styling direction, and fashion-forward visual production.",
    },
    {
      title: "Promotional",
      text: "Launch visuals, brand campaigns, and digital content designed for impact and consistency.",
    },
  ];

  return (
    <>
      <section className="border-b border-white/10 bg-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-luxury grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="section-label mb-5">Services</p>

            <div className="overflow-hidden">
              <h1 className="text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[8rem]">
                VISUAL
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-500 md:text-[8rem]">
                SERVICES
              </h1>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              A studio service offering built around image, motion, direction,
              and premium brand storytelling.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="container-luxury border-t border-white/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-4 border-b border-white/10 py-6 md:grid-cols-12 md:items-start md:py-8"
            >
              <div className="md:col-span-2">
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                  0{index + 1}
                </p>
              </div>

              <div className="md:col-span-4">
                <h2 className="text-3xl tracking-[-0.05em] text-white md:text-5xl">
                  {service.title}
                </h2>
              </div>

              <div className="md:col-span-6">
                <p className="max-w-xl text-sm leading-8 text-zinc-400 md:text-base">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
