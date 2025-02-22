import { CelebrateSection } from "./_components/celebrate-section";
import { HeroBanner } from "./_components/hero-section";
import { InfiniteMarquee } from "./_components/marquee-section";
import { NewsroomSection } from "./_components/newsroom-section";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <InfiniteMarquee />
      <CelebrateSection />
      <NewsroomSection />
    </main>
  );
}
