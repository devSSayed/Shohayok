import Image from 'next/image';
import img1 from '../assets/food distribute.jpg';
import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <div className='relative w-full h-[calc(100vh-90px)] min-h-105 overflow-hidden'>
            <Image
                src={img1}
                alt='banner image'
                fill
                sizes='100vw'
                className='object-cover'
                priority
            />
            {/* Dark shade so the text is clear to read */}
            <div className='absolute inset-0 bg-black/40' />

            {/* content: bottom left */}
            <div className='absolute inset-0 flex flex-col justify-end items-start gap-4 p-6 sm:p-10 lg:p-14'>
                <h2 className='max-w-3xl text-3xl md:text-5xl  text-white font-inter font-bold'>
                    BE THE SHOHAYOK <br /> YOUR COMMUNITY NEEDS.
                </h2>
                <p className='max-w-2xl text-sm sm:text-base text-white/90 font-inter'>
                    Discover, create, and join local clothing distributions, food drives,{' '}
                    <br className='hidden sm:block' /> and aid events in Mirpur, Mohammadpur, and beyond.
                </p>
                <div className='flex flex-wrap items-center gap-3 mt-2'>
                    <Button     
                        className='bg-white py-6 px-6 text-black font-inter text-[16px] hover:bg-white/60 active:bg-white/70 hover:border border-white cursor-pointer'
                    >
                        Explore Upcoming Events
                    </Button>
                    <Button
                        variant='outline'
                        className='border-white/60 bg-transparent py-6 px-5 text-white font-inter font-medium text-[15px] hover:bg-white/10 active:bg-white/30 hover:text-white cursor-pointer'
                    >
                        Add Event
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
