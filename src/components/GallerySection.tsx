import Image from 'next/image';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatEventDate } from '@/app/(standard)/upcoming-events/eventHelpers';

export const pastEvents = [
  {
    title: "Operation Hope: The Great Flood Relief Mission",
    type: "Disaster Relief",
    date: "08/22/2022",
    location: "Sylhet & Sunamganj, Bangladesh",
    thumbnail:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80",
    description:
      "One of our largest humanitarian missions ever. Hundreds of volunteers came together to rescue stranded families, distribute emergency food supplies, provide clean drinking water, and deliver essential medicines to thousands of people affected by devastating floods."
  },
  {
    title: "Project Shobuj: The Million Trees Movement",
    type: "Plantation",
    date: "06/05/2021",
    location: "Across Bangladesh",
    thumbnail: "https://addnews.up.ac.th/main/UploadImages/32577/g5hxpgfh.JPG",
    description:
      "A landmark environmental campaign that brought together students, teachers, and thousands of volunteers to plant trees across communities. What started as a small initiative grew into one of our most celebrated environmental movements."
  },
  {
    title: "Mission Warmth: Winter for Everyone",
    type: "Winter Relief",
    date: "01/10/2023",
    location: "Rangpur & Kurigram, Bangladesh",
    thumbnail:
      "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?auto=format&fit=crop&w=800&q=80",
    description:
      "During one of the harshest winter relief campaigns in our history, volunteers traveled to remote villages to distribute thousands of blankets, warm clothes, and essential winter supplies to vulnerable families and elderly citizens."
  },
  {
    title: "The Great Community Kitchen: Feeding 10,000 Families",
    type: "Food Drive",
    date: "04/20/2020",
    location: "Dhaka, Bangladesh",
    thumbnail:
      "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=800&q=80",
    description:
      "When the pandemic left thousands of families struggling to survive, our volunteers launched an extraordinary food distribution mission. Essential groceries and cooked meals were delivered to low-income households, daily-wage workers, and people unable to earn a living."
  },
  {
    title: "Save Our Rivers: The Historic Cleanup Campaign",
    type: "Cleanup",
    date: "09/16/2019",
    location: "Buriganga River, Dhaka",
    thumbnail: "https://images.unsplash.com/photo-1758599669016-acedd3942ca2?auto=format&fit=crop&w=800&q=80",
    description:
      "A massive volunteer-led environmental movement dedicated to protecting one of Bangladesh's most important waterways. Hundreds of participants joined hands to remove plastic waste, raise environmental awareness, and inspire communities to protect their rivers."
  },
  {
    title: "Project Shikkha: A Future Without Barriers",
    type: "Education",
    date: "01/15/2018",
    location: "Rural Communities, Rajshahi, Bangladesh",
    thumbnail:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A life-changing educational initiative that brought learning opportunities to underprivileged children in rural communities. Volunteers distributed thousands of books, school bags, stationery kits, and educational materials while organizing free learning sessions for children who had limited access to education."
  }
];

/**
 * Archive-style visual stories.
 *
 * Deliberately NOT a card: no white box, no border, no gradient overlay, no pill
 * sitting on the photo — captions live underneath the image on a dark green
 * section, with an editorial index row above each photo.
 */
const GallerySection = () => {
    return (
        <section className='bg-[#F6FFDF] px-5 py-16 font-inter sm:py-20'>
            <div className='mx-auto max-w-6xl'>
                {/* ── Header ── */}
                <div className='text-center'>
                    <div className='flex items-center justify-center gap-3'>
                        <span className='h-px w-8 bg-[#00C979]/40 sm:w-12' aria-hidden />
                        <span className='text-[11px] font-semibold tracking-[0.25em] text-[#00C979] uppercase'>
                            Our Legacy
                        </span>
                        <span className='h-px w-8 bg-[#00C979]/40 sm:w-12' aria-hidden />
                    </div>

                    <h2 className='mt-4 font-hanken_Grotesk text-4xl font-bold tracking-tight text-[#003006] sm:text-5xl'>
                        A Legacy of Making a Difference
                    </h2>

                    <p className='mx-auto mt-3.5 max-w-2xl text-sm leading-relaxed text-[#003006]/60 sm:text-[15px]'>
                        Reliving the moments, people, and impactful initiatives that brought communities together and created 
                        lasting change across Bangladesh.
                    </p>
                </div>

                {/* ── Staggered archive grid ── */}
                <div className='mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:pb-16'>
                    {pastEvents.map((story, index) => (
                        <figure
                            key={story.title}
                            className={cn(
                                'group',
                                // middle column sits lower for an editorial rhythm
                                index % 3 === 1 && 'lg:translate-y-16',
                            )}
                        >
                            {/* index — rule — date */}
                            <div className='mb-3.5 flex items-center gap-3'>
                                <span className='text-[11px] font-bold tracking-[0.18em] text-[#00C979] tabular-nums'>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span
                                    className='h-px flex-1 bg-[#003006]/15 transition-colors duration-500 group-hover:bg-[#00C979]/70'
                                    aria-hidden
                                />
                                <span className='text-[11px] font-medium text-[#003006]/55 tabular-nums'>
                                    {formatEventDate(story.date)}
                                </span>
                            </div>

                            {/* photo */}
                            <div className='relative aspect-4/3 overflow-hidden rounded-2xl bg-[#003006]/5 ring-1 ring-[#003006]/10 transition duration-500 group-hover:ring-[#00C979]/60'>
                                <Image
                                    src={story.thumbnail}
                                    alt=''
                                    fill
                                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                    loading='lazy'
                                    decoding='async'
                                    className='object-cover grayscale-[35%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0'
                                />
                                {/* green bar sweeps the base of the photo on hover */}
                                <span
                                    className='absolute bottom-0 left-0 h-[3px] w-0 bg-[#00C979] transition-all duration-500 ease-out group-hover:w-full'
                                    aria-hidden
                                />
                            </div>

                            {/* caption */}
                            <figcaption className='mt-4'>
                                <div className='flex items-center gap-1.5'>
                                    <span
                                        className='size-1.5 shrink-0 rounded-full bg-[#00C979]'
                                        aria-hidden
                                    />
                                    <span className='text-[11px] font-semibold tracking-[0.16em] text-[#00C979] uppercase'>
                                        {story.type}
                                    </span>
                                </div>

                                <h3
                                    className='mt-2 line-clamp-2 font-hanken_Grotesk text-lg leading-snug font-bold text-[#003006] sm:text-xl'
                                    title={story.title}
                                >
                                    {story.title}
                                </h3>

                                <div className='mt-2 flex items-start gap-1.5 text-[13px] text-[#003006]/70'>
                                    <MapPin
                                        className='mt-0.5 size-4 shrink-0 text-[#00C979]'
                                        aria-hidden
                                    />
                                    <span className='line-clamp-1' title={story.location}>
                                        {story.location}
                                    </span>
                                </div>

                                <p
                                    className='mt-2 text-sm leading-relaxed text-[#003006]/60'
                                    title={story.description}
                                >
                                    {story.description}
                                </p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
