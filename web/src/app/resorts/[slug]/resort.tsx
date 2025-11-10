import Image from 'next/image';
import type { Resort } from '@/types/Resort';
import ResortCard from '@/components/resorts/ResortCard';

interface ResortProps {
  resort: Resort;
  relatedResorts?: Resort[];
}

const Resort = ({ resort, relatedResorts = [] }: ResortProps) => {
  const {
    name,
    country,
    region,
    elevation,
    heroImageUrl,
    shortDescription,
    lifts,
    runs,
    ticketPrice,
    monthlySnowfall,
    reasonsToVisit,
  } = resort;

  const snowfall = monthlySnowfall
    ? Math.round(
        monthlySnowfall.reduce((sum, val) => sum + val, 0) /
          monthlySnowfall.length
      )
    : 0;

  const totalSnowfall = monthlySnowfall
    ? monthlySnowfall.reduce((sum, val) => sum + val, 0)
    : 0;

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className='min-h-screen'>
      <div className='relative h-[60vh] w-full'>
        <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10' />
        <Image
          src={heroImageUrl}
          alt={name}
          fill
          priority
          sizes='100vw'
          className='object-cover'
        />
        <div className='relative z-20 h-full flex items-end px-4 md:px-16'>
          <div className='main-container main-page-margins pb-12'>
            <div className='text-white'>
              <p className='text-lg md:text-2xl font-medium mb-3 tracking-wide uppercase text-white/90 drop-shadow-lg'>
                {region}, {country}
              </p>
              <h1 className='text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl'>
                {name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className='main-container main-page-margins py-12 px-4 md:px-16'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='md:col-span-2 space-y-8'>
            <section>
              <h2 className='text-3xl font-bold mb-4'>About {name} resort</h2>
              <p className='text-black leading-relaxed'>{shortDescription}</p>
            </section>

            {reasonsToVisit && reasonsToVisit.length > 0 && (
              <section>
                <h2 className='text-3xl font-bold mb-4'>
                  Reasons to visit {name} according to our mountain travel
                  experts
                </h2>
                <ul className='pl-2 list-disc list-inside space-y-2 text-black'>
                  {reasonsToVisit.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </section>
            )}

            <section>
              <h2 className='text-3xl font-bold mb-4'>Trail Information</h2>
              <div className='bg-linear-to-br from-sky-500 via-blue-600 to-indigo-700 rounded-lg p-6'>
                <div className='grid grid-cols-2 gap-6'>
                  <div>
                    <p className='text-gray-300  mb-2'>Total Runs</p>
                    <p className='text-white sm:text-2xl text-4xl font-bold'>
                      {runs}
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-300 mb-2'>Lifts</p>
                    <p className='text-white sm:text-2xl text-4xl font-bold'>
                      {lifts}
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-300 mb-2'>Base Elevation</p>
                    <p className='text-white sm:text-2xl text-4xl font-bold'>
                      {elevation}ft
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-300 mb-2'>Ticket price</p>
                    <p className='text-white sm:text-2xl text-4xl font-bold'>
                      {ticketPrice} USD
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-300 mb-2'>Location</p>
                    <p className='text-white sm:text-2xl text-4xl font-bold'>
                      {country} - {region}{' '}
                    </p>
                  </div>
                  <div>
                    <p className='text-gray-300 mb-2'>Avg. Snowfall</p>
                    <p className='text-white sm:text-2xl text-4xl font-bold'>
                      {snowfall} in
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className='space-y-6'>
            {monthlySnowfall && monthlySnowfall.length > 0 && (
              <section className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm'>
                <h3 className='text-xl font-bold mb-4 text-gray-900'>
                  Annual Snowfall Summary
                </h3>
                <div className='mb-4'>
                  <div className='flex items-baseline gap-2'>
                    <span className='text-4xl font-bold text-blue-600'>
                      {totalSnowfall}
                    </span>
                    <span className='text-gray-600 text-lg'>In.</span>
                  </div>
                  <p className='text-sm text-gray-500 mt-1'>Total Snowfall</p>
                </div>

                <div className='mt-6'>
                  <h4 className='text-sm font-semibold text-gray-700 mb-3'>
                    Monthly Breakdown
                  </h4>
                  <div className='space-y-2'>
                    {monthlySnowfall.map((snow, index) => {
                      const maxSnow = Math.max(...monthlySnowfall);
                      const percentage =
                        maxSnow > 0 ? (snow / maxSnow) * 100 : 0;
                      return (
                        <div key={index} className='space-y-1'>
                          <div className='flex justify-between items-center text-sm'>
                            <span className='text-gray-600 font-medium'>
                              {monthNames[index]}
                            </span>
                            <span className='text-gray-900 font-semibold'>
                              {Math.round(snow)} in
                            </span>
                          </div>
                          <div className='w-full bg-gray-200 rounded-full h-2 overflow-hidden'>
                            <div
                              className='bg-linear-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-300'
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      {relatedResorts.length > 0 && (
        <section className='main-container main-page-margins py-12 px-4 md:px-16 '>
          <h2 className='text-3xl font-bold mb-8 text-gray-900'>
            Other Resorts in {resort.country}
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {relatedResorts.map((relatedResort) => (
              <ResortCard key={relatedResort.id} resort={relatedResort} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Resort;

