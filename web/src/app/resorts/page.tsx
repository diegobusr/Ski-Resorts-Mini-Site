import { getAllResorts } from '@/lib/api';
import ResortsGrid from '@/components/resorts/ResortsGrid';
import { Metadata } from 'next';

export const revalidate = 120;

export const metadata: Metadata = {
  title: 'Ski Resorts Catalog | Browse All Resorts',
  description:
    'Browse our complete catalog of ski resorts from around the world. Filter by country, region, and find the perfect resort for your next winter adventure.',
  keywords: [
    'ski resorts catalog',
    'all ski resorts',
    'ski resort directory',
    'winter destinations',
  ],
  openGraph: {
    title: 'Ski Resorts Catalog | Browse All Resorts',
    description:
      'Browse our complete catalog of ski resorts from around the world.',
    type: 'website',
  },
};

const Resorts = async () => {
  const resorts = await getAllResorts();

  return (
    <div className='min-h-screen'>
      <section className='py-4 sm:py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl font-bold text-start mb-8 py-8 pl-4 bg-linear-to-br from-sky-500 via-blue-600 to-indigo-700 text-white rounded-md'>
            Ski resorts catalog
          </h1>

          {resorts.length > 0 ? (
            <ResortsGrid resorts={resorts} />
          ) : (
            <div className='text-center py-12 text-gray-500'>
              <p>No resorts available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resorts;
