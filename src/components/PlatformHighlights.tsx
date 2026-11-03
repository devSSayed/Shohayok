import { BellRing, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: BellRing,
        title: 'Instant Event Alerts',
        description:
            'Get notified immediately the moment a new winter drive, food distribution, or relief event is launched near your area.',
        hover: 'hover:border-violet-500/40',
    },
    {
        icon: Clock,
        title: 'Live Upcoming Feed',
        description:
            'Browse a live, auto-updating feed of active and upcoming community drives scheduled across Mirpur, Dhanmondi, and Dhaka.',
        hover: 'hover:border-emerald-500/40',
    },
    {
        icon: HeartHandshake,
        title: 'Open Community Hosting',
        description:
            'Anyone can become a host-empowering everyday citizens to organize cleanups, aid drives, and neighborhood fundraisers in minutes.',
        hover: 'hover:border-teal-500/40',
    },
    {
        icon: ShieldCheck,
        title: 'Organizer Authorization',
        description:
            'Retain full security over your drives with protected creator controls ensuring only authorized hosts can post event updates and manage details.',
        hover: 'hover:border-amber-500/40',
    },
];

const PlatformHighlights = () => {
    return (
        <section className='px-5 py-16 sm:py-20 bg-[#F6FFDF]'>
            <div className='mx-auto max-w-6xl text-center flex flex-col items-center justify-center gap-3 sm:gap-6'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] border-2 border-[#00C979] py-1.5 px-2.5 rounded-[10px] text-[#003006] font-inter'>
                    Platform Highlights
                </p>
                <div className='space-y-3'>
                    <h2 className='mt-3 text-2xl sm:text-3xl lg:text-4xl font-inter font-bold text-[#003006]'>
                        Built for Real-Time Community Action
                    </h2>
                    <p className='mx-auto mt-4 max-w-2xl text-sm sm:text-[17px] text-muted-foreground font-inter '>
                        Stay connected, discover active drives, and launch local
                        initiatives effortlessly.
                    </p>
                </div>


                <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 text-left'>
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className={`group relative overflow-hidden rounded-3xl border border-[#003006] bg-[#051F12] backdrop-blur-2xl  p-5 sm:p-7 shadow-sm transition-all
                                     duration-300 hover:-translate-y-1 hover:shadow-lg`}
                            >
                                <span className='pointer-events-none absolute -top-2 right-3 select-none font-inter text-5xl sm:text-6xl font-extrabold text-[#F6FFDF]/10'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <span
                                    className={`inline-flex size-12 items-center justify-center `}
                                >
                                    <Icon className='size-24 text-[#F6FFDF]' />
                                </span>

                                <h3 className='mt-5 text-xl sm:text-lg font-inter font-semibold text-[#F6FFDF]'>
                                    {feature.title}
                                </h3>
                                <p className='mt-2 text-[14px] text-[#F6FFDF]/80 font-inter sm:text-sm leading-relaxed'>
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
