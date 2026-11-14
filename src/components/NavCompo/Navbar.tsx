'use client';
import navLogo from '@/assets/logo.svg';
import avatar from '@/assets/ProfileAvatar.jpg';
import NavButton from './NavButton';
import Link from 'next/link';
import Image from 'next/image';
import { authClient, } from '@/lib/auth-client';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuLogOut } from 'react-icons/lu';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import { Skeleton } from '../ui/skeleton';
import { RxAvatar } from 'react-icons/rx';



interface NavbarProps {
    variant?: 'transparent' | 'solid';
}

const Navbar = ({ variant = 'solid' }: NavbarProps) => {

    const isTransparent = variant === 'transparent';

    const { data, isPending } = authClient.useSession();

    const user = data?.user;

    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push('/login');
                    router.refresh();
                }
            }
        });
    }


    return (
        <header
            className={`w-full py-5 px-4 md:px-8 z-50 transition-all ${isTransparent
                ? 'absolute top-0 left-0 right-0 bg-transparent'
                : 'relative bg-[#003006]'
                }`}
        >
            {
                isPending ? <header className="flex h-20 w-full container mx-auto items-center justify-between gap-2.5 px-2 backdrop-blur-xs">
                    {/* Left: Logo + Brand Name Skeleton */}
                    <div className="flex items-center gap-3">
                        <Skeleton className="size-10 rounded-xl bg-[#004a10]/50" />
                        <div className="space-y-1.5">
                            <Skeleton className="h-4 w-28 bg-[#004a10]/50" />
                            <Skeleton className="h-3 w-16 bg-[#004a10]/50" />
                        </div>
                    </div>

                    {/* Right: Link + Avatar + Button Skeletons */}
                    <div className="flex items-center gap-1.5 md:gap-6">
                        <Skeleton className="h-4 w-28 bg-[#004a10]/50" />
                        <Skeleton className="size-10 rounded-full bg-[#004a10]/50" />
                        <Skeleton className="h-10 w-20 rounded-xl bg-[#004a10]/50 hidden md:block" />
                    </div>
                </header>

                    :

                    user ? <div className='container mx-auto flex justify-between items-center'>
                        {/* Logo */}
                        <div>
                            <Link href={'/'}>
                                <Image src={navLogo} alt='Logo' className='w-28 md:w-44' />
                            </Link>
                        </div>

                        {/* Right Links & Button */}
                        <div className='flex items-center gap-6'>
                            <Link
                                href='/upcoming-events'
                                className='font-inter text-[14px] md:text-[16px] font-medium text-[#F6FFDF] hover:underline transition-colors flex items-center gap-2 cursor-pointer'
                            >
                                Upcoming Events
                            </Link>

                            <DropdownMenu>
                                <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full">
                                    <Avatar className="sm:w-10 sm:h-10 rounded-full cursor-pointer hover:border-2">
                                        <AvatarImage
                                            src={user.image || avatar.src}
                                            alt="User Avatar"
                                            className=""
                                        />

                                        <AvatarFallback><RxAvatar className='size-10'/></AvatarFallback>
                                    </Avatar>
                                </Button>} />
                                <DropdownMenuContent className="w-48 font-inter bg-[#FAFFEE]" side='bottom' align="end" sideOffset={10}>
                                    <DropdownMenuGroup className='space-x-1'>
                                        <DropdownMenuLabel className='text-[14px]'>
                                            {user.name}
                                        </DropdownMenuLabel>
                                        <DropdownMenuLabel className='text-[12px]'>
                                            {user.email}
                                        </DropdownMenuLabel>
                                    </DropdownMenuGroup>
                                    <DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className='focus:bg-gray-400/20 cursor-pointer text-[#051F12]'>
                                            <Link href="/createEvent" className='flex items-center gap-2'> <IoMdAddCircleOutline />  Create Event</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className='focus:bg-gray-400/20 cursor-pointer text-[#051F12]'>
                                            <Link href="/manageEvents" className='flex items-center gap-2'> <FaGear /> Manage Events</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className='focus:bg-gray-400/20 cursor-pointer text-[#051F12]'>
                                            <Link href="/joinedEvents" className='flex items-center gap-2'> <FaRegCalendarCheck /> Joined Events</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem className='text-red-700 focus:bg-red-500/80 font-medium hover:text-white focus:text-[#051F12] cursor-pointer' onClick={handleLogout} >
                                            Log out <LuLogOut className='hover:text-white' />
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <Button onClick={handleLogout}
                                className='bg-red-500 hover:bg-red-600 active:bg-red-500/80 text-[#F6FFDF] rounded-[10px] tracking-tighter font-inter cursor-pointer border-none transition-all 
                                             py-5 px-5 md:px-8 md:py-6 text-[14px] md:text-[16px] md:flex items-center gap-2 hidden'
                            >
                                Logout
                            </Button>
                        </div>
                    </div>

                        :

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
                                    href='/upcoming-events'
                                    className='font-inter text-[14px] md:text-[16px] font-medium text-[#F6FFDF] hover:underline transition-colors flex items-center gap-2 cursor-pointer'
                                >
                                    Upcoming Events
                                </Link>
                                <NavButton />
                            </div>
                        </div>
            }


        </header>
    );
};

export default Navbar;