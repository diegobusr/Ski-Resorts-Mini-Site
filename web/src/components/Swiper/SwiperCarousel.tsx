'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Resort } from '@/types/Resort';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import {
  customDebounce,
  SCREEN_DESKTOP,
  SCREEN_TABLET_SM,
} from '@/lib/helpers/helpers';

interface SwiperCarouselProps {
  resorts: Resort[];
}

const SwiperCarousel = ({ resorts }: SwiperCarouselProps) => {
  const [displayCount, setDisplayCount] = useState(() => {
    const screenWidth =
      typeof window !== 'undefined' ? window.innerWidth : SCREEN_DESKTOP + 1;

    if (screenWidth <= SCREEN_TABLET_SM) return 1;
    if (screenWidth <= SCREEN_DESKTOP) return 2;
    return 3;
  });

  useEffect(() => {
    const handleResize = customDebounce(() => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= SCREEN_TABLET_SM) setDisplayCount(1);
      else if (screenWidth <= SCREEN_DESKTOP) setDisplayCount(2);
      else setDisplayCount(3);
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={displayCount}
      loop={true}
      navigation
      className='w-full h-[500px] rounded-lg'
      autoplay={{
        delay: 1600,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
        waitForTransition: true,
      }}
    >
      {resorts.map((resort) => (
        <SwiperSlide key={resort.id}>
          <Link
            href={`/resorts/${resort.slug}`}
            className='block relative w-full h-full'
          >
            <Image
              src={resort.heroImageUrl}
              alt={resort.name}
              className='block object-cover'
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />

            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-lg'>
              <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                <h3 className='text-3xl font-bold mb-2'>{resort.name}</h3>
                <p className='text-lg mb-1'>
                  {resort.country}
                  {resort.region && `, ${resort.region}`}
                </p>
                <p className='text-sm opacity-90'>{resort.shortDescription}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;

