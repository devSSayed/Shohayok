import { BellRing, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: BellRing,
        title: 'Instant Event Alerts',
        description:
            'Get notified immediately the moment a new winter drive, food distribution, or relief event is launched near your area.',
        chip: 'bg-violet-500/10 text-violet-600 ring-violet-500/20',
        hover: 'hover:border-violet-500/40',
    },
    {
        icon: Clock,
        title: 'Live Upcoming Feed',
        description:
            'Browse a live, auto-updating feed of active and upcoming community drives scheduled across Mirpur, Dhanmondi, and Dhaka.',
        chip: 'bg-emerald-500/10 text-emerald-600 ring-emerald-500/20',
        hover: 'hover:border-emerald-500/40',
    },
    {
        icon: HeartHandshake,
        title: 'Open Community Hosting',
        description:
            'Anyone can become a host-empowering everyday citizens to organize cleanups, aid drives, and neighborhood fundraisers in minutes.',
        chip: 'bg-teal-500/10 text-teal-600 ring-teal-500/20',
        hover: 'hover:border-teal-500/40',
    },
    {
        icon: ShieldCheck,
        title: 'Organizer Authorization',
        description:
            'Retain full security over your drives with protected creator controls ensuring only authorized hosts can post event updates and manage details.',
        chip: 'bg-amber-500/10 text-amber-600 ring-amber-500/20',
        hover: 'hover:border-amber-500/40',
    },
];

const PlatformHighlights = () => {
    return (
        <section className='px-5 py-16 sm:py-20'>
            <div className='mx-auto max-w-6xl text-center'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 font-inter'>
                    Platform Highlights
                </p>
                <h2 className='mt-3 text-2xl sm:text-3xl lg:text-4xl font-inter font-bold'>
                    Built for Real-Time Community Action
                </h2>
                <p className='mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground font-inter '>
                    Stay connected, discover active drives, and launch local
                    initiatives effortlessly.
                </p>

                <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left'>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-background p-5 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${feature.hover}`}
                            >
                                <span className='pointer-events-none absolute -top-2 right-3 select-none font-inter text-5xl sm:text-6xl font-extrabold text-foreground/5'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span
                                    className={`inline-flex size-12 items-center justify-center rounded-2xl ring-1 ${feature.chip}`}
                                >
                                    <Icon className='size-5' />
                                </span>

                                <h3 className='mt-5 text-base sm:text-lg font-inter font-semibold'>
                                    {feature.title}
                                </h3>
                                <p className='mt-2 text-xs font-inter sm:text-sm leading-relaxed text-muted-foreground'>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PlatformHighlights;
