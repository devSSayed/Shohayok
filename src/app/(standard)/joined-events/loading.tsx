import React from 'react';

const loading = () => {
    return (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16">
            {/* Header Skeleton */}
            <div className="mb-8 border-b border-[#051F12]/10 pb-8">
                {/* Pill badge ("My Volunteer Commitments") */}
                <div className="h-6 w-44 animate-pulse rounded-full bg-[#051F12]/15" />

                {/* Main Heading ("Joined Events") */}
                <div className="mt-3 h-9 w-56 animate-pulse rounded-lg bg-[#051F12]/10 sm:h-10 sm:w-64" />

                {/* Subtitle lines */}
                <div className="mt-3 space-y-2">
                    <div className="h-4 w-full max-w-lg animate-pulse rounded bg-[#051F12]/10" />
                    <div className="h-4 w-48 animate-pulse rounded bg-[#051F12]/10" />
                </div>
            </div>

            {/* 6 Cards Grid: 1 col mobile, 2 cols sm, 3 cols lg */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col overflow-hidden rounded-2xl border border-[#051F12]/10 bg-white shadow-sm"
                    >
                        {/* Image Placeholder with Top & Bottom Badges */}
                        <div className="relative aspect-16/10 w-full animate-pulse bg-[#051F12]/10">
                            {/* Top-left category pill */}
                            <div className="absolute left-3 top-3 h-6 w-20 rounded-full bg-white/70" />
                            {/* Bottom-left date pill */}
                            <div className="absolute bottom-3 left-3 h-6 w-32 rounded-lg bg-[#051F12]/25" />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-1 flex-col p-5">
                            {/* Event Title */}
                            <div className="h-5 w-3/4 animate-pulse rounded bg-[#051F12]/25" />

                            {/* Location Row */}
                            <div className="mt-3 flex items-center gap-2">
                                <div className="size-4 shrink-0 animate-pulse rounded-full bg-[#051F12]/15" />
                                <div className="h-3.5 w-36 animate-pulse rounded bg-[#051F12]/10" />
                            </div>

                            {/* Status Line ("You have signed up as a confirmed volunteer...") */}
                            <div className="mt-3 h-3.5 w-5/6 animate-pulse rounded bg-[#051F12]/10" />

                            {/* Divider */}
                            <div className="my-4 border-t border-[#051F12]/10" />

                            {/* Joined Date Line */}
                            <div className="h-3.5 w-40 animate-pulse rounded bg-[#051F12]/20" />

                            {/* Action Button ("View Event") */}
                            <div className="mt-4 h-11 w-full animate-pulse rounded-xl bg-[#051F12]/30" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default loading;