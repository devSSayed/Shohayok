const stats = [
    { value: '25,000+', label: 'Lives Impacted', color: 'text-violet-600' },
    { value: '180+', label: 'Events Completed', color: 'text-emerald-600' },
    { value: '3,500+', label: 'Active Volunteers', color: 'text-teal-500' },
    { value: '15+', label: 'Districts Covered', color: 'text-amber-500' },
];

const ImpactStats = () => {
    return (
        <section className='bg-muted/40 px-5 py-14 sm:py-16'>
            <div className='mx-auto max-w-5xl text-center'>
                <h2 className='text-2xl sm:text-3xl font-inter font-bold'>
                    Our Impact in Numbers
                </h2>
                <div className='mx-auto mt-3 h-1 w-12 rounded-full bg-primary/80' />

                <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className='rounded-2xl border border-border/60 bg-background px-4 py-6 sm:px-6 sm:py-8 shadow-sm transition-shadow hover:shadow-md'
                        >
                            <p
                                className={`text-2xl sm:text-3xl font-inter font-extrabold ${stat.color}`}
                            >
                                {stat.value}
                            </p>
                            <p className='mt-1 text-[19px] font-inter sm:text-sm text-muted-foreground'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
