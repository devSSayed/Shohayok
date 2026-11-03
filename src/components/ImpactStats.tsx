const stats = [
    { value: '25,000+', label: 'Lives Impacted',  },
    { value: '180+', label: 'Events Completed',  },
    { value: '3,500+', label: 'Active Volunteers',  },
    { value: '15+', label: 'Districts Covered',  },
];

const ImpactStats = () => {
    return (
        <section className='md:px-5 py-14 sm:py-16 bg-[#FAFFEE]'>
            <div className='mx-auto max-w-6xl my-8 text-center space-y-16'>
                <h2 className='text-2xl text-[#003006] sm:text-5xl font-hanken_Grotesk tracking-tighter font-bold'>
                    Our Impact in Numbers
                </h2>
                

                <div className='mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-5 xl:mx-0'>
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className='rounded-2xl border border-[#00C979] bg-[#FAFFEE] px-4 py-6 sm:px-6 sm:py-8 shadow-sm transition-shadow hover:shadow-md'
                        >
                            <p
                                className={`text-3xl sm:text-[40px] font-inter font-semibold text-[#003006]`}
                            >
                                {stat.value}
                            </p>
                            <p className='mt-1 text-[14px] sm:text-[16px] font-inter text-muted-foreground'>
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
