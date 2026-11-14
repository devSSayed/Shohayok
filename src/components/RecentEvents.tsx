
import { ArrowRight, Calendar, MapPin, Tag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Image from 'next/image';
import { formatEventDate, isUpcoming, sortBySoonest } from '@/app/(standard)/upcoming-events/eventHelpers';
import { RxAvatar } from 'react-icons/rx';

interface EventOrganizer {
    name?: string;
    email?: string;
    image?: string | null;
    userId?: string;
}

interface EventItem {
    _id: string;
    title: string;
    type: string;
    date: string;
    location: string;
    thumbnail: string;
    description: string;
    createdBy?: EventOrganizer;
}

const RecentEvents = async () => {
    "use cache";

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/recentEvents`);

    if (!res.ok) {
        throw new Error(`Failed to load events (${res.status})`);
    }

    const rawData = await res.json()
    const events: EventItem[] = Array.isArray(rawData) ? rawData : [];

    const data = events.filter((event) => isUpcoming(event.date)).sort(sortBySoonest);


    return (
        <section className='px-5 py-16 sm:py-20 bg-[#FAFFEE]'>

            <div className=' mb-10'>
                <div className='mx-auto max-w-6xl px-5 pb-10 text-center sm:pt-14'>

                    <h1 className='mt-5 font-hanken_Grotesk text-4xl font-bold tracking-tight text-[#003006] sm:text-5xl'>
                       Recent Upcoming Events
                    </h1>

                    <p className='mx-auto mt-3.5 max-w-2xl text-sm font-inter leading-relaxed text-[#051F12]/60 sm:text-[15px]'>
                        Take a look at our 6 newest volunteer initiatives. To browse more active drives near you, visit the Upcoming Events page.
                    </p>
                </div>
            </div>

            <div className='max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map((event: EventItem) => {
                        return (
                            <div key={event._id || event.title} className='group flex flex-col overflow-hidden rounded-2xl border border-[#051F12]/10 font-inter bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00C979]/40 hover:shadow-[0_24px_40px_-24px_rgba(5,31,18,0.45)]'>
                                <div className='relative aspect-16/10 overflow-hidden bg-[#051F12]/10'>
                                    {event.thumbnail ? (
                                        <Image
                                            src={event.thumbnail}
                                            alt=''
                                            fill
                                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                            loading='lazy'
                                            decoding='async'
                                            className='object-cover transition-transform duration-500 group-hover:scale-105'
                                        />
                                    ) : (
                                        <div className='flex h-full w-full items-center justify-center bg-[#003006]'>
                                            <Tag className='size-9 text-[#00C979]' aria-hidden />
                                        </div>
                                    )}

                                    <span className='absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-[10px] bg-[#003006] px-2.5 py-1.5 text-[11px] font-inter font-semibold text-[#F6FFDF] shadow-lg'>
                                        <Tag className='size-3 shrink-0 text-[#00C979]' aria-hidden />
                                        <span className='truncate'>{event.type || 'Event'}</span>
                                    </span>
                                </div>

                                <div className='flex flex-1 flex-col p-5'>
                                    <h3
                                        className='line-clamp-2 font-hanken_Grotesk text-[17px] font-bold leading-snug text-[#051F12]'
                                        title={event.title}
                                    >
                                        {event.title}
                                    </h3>

                                    <div className='mt-2.5 flex items-center gap-1.5 text-[13px] text-[#051F12]/60'>
                                        <MapPin className='size-4 shrink-0 text-[#00C979]' aria-hidden />
                                        <span className='min-w-0 flex-1 truncate' title={event.location}>
                                            {event.location}
                                        </span>
                                        <span className='h-3.5 w-px shrink-0 bg-[#051F12]/15' aria-hidden />
                                        <Calendar className='size-3.5 shrink-0 text-[#00C979]' aria-hidden />
                                        <span className='shrink-0 text-[#051F12]/75'>
                                            {formatEventDate(event.date)}
                                        </span>
                                    </div>

                                    <p
                                        className='mt-3 line-clamp-2 text-sm leading-relaxed text-[#051F12]/55'
                                        title={event.description}
                                    >
                                        {event.description}
                                    </p>

                                    <div className='mt-auto'>
                                        <div className='mt-4 border-t border-[#051F12]/10 pt-3'>
                                            <div className='flex justify-between items-center gap-2'>
                                                <span className='shrink-0 text-[11px] font-semibold uppercase tracking-wide text-[#051F12]/45'>
                                                    Organized by
                                                </span>
                                                <div className='flex items-center gap-2'>
                                                    <span
                                                        className='min-w-0 flex-1 truncate text-xs font-medium text-[#051F12]/70'
                                                        title={event.createdBy?.email}
                                                    >
                                                        {event.createdBy?.name || 'Community volunteer'}
                                                    </span>

                                                    <Avatar className='size-7 shrink-0'>
                                                        <AvatarImage
                                                            src={event.createdBy?.image ?? undefined}
                                                            alt={event.createdBy?.email ?? 'Organizer'}
                                                        />
                                                        <AvatarFallback className='bg-[#00C979]/20 text-[#003006]'>
                                                            <RxAvatar className='size-7' />
                                                        </AvatarFallback>
                                                    </Avatar>

                                                </div>

                                            </div>
                                        </div>

                                        <Link
                                            href='/'
                                            className='mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C979] px-4 py-3 text-sm font-inter font-semibold text-[#003006] transition-colors duration-300 hover:bg-[#003006] hover:text-[#F6FFDF] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
                                        >
                                            View Event
                                            <ArrowRight
                                                className='size-4 transition-transform duration-300 group-hover:translate-x-1'
                                                aria-hidden
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </section>
    );
};

export default RecentEvents;