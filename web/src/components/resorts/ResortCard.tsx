import Link from 'next/link';
import { Resort } from '@/types/Resort';
import Image from 'next/image';

type Props = {
  resort: Resort;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
};

const ResortCard = ({
  resort,
  isFavorite = false,
  onToggleFavorite,
}: Props) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite?.();
  };

  return (
    <article className='bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-150 relative'>
      {onToggleFavorite && (
        <button
          onClick={handleFavoriteClick}
          className='absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <span
            className={`text-2xl ${
              isFavorite ? 'text-red-500' : 'text-gray-400'
            }`}
          >
            {isFavorite ? '★' : '☆'}
          </span>
        </button>
      )}

      <Link href={`/resorts/${resort.slug}`} className='block'>
        <div className='h-44 w-full bg-gray-100 overflow-hidden'>
          {resort.heroImageUrl ? (
            <div className='relative w-full h-64'>
              <Image
                src={resort.heroImageUrl}
                alt={resort.name}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover rounded-lg'
              />
            </div>
          ) : (
            <div className='w-full h-full flex items-center justify-center text-gray-400'>
              No image
            </div>
          )}
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900'>{resort.name}</h3>
          <p className='text-sm text-gray-500 mt-1'>
            {resort.country}
            {resort.region ? ` — ${resort.region}` : ''}
          </p>
          <p className='text-sm text-gray-600 mt-3 line-clamp-3'>
            {resort.shortDescription}
          </p>

          <div className='mt-4 flex items-center justify-between text-sm text-gray-600'>
            <div className='flex gap-3 items-center'>
              <span className='font-medium'>Lifts:</span>
              <span>{resort.lifts ?? '-'}</span>
              <span className='ml-2 font-medium'>Runs:</span>
              <span>{resort.runs ?? '-'}</span>
            </div>
            <div className='text-right'>
              <div className='font-medium'>
                Base elev. {resort.elevation ?? '-'} ft
              </div>
              {resort.ticketPrice != null && (
                <div className='text-xs text-gray-500'>
                  Tickets from ${resort.ticketPrice}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ResortCard;

