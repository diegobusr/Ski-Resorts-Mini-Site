import ChevronLeft from '../Swiper/SwiperCarousel/';
import ChevronRight from '@/icons/chevron-right.svg';

interface SliderButtonProps {
  direction: 'left' | 'right';
  enabled: boolean;
  handleClick: () => void;
  sliderType?: string;
  isMobile?: boolean;
}

interface SizeProps {
  icon: string;
  circle: string;
}

const SIZE: SizeProps = {
  icon: 'text-xl',
  circle: 'h-12 w-12',
};

const SliderButton = ({
  direction,
  enabled,
  handleClick,
  sliderType,
  isMobile = false,
}: SliderButtonProps) => {
  const buttonProperties = enabled
    ? `${SIZE.circle} cursor-pointer hover:border-white hover:bg-primary-900 hover:text-white`
    : `${SIZE.circle} pointer-events-none opacity-50`;

  const positionStyles = getPositionStyles(direction, sliderType, isMobile);

  return (
    <div
      className={`${
        isMobile ? 'inline-block' : 'absolute top-1/2'
      } z-10 ${positionStyles}`}
    >
      <button
        className={`link-transition flex items-center justify-center rounded-full border-2 border-gray-200 bg-white ${buttonProperties}`}
        onClick={enabled ? handleClick : undefined}
        aria-label={direction === 'right' ? 'Next' : 'Previous'}
      >
        {direction === 'right' ? (
          <ChevronRight className={SIZE.icon} />
        ) : (
          <ChevronLeft className={SIZE.icon} />
        )}
      </button>
    </div>
  );
};

export default SliderButton;

const getPositionStyles = (
  direction: string,
  sliderType = '',
  isMobile: boolean
) => {
  let positionStyles = '';

  switch (sliderType) {
    case 'richElement':
      positionStyles = isMobile
        ? ''
        : `${
            direction === 'right'
              ? '-right-4 sm:-right-2 -translate-y-8 xl:-translate-x-32'
              : '-left-4 sm:-left-2 -translate-y-8 xl:translate-x-32'
          } sm:-translate-y-8 md:-translate-y-8 lg:-translate-y-8`;
      break;
    case 'themes':
      positionStyles = `${
        direction === 'right' ? '-right-4 sm:-right-5' : '-left-4 sm:-left-5'
      } -translate-y-16 sm:-translate-y-16 md:-translate-y-[4.5rem] lg:-translate-y-16`;
      break;
    case 'templates':
      positionStyles = `${
        direction === 'right' ? '-right-4 sm:-right-5' : '-left-4 sm:-left-5'
      } -translate-y-8 sm:-translate-y-8 md:-translate-y-8 lg:-translate-y-8`;
      break;
    default:
      positionStyles = `${
        direction === 'right' ? '-right-4 sm:-right-5' : '-left-4 sm:-left-5'
      } -translate-y-24 sm:-translate-y-28 md:-translate-y-[6.5rem] lg:-translate-y-24`;
  }

  return positionStyles;
};

