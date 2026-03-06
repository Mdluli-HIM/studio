import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/10 bg-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-luxury grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="section-label mb-5">About</p>

            <div className="overflow-hidden">
              <h1 className="text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[8rem]">
                STUDIO
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-500 md:text-[8rem]">
                PROFILE
              </h1>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              A high-end photography and motion studio creating cinematic,
              editorial, and promotional visual work with precision and
              atmosphere.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black py-16 md:py-24">
        <div className="container-luxury grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-label">Philosophy</p>
          </div>

          <div className="md:col-span-8">
            <p className="max-w-4xl text-3xl leading-[1.05] tracking-[-0.05em] text-zinc-100 md:text-6xl">
              We create visual worlds shaped by mood, elegance, and restraint.
            </p>

            <p className="mt-8 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
              Our work sits between fashion, portraiture, campaigns, and motion.
              We approach every project with an editorial eye, a cinematic sense
              of rhythm, and a commitment to making every frame feel
              intentional.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-black py-8 md:py-12">
        <div className="container-luxury overflow-hidden border border-white/10 bg-zinc-950">
          <div className="relative aspect-[16/9]">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop"
              alt="Studio portrait"
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-black py-16 md:py-24">
        <div className="container-luxury grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-label">What we do</p>
          </div>

          <div className="md:col-span-8">
            <div className="border-t border-white/10">
              {[
                "Editorial Photography",
                "Portrait Direction",
                "Campaign Visuals",
                "Promotional Film",
                "Creative Direction",
              ].map((item) => (
                <div
                  key={item}
                  className="border-b border-white/10 py-4 text-2xl tracking-[-0.04em] text-zinc-200 md:text-4xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
