const TAB_WIDTHS = [58, 78, 70, 92, 84, 88, 66];
const CARD_COUNT = 6;

/** Deterministic placeholder (no Date.now / Math.random) for the streaming fallback. */
const EventsSkeleton = () => {
    return (
        <div aria-hidden='true'>
            <div className='flex items-end justify-between gap-6 border-b border-[#051F12]/10'>
                <div className='flex gap-4 overflow-hidden sm:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
                    {TAB_WIDTHS.map((width) => (
                        <div
                            key={width}
                            className='mb-3 h-4 shrink-0 animate-pulse rounded-full bg-[#051F12]/10'
                            style={{ width }}
                        />
                    ))}
                </div>
                <div className='mb-3 hidden h-3.5 w-28 shrink-0 animate-pulse rounded-full bg-[#051F12]/10 lg:block' />
            </div>

            <div className='mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {Array.from({ length: CARD_COUNT }).map((_, index) => (
                    <div
                        key={index}
                        className='overflow-hidden rounded-2xl border border-[#051F12]/10 bg-white'
                    >
                        <div className='aspect-[16/10] animate-pulse bg-[#051F12]/10' />
                        <div className='space-y-3 p-5'>
                            <div className='h-4 w-4/5 animate-pulse rounded bg-[#051F12]/10' />
                            <div className='h-3.5 w-3/5 animate-pulse rounded bg-[#051F12]/10' />
                            <div className='h-3 w-full animate-pulse rounded bg-[#051F12]/10' />
                            <div className='h-3 w-5/6 animate-pulse rounded bg-[#051F12]/10' />
                            <div className='h-9 w-full animate-pulse rounded-xl bg-[#051F12]/10' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventsSkeleton;
