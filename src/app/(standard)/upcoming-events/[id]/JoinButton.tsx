'use client';

import { useState } from 'react';
import { CheckCircle2, UserPlus } from 'lucide-react';
import toast from 'react-hot-toast';

/** Same toast styling the login page uses. */
const TOAST_STYLE = {
    background: '#F6FFDF',
    color: '#051F12',
    fontFamily: 'Inter, sans-serif',
};

const JoinButton = () => {
    const [joined, setJoined] = useState(false);

    const handleToggle = () => {
        const nowJoined = !joined;
        setJoined(nowJoined);

        toast.success(
            nowJoined ? 'You have joined this event!' : 'You have left this event',
            { style: TOAST_STYLE },
        );
    };

    return (
        <button
            type='button'
            onClick={handleToggle}
            aria-pressed={joined}
            className={
                joined
                    ? 'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#003006] px-4 py-3.5 text-sm font-semibold text-[#F6FFDF] transition-colors duration-300 hover:bg-[#00C979] hover:text-[#003006] focus-visible:ring-2 focus-visible:ring-[#00C979]/40 focus-visible:outline-none'
                    : 'inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C979] px-4 py-3.5 text-sm font-semibold text-[#003006] transition-colors duration-300 hover:bg-[#003006] hover:text-[#F6FFDF] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
            }
        >
            {joined ? (
                <CheckCircle2 className='size-4 shrink-0' aria-hidden />
            ) : (
                <UserPlus className='size-4 shrink-0' aria-hidden />
            )}
            {joined ? 'Joined (Click to Leave)' : 'Join Event'}
        </button>
    );
};

export default JoinButton;
