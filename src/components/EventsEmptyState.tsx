import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

interface EventsEmptyStateProps {
    title: string;
    description: string;
}

/** Fallback for event lists with nothing active left to show (empty or all expired). */
const EventsEmptyState = ({ title, description }: EventsEmptyStateProps) => {
    return (
        <div className='rounded-2xl border border-dashed border-[#051F12]/15 bg-white/70 px-6 py-16 text-center'>
            <Calendar className='mx-auto size-9 text-[#00C979]' aria-hidden />
            <h3 className='mt-4 font-hanken_Grotesk text-lg font-bold text-[#051F12]'>
                {title}
            </h3>
            <p className='mx-auto mt-1.5 max-w-sm font-inter text-sm leading-relaxed text-[#051F12]/55'>
                {description}
            </p>
            <Link
                href='/'
                className='mt-6 inline-flex items-center gap-2 rounded-xl bg-[#00C979] px-5 py-3 font-inter text-sm font-semibold text-[#003006] transition-colors duration-300 hover:bg-[#003006] hover:text-[#F6FFDF] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
            >
                Go to Homepage
                <ArrowRight className='size-4' aria-hidden />
            </Link>
        </div>
    );
};

export default EventsEmptyState;
