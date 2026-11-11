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
                <div className=" items-start md:items-center flex flex-col md:flex-row justify-between gap-10 pb-12">

                    {/* Column 1: Brand & Tagline (4 cols) */}
                    <div className=" space-y-4">
                        <Image src={navLogo} alt="Shohayok Logo" className="w-32 " />

                        <p className="text-sm text-[#F6FFDF]/80 leading-relaxed max-w-xs">
                            A community-driven platform empowering citizens across Bangladesh to create, discover, and join local social development initiatives.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-[#F6FFDF]/80 pt-1">
                            <MapPin className="w-4 h-4 text-[#F6FFDF] shrink-0" />
                            <span>Dhaka, Bangladesh · Nationwide Reach</span>
                        </div>

                        <div className="inline-flex items-center whitespace-nowrap gap-1.5 px-3 py-1.5 rounded-full bg-[#00C979]/10 border border-[#00C979]/20 text-[#00C979] text-xs font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            100% Grassroots
                        </div>
                    </div>

                    {/* Column 2: Navigation Links (2 cols) */}
                    <div className=" space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#D8FF85]/80">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium">
                            <li>
                                <Link
                                    href="/events"
                                    className="text-[#F6FFDF] hover:text-[#D8FF85] transition-colors flex items-center gap-2"
                                >
                                    <Compass className="w-4 h-4 text-[#F6FFDF]/80" />
                                    Explore Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/create"
                                    className="text-[#F6FFDF] hover:text-[#D8FF85]  transition-colors flex items-center gap-2"
                                >
                                    <PlusCircle className="w-4 h-4 text-[#F6FFDF]/80" />
                                    Host an Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-events"
                                    className="text-[#F6FFDF] hover:text-[#D8FF85]  transition-colors flex items-center gap-2"
                                >
                                    <Calendar className="w-4 h-4 text-[#F6FFDF]/80" />
                                    My Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/joined"
                                    className="text-[#F6FFDF] hover:text-[#D8FF85]  transition-colors flex items-center gap-2"
                                >
                                    <UserCheck className="w-4 h-4 text-[#F6FFDF]/80" />
                                    Joined Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Platform Drives (3 cols) */}
                    <div className=" space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8FF85]/80">
                            Platform Drives
                        </h4>
                        <ul className="space-y-2.5 text-sm">
                            {[
                                "Winter & Clothing Relief",
                                "Food Security & Meal Sharing",
                                "Clean City & Recycling Drives",
                                "Tree Plantation & Ecology",
                                "Emergency Relief & Aid"
                            ].map((drive) => (
                                <li key={drive}>
                                    <div  className="group flex items-center gap-2.5 text-[#F6FFDF]/80 hover:text-[#D8FF85] transition-colors cursor-default">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 group-hover:scale-125 transition-all"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">{drive}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar Separator */}
                <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6FFDF]/80">
                    <p>© 2026 Shohayok. Built for community action and social impact.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-[#D8FF85] transition-colors">
                            Privacy Policy
                        </Link>
                        <span>·</span>
                        <Link href="#" className="hover:text-[#D8FF85] transition-colors">
                            Terms of Action
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;