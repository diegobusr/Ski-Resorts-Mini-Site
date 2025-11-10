import { getFeaturedResorts, getMetrics } from '@/lib/api';
import SwiperCarousel from '@/components/Swiper/SwiperCarousel';
import Link from 'next/link';
import MetricsBar from '@/components/MetricsBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover Ski Resorts | Find Your Perfect Snow Adventure',
  description:
    'Find your perfect snow adventure with our curated selection of premier ski destinations. Discover featured resorts, compare metrics, and explore the best skiing experiences around the world.',
  keywords: [
    'ski resorts',
    'skiing',
    'snowboarding',
    'winter sports',
    'mountain resorts',
  ],
  openGraph: {
    title: 'Discover Ski Resorts | Find Your Perfect Snow Adventure',
    description:
      'Find your perfect snow adventure with our curated selection of premier ski destinations.',
    type: 'website',
  },
};

const Home = async () => {
  const [featuredResorts, metrics] = await Promise.all([
    getFeaturedResorts(),
    getMetrics(),
  ]);

  return (
    <div className='min-h-screen'>
      <section className='relative bg-linear-to-br from-sky-500 via-blue-600 to-indigo-700 text-white py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl md:text-6xl font-bold mb-6'>
              Discover Ski Resorts
            </h1>
            <p className='text-xl md:text-2xl mb-8 opacity-90'>
              Find your perfect snow adventure with our curated selection of
              premier ski destinations
            </p>
            <Link
              href='/resorts'
              className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors'
            >
              Explore All Resorts
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <MetricsBar metrics={metrics} />

      {/* Featured Resorts Carousel */}
      <section className='py-8 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-12 text-gray-900'>
            Featured Resorts
          </h2>
          {featuredResorts.length > 0 ? (
            <SwiperCarousel resorts={featuredResorts} />
          ) : (
            <div className='text-center py-12 text-gray-500'>
              <p>No featured resorts available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;

