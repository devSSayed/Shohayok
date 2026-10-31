import Banner from "@/components/banner";
import ImpactStats from "@/components/ImpactStats";
import NewsLetterSec from "@/components/NewsLetterSec";
import PlatformHighlights from "@/components/PlatformHighlights";


export default function Home() {
  return (
    <div>
      <Banner />
      <ImpactStats />
      <PlatformHighlights />
      <NewsLetterSec />
    </div>
  );
}
