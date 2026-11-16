'use client';


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from 'lucide-react';
import { EventItem } from '@/app/(standard)/upcoming-events/eventHelpers';
import toast from "react-hot-toast";
import { redirect } from 'next/navigation';
import { getTokenClient } from "@/lib/getTokenClient";


const DeleteDialogButton = ({ event }: { event: EventItem }) => {

    const handleDeleteEvent = async () => {

        const token = await getTokenClient()

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event/${event._id}`, {
            method: "DELETE",
            headers:{
                authorization: `Bearer ${token}`
            }
        })

        if (!res.ok) {
            toast.error(`Failed to Update event`, {
                style: {
                    background: '#F6FFDF',
                    color: '#051F12',
                    fontFamily: 'Inter, sans-serif',
                },
            }
            );

            return
        }

        if (res.ok) {
            toast.success('Event Deleted successfully!', {
                style: {
                    background: '#F6FFDF',
                    color: '#051F12',
                    fontFamily: 'Inter, sans-serif',
                },
            });

            redirect('/upcoming-events')
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger render={<Button
                type='button'
                className='inline-flex min-w-0 items-center justify-center gap-1 rounded-xl bg-red-50 px-4 py-5 text-[12px] font-semibold whitespace-nowrap text-red-600 transition-colors duration-300 hover:bg-red-100 focus-visible:ring-2 focus-visible:ring-red-400/40 focus-visible:outline-none'
            >
                <Trash className='size-3.5 shrink-0' aria-hidden />
                Delete
            </Button>} />
            <AlertDialogContent className={'font-inter'}>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your
                        account from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteEvent}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteDialogButton;