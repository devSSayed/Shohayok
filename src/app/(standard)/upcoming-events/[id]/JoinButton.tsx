'use client';

import { UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';
import { EventItem } from '../eventHelpers';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

/** Same toast styling the login page uses. */
const TOAST_STYLE = {
    background: '#F6FFDF',
    color: '#051F12',
    fontFamily: 'Inter, sans-serif',
};

const JoinButton = ({ eventData }: { eventData: EventItem }) => {
    const router = useRouter();

    const { data: session } = authClient.useSession();

    const handleJoin = async () => {
        const { _id, ...restEventData } = eventData;

        const joinedEventData = {
            ...restEventData,
            eventId: _id,
            joinedBy: {
                name: session?.user.name,
                email: session?.user.email,
                joinedId: session?.user.id,
            },
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/join-event`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(joinedEventData)
        })

        if (!res.ok) {
            toast.error(`Failed to join`, { style: TOAST_STYLE });
            return;
        }

        toast.success('You have joined this event!', { style: TOAST_STYLE });

        router.refresh();
    };

    return (
        <button
            type='button'
            onClick={handleJoin}
            className='inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C979] px-4 py-3.5 text-sm font-semibold text-[#003006] 
            transition-colors duration-300 hover:bg-[#003006] hover:text-[#F6FFDF] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
        >
            <UserPlus className='size-4 shrink-0' aria-hidden />
            Join Event
        </button>
    );
};

export default JoinButton;
