import Navbar from '@/components/NavCompo/Navbar';
import Footer from '@/components/Footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar variant="transparent" />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}