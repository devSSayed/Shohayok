'use client';


import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { SquarePen } from "lucide-react";


import { SubmitEvent, useEffect, useRef, useState } from 'react';

import {
    Calendar,
    ChevronDown,
    Image as ImageIcon,
    MapPin,
    Tag,
    Type,
} from 'lucide-react';


import {
    Field,
    FieldError,
    FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';
import { Textarea } from '@/components/ui/textarea';
import { authClient } from '@/lib/auth-client';
import { type EventItem, toDateInputValue } from '@/app/(standard)/upcoming-events/eventHelpers';
import { FaRegCheckCircle } from "react-icons/fa";

const EVENT_TYPES = [
    'Donation',
    'Cleanup',
    'Plantation',
    'Winter Relief',
    'Food Drive',
    'Health Camp',
] as const;

const fieldLabelClassName = 'text-[13px] font-semibold text-[#111827]/80';

const inputClassName =
    'h-11 rounded-[10px] border-[#E5E7EB] bg-[#FAFFEE] pl-9 pr-3 text-sm text-[#111827] shadow-sm placeholder:text-[#051F12]/60 focus-visible:border-[#051F12]/40 focus-visible:ring-[#051F12]/25';

const leadingIconClassName =
    'pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#051F12]/60';

const getTodayString = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${now.getFullYear()}-${month}-${day}`;
};



const EditDialougeButton = ({ event }: { event: EventItem }) => {

    const [title, setTitle] = useState(event.title);
    const [eventType, setEventType] = useState<string>(event.type || 'Donation');
    const [date, setDate] = useState(toDateInputValue(event.date));
    const [location, setLocation] = useState(event.location);
    const [thumbnail, setThumbnail] = useState(event.thumbnail);
    const [description, setDescription] = useState(event.description);
    const [submitted, setSubmitted] = useState(false);
    const [dateError, setDateError] = useState('');


    const dateInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (dateInputRef.current) {
            dateInputRef.current.min = getTodayString();
        }
    }, []);

    const errors = {
        title: title.trim() ? '' : 'Event title is required',

        type: (EVENT_TYPES as readonly string[]).includes(eventType)
            ? ''
            : 'Please select an event type',

        date: !date
            ? 'Event date is required'
            : dateError,

        location: location.trim() ? '' : 'Location / venue is required',

        thumbnail: !thumbnail.trim()
            ? 'Thumbnail image URL is required'
            : /^https?:\/\/.+/.test(thumbnail.trim())
                ? ''
                : 'Please enter a valid URL starting with http:// or https://',

        description: description.trim() ? '' : 'Event description is required',
    };

    const hasErrors = Object.values(errors).some(Boolean);

    const { data: session } = authClient.useSession();

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const dateErrorNow = !date
            ? 'Event date is required'
            : date < getTodayString()
                ? 'Event date must be today or later'
                : '';
        setDateError(dateErrorNow);
        setSubmitted(true);

        if (hasErrors || dateErrorNow) return;

        const formData = new FormData(e.currentTarget);
        const newEvent = Object.fromEntries(formData.entries()) as {
            title: string;
            type: string;
            date: string;
            location: string;
            thumbnail: string;
            description: string;
        };

        const eventData = {
            ...newEvent,
            createdBy: {
                name: session?.user.name,
                email: session?.user.email,
                image: session?.user.image,
                userId: session?.user.id

            },
        };

        console.log(eventData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/event/${event._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventData)
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
            toast.success('Event Updated successfully!', {
                style: {
                    background: '#F6FFDF',
                    color: '#051F12',
                    fontFamily: 'Inter, sans-serif',
                },
            });

            window.location.reload()
        }


    };


    return (
        <Dialog>
            <DialogTrigger render={<Button
                type='button'
                className='inline-flex min-w-0 items-center justify-center gap-1 rounded-xl bg-[#D8FF85]/70 px-4 py-5 text-[12px] font-semibold whitespace-nowrap text-[#003006] cursor-pointer transition-colors duration-300 hover:bg-[#D8FF85] focus-visible:ring-2 focus-visible:ring-[#003006]/30 focus-visible:outline-none'
            >
                <SquarePen className='size-3.5 shrink-0' aria-hidden />
                Edit
            </Button>}>

            </DialogTrigger>

            <DialogContent className={'min-w-xl bg-[#FAFFEE]'}>
                <DialogHeader>
                    <DialogTitle className={'font-inter'}>Edit Event</DialogTitle>
                    <DialogDescription render={<div />}>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className='mt-7 flex flex-col gap-4 font-inter'
                        >
                            {/* EVENT TITLE */}
                            <Field>
                                <FieldLabel
                                    htmlFor='title'
                                    className={fieldLabelClassName}
                                >
                                    Event Title <span className='text-red-500'>*</span>
                                </FieldLabel>
                                <div className='relative'>
                                    <Type className={leadingIconClassName} aria-hidden />
                                    <Input
                                        id='title'
                                        name='title'
                                        type='text'
                                        placeholder='e.g. Winter Clothes Distribution — Mirpur 10, Dhaka'
                                        value={title}
                                        onChange={(event) => setTitle(event.target.value)}
                                        aria-invalid={submitted && !!errors.title}
                                        className={inputClassName}
                                    />
                                </div>
                                {submitted && errors.title && (
                                    <FieldError className='text-xs'>
                                        {errors.title}
                                    </FieldError>
                                )}
                            </Field>

                            {/* EVENT TYPE + EVENT DATE */}
                            <div className='grid gap-4 sm:grid-cols-2'>
                                <Field>
                                    <FieldLabel
                                        htmlFor='type'
                                        className={fieldLabelClassName}
                                    >
                                        Event Type <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <div className='relative'>
                                        <Tag className={leadingIconClassName} aria-hidden />
                                        <select
                                            id='type'
                                            name='type'
                                            value={eventType}
                                            onChange={(event) => setEventType(event.target.value)}
                                            aria-invalid={submitted && !!errors.type}
                                            className={cn(
                                                inputClassName,
                                                'cursor-pointer appearance-none w-full pr-9 focus-visible:ring-3 focus-visible:ring-[#051F12]/25'
                                            )}
                                        >
                                            {EVENT_TYPES.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown
                                            className='pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#051F12]/60'
                                            aria-hidden
                                        />
                                    </div>
                                    {submitted && errors.type && (
                                        <FieldError className='text-xs'>
                                            {errors.type}
                                        </FieldError>
                                    )}
                                </Field>

                                <Field>
                                    <FieldLabel
                                        htmlFor='date'
                                        className={fieldLabelClassName}
                                    >
                                        Event Date <span className='text-red-500'>*</span>
                                    </FieldLabel>
                                    <div className='relative'>
                                        <Calendar className={leadingIconClassName} aria-hidden />
                                        <Input
                                            id='date'
                                            name='date'
                                            type='date'
                                            ref={dateInputRef}
                                            value={date}
                                            onChange={(event) => {
                                                setDate(event.target.value);
                                                setDateError('');
                                            }}
                                            aria-invalid={submitted && !!errors.date}
                                            className={cn(inputClassName, '')}
                                        />
                                    </div>
                                    <p className='text-xs text-[#051F12]/60'>
                                        Dates has to be in the future (today or later)
                                    </p>
                                    {submitted && errors.date && (
                                        <FieldError className='text-xs'>
                                            {errors.date}
                                        </FieldError>
                                    )}
                                </Field>
                            </div>

                            {/* LOCATION / VENUE */}
                            <Field>
                                <FieldLabel
                                    htmlFor='location'
                                    className={fieldLabelClassName}
                                >
                                    Location / Venue <span className='text-red-500'>*</span>
                                </FieldLabel>
                                <div className='relative'>
                                    <MapPin className={leadingIconClassName} aria-hidden />
                                    <Input
                                        id='location'
                                        name='location'
                                        type='text'
                                        placeholder='e.g. Mohammadpur Town Hall, Dhaka'
                                        value={location}
                                        onChange={(event) => setLocation(event.target.value)}
                                        aria-invalid={submitted && !!errors.location}
                                        className={inputClassName}
                                    />
                                </div>
                                {submitted && errors.location && (
                                    <FieldError className='text-xs'>
                                        {errors.location}
                                    </FieldError>
                                )}
                            </Field>

                            {/* THUMBNAIL IMAGE URL */}
                            <Field>
                                <FieldLabel
                                    htmlFor='thumbnail'
                                    className={fieldLabelClassName}
                                >
                                    Thumbnail Image URL <span className='text-red-500'>*</span>
                                </FieldLabel>
                                <div className='relative'>
                                    <ImageIcon className={leadingIconClassName} aria-hidden />
                                    <Input
                                        id='thumbnail'
                                        name='thumbnail'
                                        type='url'
                                        inputMode='url'
                                        placeholder='https://images.unsplash.com/photo-...'
                                        value={thumbnail}
                                        onChange={(event) => setThumbnail(event.target.value)}
                                        aria-invalid={submitted && !!errors.thumbnail}
                                        className={inputClassName}
                                    />
                                </div>
                                {submitted && errors.thumbnail && (
                                    <FieldError className='text-xs'>
                                        {errors.thumbnail}
                                    </FieldError>
                                )}
                            </Field>

                            {/* EVENT DESCRIPTION */}
                            <Field>
                                <FieldLabel
                                    htmlFor='description'
                                    className={fieldLabelClassName}
                                >
                                    Event Description <span className='text-red-500'>*</span>
                                </FieldLabel>
                                <Textarea
                                    id='description'
                                    name='description'
                                    placeholder='Explain the purpose of the drive, volunteers required, items being distributed or tasks to complete...'
                                    value={description}
                                    onChange={(event) => setDescription(event.target.value)}
                                    aria-invalid={submitted && !!errors.description}
                                    className={cn(
                                        inputClassName,
                                        'h-auto min-h-36 resize-y py-3 leading-relaxed'
                                    )}
                                />
                                {submitted && errors.description && (
                                    <FieldError className='text-xs'>
                                        {errors.description}
                                    </FieldError>
                                )}
                            </Field>

                            <Button
                                type='submit'
                                className='mt-1 h-12 w-full gap-2 rounded-xl bg-[#00C979] text-[15px] font-semibold text-white shadow-lg shadow-[#00C979]/25 hover:bg-[#00C979]/80 active:bg-[#02834f] cursor-pointer hover:text-white'
                            >
                                <FaRegCheckCircle className='size-5' aria-hidden />
                                Update Event
                            </Button>
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default EditDialougeButton;
