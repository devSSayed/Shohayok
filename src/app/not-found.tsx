import type { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
    title: '404 – Page Not Found',
};

const NotFound = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-[#FAFFEE] px-5 py-16 text-center font-inter'>
            <h1 className='font-hanken_Grotesk text-8xl font-bold leading-none tracking-tight text-[#003006] sm:text-9xl'>
                404
            </h1>

            <h2 className='mt-6 font-hanken_Grotesk text-2xl font-bold text-[#051F12] sm:text-3xl'>
                This page went missing
            </h2>

            <p className='mt-3 max-w-md text-sm leading-relaxed text-[#051F12]/60 sm:text-[15px]'>
                The link may be broken, or the page may have been moved. Don&apos;t worry — let&apos;s get you back home.
            </p>

            <Link
                href='/'
                className='mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00C979] px-6 py-3.5 text-sm font-semibold text-[#003006] transition-colors duration-300 hover:bg-[#003006] hover:text-[#F6FFDF] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
            >
                <Home className='size-4' aria-hidden />
                Back to Homepage
            </Link>
        </div>
    );
};

export default NotFound;
