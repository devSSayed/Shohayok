import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import EventCard from '../upcoming-events/EventCard';
import {
    isUpcoming,
    sortBySoonest,
    type EventItem,
} from '../upcoming-events/eventHelpers';
import EventsEmptyState from '@/components/EventsEmptyState';

/**
 * loading.tsx wraps this page in a Suspense boundary, so the session +
 * fetch below are safe to run directly here (Next docs: "move the data
 * fetching into page.js where loading.js can cover it").
 */
const JoinedEventsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const email = session?.user?.email;
    let joined: EventItem[] = [];

    if (email) {

        const jwtToken = await auth.api.getToken({
            headers: await headers()
        })

        const token = jwtToken?.token

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/join-event/${email}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        const data = res.ok ? await res.json() : [];

        if (Array.isArray(data)) {
            joined = data;
        }
    }

    const active = joined
        .filter((event) => isUpcoming(event.date))
        .sort(sortBySoonest);

    return (
        <div className='min-h-screen bg-[#FAFFEE] font-inter'>
            {/* Header — same shape as Manage My Events */}
            <div className='border-b border-[#051F12]/10 flex flex-col items-center justify-center text-center'>
                <div className='mx-auto max-w-7xl px-5 pt-12 pb-9 '>
                    <span className='text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] border-2 border-[#00C979] py-1.5 px-2.5 rounded-[10px] text-[#003006] font-inter'>
                        YOUR IMPACT JOURNEY
                    </span>

                    <h1 className='mt-5 font-hanken_Grotesk text-4xl font-bold tracking-tight text-[#003006] sm:text-5xl'>
                        Joined Events
                    </h1>

                    <p className='mt-3.5 max-w-2xl text-sm leading-relaxed text-[#051F12]/60 sm:text-[15px]'>
                        Keep track of every community initiative and social cause you have committed to supporting.
                    </p>
                </div>
            </div>

            <div className='mx-auto w-full max-w-7xl px-5 pt-8 pb-20'>
                {active.length === 0 ? (
                    <EventsEmptyState
                        title="You haven't joined any events yet"
                        description='Find a community initiative you care about and sign up—it will show up here.'
                    />
                ) : (
                    <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                        {active.map((event) => (
                            <EventCard key={event._id} event={event} joined />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default JoinedEventsPage;
