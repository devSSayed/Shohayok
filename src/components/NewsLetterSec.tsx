"use client"
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React from 'react';

const NewsLetterSec = () => {

    const handleSubmitButton = (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        e.target.reset()
    }


    return (
        <section className='px-5 py-16 sm:py-20 bg-[#FAFFEE]'>
            <div className='mx-auto max-w-6xl '>
                <div className='grid items-center gap-8 rounded-3xl border border-[#003006] bg-linear-to-r from-[#F6FFDF]/60 via-[#F6FFDF]/5 to-[#FAFFEE] p-7 sm:p-10 md:grid-cols-2 md:gap-12 '>

                    {/* Left column: eyebrow + heading + subtext */}
                    <div>
                        <p className='text-[14px] font-semibold tracking-[1px] text-[#003006] font-inter'>
                            Never miss a Drive
                        </p>
                        <h2 className='mt-3 text-2xl text-[#003006] sm:text-3xl lg:text-4xl font-inter font-bold'>
                            Be First to Know When Help is Needed
                        </h2>
                        <p className='mt-4 max-w-md font-inter text-sm sm:text-base text-[#003006]/60'>
                            Get instant updates whenever new relief initiatives or
                            volunteer events launch in your area.
                        </p>
                    </div>

                    {/* Right column: email input + subscribe button */}
                    <form onSubmit={handleSubmitButton} className='flex w-full flex-col gap-3 sm:flex-row'>
                        <input
                            type='email'
                            required
                            placeholder='Enter your email address'
                            className='h-11 w-full font-inter text-[#003006] rounded-lg border border-input bg-[#FAFFEE] px-4 text-sm outline-none transition-colors placeholder:text-[#003006]/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'
                        />
                        <Button
                            type='submit'
                            size='lg'
                            className='h-11 shrink-0 gap-2 text-[#003006] bg-[#00C979] hover:bg-[#00C979]/60 hover:border-[#003006] active:bg-[#00C979]/80 font-inter cursor-pointer'
                        >
                            <Send className='size-4' />
                            Subscribe
                        </Button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default NewsLetterSec;
