import { Suspense } from 'react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import EventCard from '../upcoming-events/EventCard';
import { isUpcoming, type EventItem } from '../upcoming-events/eventHelpers';
import EventsEmptyState from '@/components/EventsEmptyState';

const ManageEventsPage = () => {
    return (
        <div className='min-h-screen bg-[#FAFFEE] font-inter'>
            {/* Header — no "Create New Event" button */}
            <div className='border-b border-[#051F12]/10 flex flex-col items-center justify-center text-center'>
                <div className='mx-auto max-w-7xl px-5 pt-12 pb-9 '>
                    <span className='text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] border-2 border-[#00C979] py-1.5 px-2.5 rounded-[10px] text-[#003006] font-inter'>
                        Organizer Dashboard
                    </span>

                    <h1 className='mt-5 font-hanken_Grotesk text-4xl font-bold tracking-tight text-[#003006] sm:text-5xl'>
                        Manage My Events
                    </h1>

                    <p className='mt-3.5 max-w-2xl text-sm leading-relaxed text-[#051F12]/60 sm:text-[15px]'>
                        View, edit, and manage the social drives you have published. Only you have permission to edit or delete your created initiatives.
                    </p>
                </div>
            </div>

            {/* Session + my events stream in behind this boundary */}
            <div className='mx-auto w-full max-w-7xl px-5 pt-8 pb-20'>
                <Suspense fallback={<ManageEventsSkeleton />}>
                    <MyEventsGrid />
                </Suspense>
            </div>
        </div>
    );
};

/** Deterministic placeholder (no Date.now / Math.random) for the streaming fallback. */
const ManageEventsSkeleton = () => {
    return (
        <div aria-hidden='true' className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, index) => (
                <div
                    key={index}
                    className='overflow-hidden rounded-2xl border border-[#051F12]/10 bg-white'
                >
                    <div className='aspect-16/10 animate-pulse bg-[#051F12]/10' />
                    <div className='space-y-3 p-5'>
                        <div className='h-4 w-4/5 animate-pulse rounded bg-[#051F12]/10' />
                        <div className='h-3.5 w-3/5 animate-pulse rounded bg-[#051F12]/10' />
                        <div className='h-3 w-full animate-pulse rounded bg-[#051F12]/10' />
                        <div className='h-3 w-5/6 animate-pulse rounded bg-[#051F12]/10' />
                        <div className='grid grid-cols-[3fr_1fr_1fr] gap-2 border-t border-[#051F12]/10 pt-3'>
                            <div className='h-9 animate-pulse rounded-xl bg-[#051F12]/10' />
                            <div className='h-9 animate-pulse rounded-xl bg-[#051F12]/10' />
                            <div className='h-9 animate-pulse rounded-xl bg-[#051F12]/10' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

/** Session-dependent grid — sits behind Suspense so the header shell renders instantly. */
const MyEventsGrid = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const email = session?.user?.email;
    let myEvents: EventItem[] = [];

    if (email) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/myEvents/${email}`);
        const data = res.ok ? await res.json() : [];

        if (Array.isArray(data)) {
            myEvents = data;
        }
    }

    const active = myEvents.filter((event) => isUpcoming(event.date));

    if (active.length === 0) {
        return (
            <EventsEmptyState
                title="You haven't created any events yet"
                description='Publish a social drive and it will show up here for the community to join.'
            />
        );
    }

    return (
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {active.map((event) => (
                <EventCard key={event._id} event={event} manage />
            ))}
        </div>
    );
};

export default ManageEventsPage;
