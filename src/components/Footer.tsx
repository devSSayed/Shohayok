import navLogo from '@/assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin,
    Compass,
    PlusCircle,
    Calendar,
    UserCheck,
    Sparkles,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-border/60 bg-[#003006] pt-14 pb-8 text-foreground font-inter">
            <div className="container mx-auto max-w-6xl px-5 xl:px-0">
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 align-middle items-center md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">

                    {/* Column 1: Brand & Tagline (4 cols) */}
                    <div className="lg:col-span-4 space-y-4">
                       <Image src={navLogo} alt="Shohayok Logo" className="w-32 " />

                        <p className="text-sm text-[#F6FFDF]/80 leading-relaxed max-w-xs">
                            A community-driven platform empowering citizens across Bangladesh to create, discover, and join local social development initiatives.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-[#F6FFDF]/80 pt-1">
                            <MapPin className="w-4 h-4 text-[#F6FFDF] shrink-0" />
                            <span>Dhaka, Bangladesh · Nationwide Reach</span>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links (2 cols) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6FFDF]/80">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium">
                            <li>
                                <Link
                                    href="/events"
                                    className="text-[#F6FFDF] hover:text-[#00C979] transition-colors flex items-center gap-2"
                                >
                                    <Compass className="w-4 h-4 text-[#F6FFDF]/80" />
                                    Explore Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/create"
                                    className="text-[#F6FFDF] hover:text-[#00C979]  transition-colors flex items-center gap-2"
                                >
                                    <PlusCircle className="w-4 h-4 text-[#F6FFDF]/80" />
                                    Host an Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-events"
                                    className="text-[#F6FFDF] hover:text-[#00C979]  transition-colors flex items-center gap-2"
                                >
                                    <Calendar className="w-4 h-4 text-[#F6FFDF]/80" />
                                    My Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/joined"
                                    className="text-[#F6FFDF] hover:text-[#00C979]  transition-colors flex items-center gap-2"
                                >
                                    <UserCheck className="w-4 h-4 text-[#F6FFDF]/80" />
                                    Joined Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Platform Drives (3 cols) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6FFDF]/80">
                            Platform Drives
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2 text-[#F6FFDF]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C979]" />
                                Winter & Clothing Relief
                            </li>
                            <li className="flex items-center gap-2 text-[#F6FFDF]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C979]" />
                                Food Security & Meal Sharing
                            </li>
                            <li className="flex items-center gap-2 text-[#F6FFDF]   ">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C979]" />
                                Clean City & Recycling Drives
                            </li>
                            <li className="flex items-center gap-2 text-[#F6FFDF]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C979]" />
                                Tree Plantation & Ecology
                            </li>
                            <li className="flex items-center gap-2 text-[#F6FFDF]   ">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00C979]" />
                                Emergency Relief & Aid
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Mission Badge (2 cols) */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#F6FFDF]/80">
                            Our Commitment
                        </h4>
                        <p className="text-xs text-[#F6FFDF] leading-relaxed">
                            Connecting compassionate individuals directly with authentic local needs.
                        </p>
                        <div className="inline-flex items-center whitespace-nowrap gap-1.5 px-3 py-1.5 rounded-full bg-[#00C979]/10 border border-[#00C979]/20 text-[#00C979] text-xs font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            100% Grassroots
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Separator */}
                <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6FFDF]/80">
                    <p>© 2026 Shohayok. Built for community action and social impact.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-[#00C979] transition-colors">
                            Privacy Policy
                        </Link>
                        <span>·</span>
                        <Link href="#" className="hover:text-[#00C979] transition-colors">
                            Terms of Action
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;