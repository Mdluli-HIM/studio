import { Suspense } from "react";
import { WorkHero } from "@/components/work/work-hero";
import { WorkArchive } from "@/components/work/work-archive";
import { WorkClosing } from "@/components/work/work-closing";

function WorkArchiveFallback() {
  return (
    <section className="bg-black">
      <div className="border-b border-white/10 py-6 md:py-8">
        <div className="container-luxury">
          <div className="flex flex-wrap gap-3">
            {[
              "All",
              "Photography",
              "Film",
              "Fashion",
              "Promotional",
              "Portrait",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-10 md:py-14">
        <div className="container-luxury">
          <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Loading archive
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              Please wait
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <Suspense fallback={<WorkArchiveFallback />}>
        <WorkArchive />
      </Suspense>
      <WorkClosing />
    </>
  );
}
