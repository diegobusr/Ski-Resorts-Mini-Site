import Link from 'next/link';

const NotFoundClient = () => {
  return (
    <div className='main-container main-page-margins'>
      <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
        <div className='mb-8'>
          <h1 className='text-8xl font-bold text-gray-200 dark:text-gray-800'>
            404
          </h1>
        </div>

        <h2 className='text-3xl font-semibold mb-4'>Page Not Found</h2>

        <p className='text-gray-600 dark:text-gray-400 mb-8 max-w-md'>
          Oops, the page you&apos;re looking for can&apos;t be found.
        </p>

        <Link
          href='/'
          className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium'
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundClient;

