import Banner from "@/components/banner";
import ImpactStats from "@/components/ImpactStats";
import Navbar from "@/components/NavCompo/Navbar";
import NewsLetterSec from "@/components/NewsLetterSec";
import PlatformHighlights from "@/components/PlatformHighlights";


export default function Home() {
  return (
    <div>
      <main className="relative w-full min-h-screen">
         <Navbar variant="transparent"/>
        <Banner />
      </main>
      
      <ImpactStats />
      <PlatformHighlights />
      <NewsLetterSec />
    </div>
  );
}
