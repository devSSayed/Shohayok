import React from 'react';
import NavButton from './NavButton';
import { FaCalendarDays } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div className='container mx-auto my-5 px-5 xl:px-0 flex justify-between items-center'>
            <div>
                <h2 className='font-inter text-xl md:text-2xl font-bold'>Shohayok</h2>
            </div>
            <p className='font-inter text-[14px] md:text-[17px] font-medium flex items-start gap-1'><FaCalendarDays className='text-[22px] hidden md:block'/> Upcoming Events</p>
            <NavButton />
        </div>
    );
};

export default Navbar;