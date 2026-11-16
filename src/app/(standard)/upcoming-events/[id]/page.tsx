import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Mail, MapPin, Tag } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RxAvatar } from 'react-icons/rx';
import { formatEventDate, type EventItem } from '../eventHelpers';
import JoinButton from './JoinButton';
import LeaveEvent from '@/components/LeaveEvent';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';

const VOLUNTEER_GUIDELINES = [
    'Be punctual and make sure you\'re prepared before each volunteer drive begins.',
    'Carry your own essentials, including drinking water and any required personal items.',
    'Work responsibly, stay with your assigned team, and coordinate with the organizers.',
    'Be mindful of the community, respect local customs, and leave the area clean after every activity.',
];

const EventDetailsPage = ({ params }: PageProps<'/upcoming-events/[id]'>) => {
    return (
        <div className='min-h-screen pt-10 pb-20 bg-[#FAFFEE] font-inter'>
            <Suspense fallback={<EventDetailSkeleton />}>
                <EventDetail params={params} />
            </Suspense>
        </div>
    );
};

/** Shown while the event is being fetched. */
const EventDetailSkeleton = () => (
    <div className='animate-pulse'>
        <div className='mx-auto max-w-7xl px-5 pt-5'>
            <div className='h-65 w-full rounded-2xl bg-[#051F12]/10 sm:h-95 lg:h-110' />
        </div>
        <div className='mx-auto max-w-7xl px-5 py-8'>
            <div className='h-4 w-44 rounded bg-[#051F12]/10' />
            <div className='mt-3 h-9 w-2/3 rounded bg-[#051F12]/10' />
            <div className='mt-4 h-4 w-56 rounded bg-[#051F12]/10' />
            <div className='mt-7 h-4 w-full rounded bg-[#051F12]/10' />
            <div className='mt-2.5 h-4 w-5/6 rounded bg-[#051F12]/10' />
        </div>
    </div>
);

const EventDetail = async ({
    params,
}: Pick<PageProps<'/upcoming-events/[id]'>, 'params'>) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event/${id}`);

    if (!res.ok) {
        notFound();
    }

    const event: EventItem = await res.json();
    const organizer = event.createdBy;

    /* Viewer state — inside <Suspense> as required for headers()/session reads. */
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const viewerEmail = session?.user?.email;
    const isCreator = Boolean(viewerEmail && event.createdBy?.email === viewerEmail);

    /* Has this viewer joined? Join records carry the event's id as `eventId`. */
    let joinId: string | null = null;

    if (viewerEmail && !isCreator) {
        const joinRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/join-event/${viewerEmail}`);
        const joinData = joinRes.ok ? await joinRes.json() : [];

        if (Array.isArray(joinData)) {
            const match = joinData.find(
                (join: { _id: string; eventId?: string }) => join.eventId === event._id
            );
            joinId = match?._id ?? null;
        }
    }

    return (
        <>
            {/* ── Big cover image ── */}
            <div className='mx-auto max-w-7xl px-5 pt-5'>

                <Link
                    href='/upcoming-events'
                    className='mb-4 inline-flex items-center gap-1.5 text-sm text-[#051F12]/60 transition-colors hover:text-[#051F12]'
                >
                    <ArrowLeft className='size-4' aria-hidden />
                    Back to Upcoming Events
                </Link>

                <div className='relative h-65 w-full overflow-hidden rounded-2xl bg-[#051F12]/10 sm:h-95 lg:h-110'>
                    {event.thumbnail ? (
                        <Image
                            src={event.thumbnail}
                            alt=''
                            fill
                            priority
                            sizes='(max-width: 1280px) 100vw, 1240px'
                            className='object-cover'
                        />
                    ) : (
                        <div className='flex h-full w-full items-center justify-center bg-[#003006]'>
                            <Tag className='size-10 text-[#00C979]' aria-hidden />
                        </div>
                    )}
                </div>
            </div>

            {/* ── Left: location, name, type + date, description, guidelines ──
                ── Right: organizer, join button ── */}
            <div className='mx-auto grid max-w-7xl gap-10 px-5 py-9 lg:grid-cols-[minmax(0,1fr)_320px]'>
                <div>
                    <div className='flex items-center gap-1.5 text-sm text-[#051F12]/60'>
                        <MapPin className='size-4 shrink-0 text-[#00C979]' aria-hidden />
                        <span>{event.location}</span>
                    </div>

                    <h1 className='mt-2 font-hanken_Grotesk text-3xl font-bold tracking-tight text-[#051F12] sm:text-4xl'>
                        {event.title}
                    </h1>

                    {/* event type + date */}
                    <div className='mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[15px] font-medium text-[#051F12]'>
                        <span className='flex items-center gap-1.5'>
                            <Tag className='size-4 shrink-0 text-[#00C979]' aria-hidden />
                            {event.type || 'Event'}
                        </span>
                        <span className='flex items-center gap-1.5'>
                            <Calendar className='size-4 shrink-0 text-[#00C979]' aria-hidden />
                            {formatEventDate(event.date)}
                        </span>
                    </div>

                    {/* description */}
                    <p className='mt-7 text-[15px] leading-relaxed text-[#051F12]/70'>
                        {event.description}
                    </p>

                    {/* volunteer guidelines */}
                    <div className='mt-9'>
                        <h2 className='text-xs font-semibold tracking-[0.14em] text-[#051F12]/60 uppercase'>
                            SHOHAYOK VOLUNTEER RULES
                        </h2>

                        <ul className='mt-4 space-y-3'>
                            {VOLUNTEER_GUIDELINES.map((guideline) => (
                                <li
                                    key={guideline}
                                    className='flex items-start gap-2.5 text-sm leading-relaxed text-[#051F12]/70'
                                >
                                    <span
                                        className='mt-1.5 size-1.5 shrink-0 rounded-full bg-[#00C979]'
                                        aria-hidden
                                    />
                                    {guideline}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* organizer */}
                <aside className='space-y-4'>
                    <div className='rounded-2xl border border-[#051F12]/10 bg-white p-5'>
                        <h2 className='text-xs font-semibold tracking-[0.14em] text-[#051F12]/60 uppercase'>
                            Initiative Organizer
                        </h2>

                        <div className='mt-4 flex items-center gap-3'>
                            <Avatar className='size-11 shrink-0'>
                                <AvatarImage
                                    src={organizer?.image ?? undefined}
                                    alt={organizer?.email ?? 'Organizer'}
                                />
                                <AvatarFallback className='bg-[#00C979]/20 text-[#003006]'>
                                    <RxAvatar className='size-11' />
                                </AvatarFallback>
                            </Avatar>

                            <div className='min-w-0'>
                                <p
                                    className='truncate text-sm font-bold text-[#051F12]'
                                    title={organizer?.name}
                                >
                                    {organizer?.name || 'Community volunteer'}
                                </p>

                                {organizer?.email && (
                                    <p className='mt-0.5 flex items-center gap-1.5 text-[13px] text-[#051F12]/60'>
                                        <Mail className='size-3.5 shrink-0 text-[#00C979]' aria-hidden />
                                        <span className='truncate' title={organizer.email}>
                                            {organizer.email}
                                        </span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* join / leave — hidden entirely when the viewer created this event */}
                    {!isCreator &&
                        (joinId ? (
                            <LeaveEvent joinId={joinId} label="Leave Event" variant="detail" />
                        ) : (
                            <JoinButton eventData={event} />
                        ))}
                </aside>
            </div>
        </>
    );
};

export default EventDetailsPage;
