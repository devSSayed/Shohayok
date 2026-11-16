import { Suspense } from 'react';
import EventsGrid from './EventsGrid';
import EventsSkeleton from './EventsSkeleton';

const UpComingEvents = () => {
    return (
        <div className='min-h-screen bg-[#FAFFEE] font-inter'>
            {/* Page header — centered, no "Create Event" button */}
            <div className='border-b border-[#051F12]/10'>
                <div className='mx-auto max-w-6xl px-5 pt-12 pb-10 text-center sm:pt-14'>
                    <span className='text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] border-2 border-[#00C979] py-1.5 px-2.5 rounded-[10px] text-[#003006] font-inter'>
                        Future Shohayok Drives
                    </span>

                    <h1 className='mt-5 font-hanken_Grotesk text-4xl font-bold tracking-tight text-[#003006] sm:text-5xl'>
                        Upcoming Events
                    </h1>

                    <p className='mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-[#051F12]/60 sm:text-[15px]'>
                        Join hands with local organizers. Explore verified community initiatives happening soon <br /> and find where your support is needed most.
                    </p>
                </div>
            </div>

            {/* Category tabs + event grid stream in behind this boundary */}
            <div className='mx-auto w-full max-w-7xl px-5 pt-8 pb-20'>
                <Suspense fallback={<EventsSkeleton />}>
                    <EventsGrid />
                </Suspense>
            </div>
        </div>
    );
};

export default UpComingEvents;
