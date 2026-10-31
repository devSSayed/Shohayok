import React from 'react';
import NavButton from './NavButton';
import { FaCalendarDays } from 'react-icons/fa6';
import Link from 'next/link';
import { Heart } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='container mx-auto max-w-6xl my-5 px-2 md:px-5 xl:px-0 flex justify-between items-center '>
            <div>
                <Link href={'/'}> 
                <div className="flex items-center gap-1">
                    {/* Brand Logo Icon */}
                    <div className="p-2 rounded-xl bg-primary text-primary-foreground shadow-sm">
                        <Heart className="w-5   h-5 fill-current" />
                    </div>
                    <span className="text-xl md:text-2xl font-bold font-inter tracking-tight">
                        Shohayok
                    </span>
                </div>
                </Link>
            </div>
            <p className='font-inter text-[14px] hover:text-violet-600 cursor-pointer md:text-[17px] font-medium flex items-start gap-1'><FaCalendarDays className='text-[22px] hidden md:block' /> Upcoming Events</p>
            <NavButton />
        </div>
    );
};

export default Navbar;