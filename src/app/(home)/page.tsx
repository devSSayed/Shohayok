import Banner from "@/components/banner";
import GallerySection from "@/components/GallerySection";
import ImpactStats from "@/components/ImpactStats";
import Navbar from "@/components/NavCompo/Navbar";
import NewsLetterSec from "@/components/NewsLetterSec";
import PlatformHighlights from "@/components/PlatformHighlights";
import RecentEvents from "@/components/RecentEvents";


export default function Home() {
  return (
    <div>
      <main className="relative w-full min-h-screen">
         <Navbar variant="transparent"/>
        <Banner />
      </main>
      
      <ImpactStats />
      <PlatformHighlights />
      <RecentEvents />
      <GallerySection />
      <NewsLetterSec />
    </div>
  );
}
