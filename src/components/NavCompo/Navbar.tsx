import navLogo from '@/assets/logo.svg';
import NavButton from './NavButton';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
    variant?: 'transparent' | 'solid';
}

const Navbar = ({ variant = 'solid' }: NavbarProps) => {

    const isTransparent = variant === 'transparent';

    return (
        <header
            className={`w-full py-5 px-4 md:px-8 z-50 transition-all ${isTransparent
                    ? 'absolute top-0 left-0 right-0 bg-transparent'
                    : 'relative bg-[#003006]'
                }`}
        >
            <div className='container mx-auto flex justify-between items-center'>
                {/* Logo */}
                <div>
                    <Link href={'/'}>
                        <Image src={navLogo} alt='Logo' className='w-28 md:w-44' />
                    </Link>
                </div>

                {/* Right Links & Button */}
                <div className='flex items-center gap-6'>
                    <Link
                        href='/events'
                        className='font-inter text-[14px] md:text-[16px] font-medium text-[#F6FFDF] hover:underline transition-colors flex items-center gap-2 cursor-pointer'
                    >
                        Upcoming Events
                    </Link>
                    <NavButton />
                </div>
            </div>
        </header>
    );
};

export default Navbar;