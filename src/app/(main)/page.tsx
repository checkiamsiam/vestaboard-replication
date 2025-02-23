import { CelebrateSection } from "./_components/celebrate-section";
import ComparisonSection from "./_components/comparison-section";
import { HeroBanner } from "./_components/hero-section";
import { InspireSection } from "./_components/inspire-section";
import { InfiniteMarquee } from "./_components/marquee-section";
import { NewsroomSection } from "./_components/newsroom-section";
import { SpecSheetForm } from "./_components/spec-sheet-form";
import { VestaboardWhiteSection } from "./_components/vestaboard-white-section";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <InfiniteMarquee />
      <CelebrateSection />
      <VestaboardWhiteSection />
      <InspireSection />
      <SpecSheetForm />
      <ComparisonSection />
      <NewsroomSection />
    </main>
  );
}
