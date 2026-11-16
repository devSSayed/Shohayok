const loading = () => {
    return (
        <div className='min-h-screen bg-[#FAFFEE] font-inter'>
            {/* Header skeleton — mirrors the Joined Events header */}
            <div className='flex flex-col items-center justify-center border-b border-[#051F12]/10 text-center'>
                <div className='mx-auto max-w-7xl px-5 pt-12 pb-9'>
                    {/* Pill badge ("My Volunteer Commitments") */}
                    <div className='h-6 w-56 animate-pulse rounded-[10px] bg-[#051F12]/15' />

                    {/* Main heading ("Joined Events") */}
                    <div className='mt-5 h-9 w-56 animate-pulse rounded-lg bg-[#051F12]/10 sm:h-10 sm:w-64' />

                    {/* Subtitle lines */}
                    <div className='mt-3.5 space-y-2'>
                        <div className='h-4 w-full max-w-lg animate-pulse rounded bg-[#051F12]/10' />
                        <div className='h-4 w-48 animate-pulse rounded bg-[#051F12]/10' />
                    </div>
                </div>
            </div>

            {/* Cards grid — mirrors EventCard: image + type pill, title, location/date,
                description, organizer row, then the View + Leave button pair */}
            <div className='mx-auto w-full max-w-7xl px-5 pt-8 pb-20'>
                <div aria-hidden='true' className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className='flex flex-col overflow-hidden rounded-2xl border border-[#051F12]/10 bg-white'
                        >
                            {/* Image area with type pill (aspect-16/10) */}
                            <div className='relative aspect-16/10 animate-pulse bg-[#051F12]/10'>
                                <span className='absolute left-3 top-3 h-5 w-24 rounded-[10px] bg-[#003006]/70' />
                            </div>

                            <div className='flex flex-1 flex-col p-5'>
                                {/* Event title */}
                                <div className='h-5 w-3/4 animate-pulse rounded bg-[#051F12]/10' />

                                {/* Location + date meta row */}
                                <div className='mt-2.5 flex items-center gap-1.5'>
                                    <div className='size-4 shrink-0 animate-pulse rounded-full bg-[#051F12]/10' />
                                    <div className='h-3.5 w-28 animate-pulse rounded bg-[#051F12]/10' />
                                    <span className='h-3.5 w-px shrink-0 bg-[#051F12]/15' />
                                    <div className='size-3.5 shrink-0 animate-pulse rounded-full bg-[#051F12]/10' />
                                    <div className='h-3.5 w-20 animate-pulse rounded bg-[#051F12]/10' />
                                </div>

                                {/* Description (2 lines) */}
                                <div className='mt-3 space-y-2'>
                                    <div className='h-3.5 w-full animate-pulse rounded bg-[#051F12]/10' />
                                    <div className='h-3.5 w-5/6 animate-pulse rounded bg-[#051F12]/10' />
                                </div>

                                <div className='mt-auto'>
                                    {/* Divider + "Organized by" row */}
                                    <div className='mt-4 border-t border-[#051F12]/10 pt-3'>
                                        <div className='flex items-center justify-between gap-2'>
                                            <div className='h-3 w-24 animate-pulse rounded bg-[#051F12]/10' />
                                            <div className='flex items-center gap-2'>
                                                <div className='h-3 w-20 animate-pulse rounded bg-[#051F12]/10' />
                                                <div className='size-7 shrink-0 animate-pulse rounded-full bg-[#051F12]/10' />
                                            </div>
                                        </div>
                                    </div>

                                    {/* View + Leave buttons */}
                                    <div className='mt-3.5 grid grid-cols-[2fr_1fr] gap-2'>
                                        <div className='h-9 animate-pulse rounded-xl bg-[#051F12]/10' />
                                        <div className='h-9 animate-pulse rounded-xl bg-[#051F12]/10' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default loading;
