export default function ContactPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-luxury grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="section-label mb-5">Contact</p>

            <div className="overflow-hidden">
              <h1 className="text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[8rem]">
                START A
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-500 md:text-[8rem]">
                PROJECT
              </h1>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              For campaigns, fashion stories, promotional visuals, and cinematic
              portraiture. Let’s discuss the next project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="container-luxury grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-label">Enquiries</p>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-white/10">
              <div className="flex items-center justify-between gap-6 border-b border-white/10 py-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                  Email
                </span>
                <a
                  href="mailto:hello@highendvisuals.com"
                  className="text-sm text-zinc-200 transition hover:text-white md:text-base"
                >
                  hello@highendvisuals.com
                </a>
              </div>

              <div className="flex items-center justify-between gap-6 border-b border-white/10 py-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                  Instagram
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-200 transition hover:text-white md:text-base"
                >
                  @highendvisuals
                </a>
              </div>

              <div className="flex items-center justify-between gap-6 border-b border-white/10 py-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                  Vimeo
                </span>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-200 transition hover:text-white md:text-base"
                >
                  vimeo.com/highendvisuals
                </a>
              </div>

              <div className="flex items-center justify-between gap-6 border-b border-white/10 py-5">
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                  Location
                </span>
                <span className="text-sm text-zinc-200 md:text-base">
                  South Africa / Available worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
