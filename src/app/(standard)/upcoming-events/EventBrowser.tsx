'use client';

import { useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import EventCard from './EventCard';
import { ALL_CATEGORIES, type EventItem } from './eventHelpers';

interface EventBrowserProps {
    events: EventItem[];
    categories: string[];
}

const EventBrowser = ({ events, categories }: EventBrowserProps) => {
    const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES);

    const counts = useMemo(() => {
        const map: Record<string, number> = { [ALL_CATEGORIES]: events.length };

        for (const event of events) {
            if (!event.type) continue;
            map[event.type] = (map[event.type] ?? 0) + 1;
        }

        return map;
    }, [events]);

    const tabs = [ALL_CATEGORIES, ...categories];

    const visibleEvents =
        activeCategory === ALL_CATEGORIES
            ? events
            : events.filter((event) => event.type === activeCategory);

    const resultLabel =
        activeCategory === ALL_CATEGORIES
            ? `${events.length} upcoming event${events.length === 1 ? '' : 's'}`
            : `${visibleEvents.length} of ${events.length} events`;

    return (
        <div>
            <div className='flex items-end justify-between gap-6 border-b border-[#051F12]/10'>
                <nav
                    className='-mx-1 flex gap-4 overflow-x-auto px-1 pt-2 sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
                    aria-label='Filter events by category'
                >
                    {tabs.map((tab) => {
                        const isActive = tab === activeCategory;

                        return (
                            <button
                                key={tab}
                                type='button'
                                aria-pressed={isActive}
                                onClick={() => setActiveCategory(tab)}
                                className={cn(
                                    'relative shrink-0 pb-3 pt-1 font-inter text-sm whitespace-nowrap transition-colors outline-none',
                                    'focus-visible:rounded-t-lg focus-visible:ring-2 focus-visible:ring-[#00C979]/50',
                                    isActive
                                        ? 'font-semibold text-[#003006]'
                                        : 'font-medium text-[#051F12]/50 hover:text-[#051F12]',
                                )}
                            >
                                {tab}
                                <sup
                                    className={cn(
                                        'ml-1 text-[10px] font-bold tabular-nums',
                                        isActive ? 'text-[#00C979]' : 'text-[#051F12]/35',
                                    )}
                                >
                                    {counts[tab] ?? 0}
                                </sup>
                                {isActive && (
                                    <span
                                        className='absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-[#00C979]'
                                        aria-hidden
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>

                <p className='hidden shrink-0 pb-3 font-inter text-xs font-medium text-[#051F12]/45 lg:block'>
                    {resultLabel}
                </p>
            </div>

            {visibleEvents.length > 0 ? (
                <div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {visibleEvents.map((event) => (
                        <EventCard key={event._id || event.title} event={event} />
                    ))}
                </div>
            ) : (
                <div className='mt-8 rounded-2xl border border-dashed border-[#051F12]/15 bg-white/70 px-6 py-16 text-center'>
                    <Calendar className='mx-auto size-9 text-[#00C979]' aria-hidden />
                    <h3 className='mt-4 font-hanken_Grotesk text-lg font-bold text-[#051F12]'>
                        {events.length === 0
                            ? 'No upcoming events right now'
                            : `No ${activeCategory} events scheduled yet`}
                    </h3>
                    <p className='mx-auto mt-1.5 max-w-sm font-inter text-sm leading-relaxed text-[#051F12]/55'>
                        {events.length === 0
                            ? 'New community drives are published regularly — check back soon.'
                            : 'Try another category — new drives are added every week.'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default EventBrowser;
