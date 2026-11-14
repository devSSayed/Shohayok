export interface EventOrganizer {
    name?: string;
    email?: string;
    image?: string | null;
    userId?: string;
}

export interface EventItem {
    _id: string;
    title: string;
    type: string;
    date: string;
    location: string;
    thumbnail: string;
    description: string;
    createdBy?: EventOrganizer;
}

export const ALL_CATEGORIES = 'All';

const CATEGORY_ORDER: string[] = [
    'Donation',
    'Cleanup',
    'Plantation',
    'Winter Relief',
    'Food Drive',
    'Health Camp',
    'Education',
];

const LOCATION_MAX_WORDS = 5;

/**
 * The backend sends dates in two shapes: "12/15/2026" (MM/DD/YYYY)
 * and "2026-12-05" (ISO). Both are parsed as local dates so the day
 * never shifts by a time-zone offset.
 */
function parseEventDate(value: string): Date | null {
    if (!value) return null;

    const iso = value.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
    if (iso) return new Date(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3]));

    const us = value.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    if (us) return new Date(Number(us[3]), Number(us[1]) - 1, Number(us[2]));

    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatEventDate(value: string): string {
    const parsed = parseEventDate(value);
    if (!parsed) return value;

    return parsed.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
}

/** Keeps the "past events are automatically excluded" promise in the header. */
export function isUpcoming(value: string): boolean {
    const parsed = parseEventDate(value);
    if (!parsed) return true;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return parsed.getTime() >= today.getTime();
}

/** Adds "…" after `maxWords` only when the text is actually longer. */
export function truncateWords(text: string, maxWords: number = LOCATION_MAX_WORDS): string {
    const trimmed = (text ?? '').trim();
    if (!trimmed) return '';

    const words = trimmed.split(/\s+/);
    if (words.length <= maxWords) return trimmed;

    return `${words.slice(0, maxWords).join(' ')}…`;
}

/** Canonical order first, then any custom type the backend invents. */
export function buildCategoryList(events: EventItem[]): string[] {
    const present = new Set(
        events.map((event) => event.type).filter((type): type is string => Boolean(type)),
    );

    const ordered = CATEGORY_ORDER.filter((type) => present.has(type));
    const extras = [...present].filter((type) => !CATEGORY_ORDER.includes(type));

    return [...ordered, ...extras];
}

/** Soonest first, so the grid reads in chronological order. */
export function sortBySoonest(a: EventItem, b: EventItem): number {
    const aTime = parseEventDate(a.date)?.getTime();
    const bTime = parseEventDate(b.date)?.getTime();

    if (aTime === undefined && bTime === undefined) return 0;
    if (aTime === undefined) return 1;
    if (bTime === undefined) return -1;

    return aTime - bTime;
}

export async function fetchUpcomingEvents(): Promise<EventItem[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/allEvents`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`Failed to load events (${res.status})`);
    }

    const data: unknown = await res.json();
    const events: EventItem[] = Array.isArray(data) ? data : [];

    return events.filter((event) => isUpcoming(event.date)).sort(sortBySoonest);
}
