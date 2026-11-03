import Image from 'next/image';
import img1 from '../assets/bannerImage.jpg';
import { Button } from '@/components/ui/button';

const Banner = () => {
    return (
        <div className='relative w-full h-screen min-h-150 overflow-hidden'>
            {/* Background Image */}
            <Image
                src={img1}
                alt='banner image'
                fill
                sizes='100vw'
                className='object-cover object-center'
                priority
            />



            {/* Content Box (Aligned to Bottom-Left) */}
            <div className='absolute inset-0 container mx-auto px-4 xl:px-0 pb-16 md:pb-20 flex flex-col justify-end items-start gap-3 xl:gap-40 z-10'>

                <h1 className='max-w-3xl text-4xl sm:text-5xl md:text-7xl text-[#F6FFDF] font-hanken_Grotesk font-bold tracking-tight md:leading-16'>
                    Be the <br className='hidden md:block'/> Shohayok,<br className=''/>
                    Your <br className='hidden md:block'/> Community <br className='hidden md:block'/> needs.
                </h1>

                <div>
                    <p className='sm:text-lg text-[#FFFFFF] text-[18px] md:text-[24px] font-normal font-inter leading-relaxed'>
                        Find or organize clothing donations, food <br className='hidden md:block'/> drives, and community aid events in Mirpur, <br className='hidden md:block'/> Mohammadpur, and beyond.
                    </p>

                    <div className='flex flex-wrap items-center gap-3 mt-3'>
                        {/* Primary Button */}
                        <Button
                            className='bg-[#00C979] hover:bg-[#00C979]/60 active:bg-[#00C979]/80 font-semibold font-inter text-[16px] text-[#003006] px-6 py-6 rounded-[10px] cursor-pointer transition-all shadow-lg border-none'
                        >
                            Explore upcoming Events
                        </Button>

                        {/* Secondary Outline Button */}
                        <Button
                            variant='outline'
                            className='border-[#00C979] bg-white/10 backdrop-blur-sm text-[#F6FFDF] font-inter font-medium text-sm md:text-base px-6 py-6 rounded-[10px] hover:bg-white/20 hover:border-white  transition-all cursor-pointer'
                        >
                            Add Event
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
