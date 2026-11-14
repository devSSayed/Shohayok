import EventBrowser from './EventBrowser';
import { buildCategoryList, fetchUpcomingEvents } from './eventHelpers';

/** Sits behind a Suspense boundary so the header shell renders instantly. */
const EventsGrid = async () => {
    const events = await fetchUpcomingEvents();

    return <EventBrowser events={events} categories={buildCategoryList(events)} />;
};

export default EventsGrid;
