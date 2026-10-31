import Link from 'next/link';
import {
    Heart,
    MapPin,
    Compass,
    PlusCircle,
    Calendar,
    UserCheck,
    Sparkles,
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-border/60 bg-background pt-14 pb-8 text-foreground font-inter">
            <div className="container mx-auto max-w-6xl px-5 xl:px-0">
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 align-middle items-center md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">

                    {/* Column 1: Brand & Tagline (4 cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-2">
                            {/* Brand Logo Icon */}
                            <div className="p-2 rounded-xl bg-primary text-primary-foreground shadow-sm">
                                <Heart className="w-5 h-5 fill-current" />
                            </div>
                            <span className="text-xl font-bold font-inter tracking-tight">
                                Shohayok
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            A community-driven platform empowering citizens across Bangladesh to create, discover, and join local social development initiatives.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-1">
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span>Dhaka, Bangladesh · Nationwide Reach</span>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links (2 cols) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm font-medium">
                            <li>
                                <Link
                                    href="/events"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Compass className="w-4 h-4 text-muted-foreground" />
                                    Explore Upcoming Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/create"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <PlusCircle className="w-4 h-4 text-muted-foreground" />
                                    Host an Event
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/my-events"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <Calendar className="w-4 h-4 text-muted-foreground" />
                                    My Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/joined"
                                    className="hover:text-primary transition-colors flex items-center gap-2"
                                >
                                    <UserCheck className="w-4 h-4 text-muted-foreground" />
                                    Joined Events
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Platform Drives (3 cols) */}
                    <div className="lg:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                            Platform Drives
                        </h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                Winter & Clothing Relief
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Food Security & Meal Sharing
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                Clean City & Recycling Drives
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                Tree Plantation & Ecology
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                Emergency Relief & Aid
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Mission Badge (2 cols) */}
                    <div className="lg:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                            Our Commitment
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                            Connecting compassionate individuals directly with authentic local needs.
                        </p>
                        <div className="inline-flex items-center whitespace-nowrap gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                            <Sparkles className="w-3.5 h-3.5" />
                            100% Grassroots
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Separator */}
                <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© 2026 Shohayok. Built for community action and social impact.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Privacy Policy
                        </Link>
                        <span>·</span>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            Terms of Action
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;