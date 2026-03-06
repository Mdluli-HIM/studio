import { WorkHero } from "@/components/work/work-hero";
import { WorkArchive } from "@/components/work/work-archive";
import { WorkClosing } from "@/components/work/work-closing";

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkArchive />
      <WorkClosing />
    </>
  );
}
