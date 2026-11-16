"use client";
import { LogOut } from 'lucide-react';
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { getTokenClient } from '@/lib/getTokenClient';

/** Same toast styling the login page uses. */
const TOAST_STYLE = {
    background: '#F6FFDF',
    color: '#051F12',
    fontFamily: 'Inter, sans-serif',
};

/** Compact red style used inside the joined-events card grid. */
const CARD_CLASSES =
    'inline-flex min-w-0 items-center justify-center gap-1 rounded-xl bg-red-50 px-4 py-5 text-[12px] font-semibold whitespace-nowrap text-red-600 transition-colors duration-300 hover:bg-red-100 focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:outline-none';

/** Detail-page style — same footprint as the Join Event button, solid red with page-colored text. */
const DETAIL_CLASSES =
    'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-6 text-sm font-semibold text-[#FAFFEE] transition-colors duration-300 hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:outline-none';

const LeaveEvent = ({
    joinId,
    label = 'Leave',
    variant = 'card',
}: {
    joinId: string;
    label?: string;
    variant?: 'card' | 'detail';
}) => {
    const router = useRouter();

    const handleLeaveEvent = async () => {

        const token = await getTokenClient()

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/join-event/${joinId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        if (!res.ok) {
            toast.error('Failed to leave the event', { style: TOAST_STYLE });
            return;
        }

        toast.success('You have left the event', { style: TOAST_STYLE });
        router.refresh();
    };

    const isDetail = variant === 'detail';

    return (
        <Button
            type='button'
            onClick={handleLeaveEvent}
            className={isDetail ? DETAIL_CLASSES : CARD_CLASSES}
        >
            <LogOut className={isDetail ? 'size-4 shrink-0' : 'size-3.5 shrink-0'} aria-hidden />
            {label}
        </Button>
    );
};

export default LeaveEvent;
