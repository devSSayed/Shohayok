import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, Tag } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RxAvatar } from 'react-icons/rx';
import { formatEventDate, truncateWords, type EventItem } from './eventHelpers';
import Image from 'next/image';

const EventCard = ({ event }: { event: EventItem }) => {
    const organizer = event.createdBy;
    const location = truncateWords(event.location);

    return (
        <article className='group flex flex-col overflow-hidden rounded-2xl border border-[#051F12]/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#00C979]/40 hover:shadow-[0_24px_40px_-24px_rgba(5,31,18,0.45)]'>

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

                <span className='absolute left-3 top-3 inline-flex max-w-[calc(100%-1.5rem)] items-center gap-1.5 rounded-[10px] bg-[#003006] px-2.5 py-1.5 text-[11px] font-semibold text-[#F6FFDF] shadow-lg'>
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
                        {location}
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
                                    title={organizer?.email}
                                >
                                    {organizer?.name || 'Community volunteer'}
                                </span>

                                <Avatar className='size-7 shrink-0'>
                                    <AvatarImage
                                        src={organizer?.image ?? undefined}
                                        alt={organizer?.email ?? 'Organizer'}
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
                        className='mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C979] px-4 py-3 text-sm font-semibold text-[#003006] transition-colors duration-300 hover:bg-[#003006] hover:text-[#F6FFDF] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
                    >
                        View Event
                        <ArrowRight
                            className='size-4 transition-transform duration-300 group-hover:translate-x-1'
                            aria-hidden
                        />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default EventCard;
