import React, { useEffect, useRef } from 'react';
import ThumbnailsContainer from './thumbnails-container';
import { MovieType } from '../../constants/constants-and-types';
import PrimarySubTitle from '../atoms/primary-sub-title';

interface MoviesContainer {
  movieList: MovieType[];
  isNowShowing: boolean;
}

const MoviesContainer = ({ movieList, isNowShowing }: MoviesContainer) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const updateScrollPosition = () => {
    const container = containerRef.current;
    if (!container || container.offsetWidth === 768) return;

    const containerWidth = container.offsetWidth;
    const marginPercentage = 2.5 / 100;
    const thumbnailWidth = containerWidth * 0.18;
    const marginWidth = containerWidth * marginPercentage;
    const thumbnailFullWidth = thumbnailWidth + marginWidth;


    const currentIndex = Math.round(container.scrollLeft / thumbnailFullWidth);

    container.scrollLeft = currentIndex * thumbnailFullWidth;
  };

  useEffect(() => {

    window.addEventListener('resize', updateScrollPosition);

    return () => {
      window.removeEventListener('resize', updateScrollPosition);
    };
  }, []);

  const scroll = (direction : 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;

    const marginPercentage = 2.5 / 100;

    const thumbnailWidth = containerWidth * 0.18;
    const marginWidth = containerWidth * marginPercentage;
    const scrollAmount = (thumbnailWidth + marginWidth) * 5

    container.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };


  return (
    <div
      className={`${
        isNowShowing
          ? 'bg-[url(/now-showing-background.jpg)] bg-black'
          : 'bg-white'
      } scroll-mt-[60px]  bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14`}
    >
      <div className=" flex flex-col mx-auto max-w-[1108px] px-5 md:px-8 lg:px-8">
        <div className="mb-5 text-center md:mb-8">
          <PrimarySubTitle
            text={`${isNowShowing ? 'Phim đang chiếu' : 'Phim sắp chiếu'}`}
            color={`${isNowShowing ? 'white' : 'pink'}`}
          />
        </div>
        <div className="relative">
          <div className='overflow-x-auto md:overflow-hidden' ref={containerRef}>
            <ThumbnailsContainer
              movies={movieList}
              theme={`${isNowShowing ? 'dark' : 'light'}`}
            />
          </div>
          <div
            className="hidden md:block absolute -right-6 top-[45%] z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow transition-all hover:opacity-90">
            <img
              className="absolute"
              src="/next-button-icon.svg"
              alt="next button"
              onClick={() => scroll('right')}
            />
          </div>
          <div
            className="hidden md:block absolute -left-6 top-[45%] z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow transition-all hover:opacity-90 transform rotate-180">
            <img
              className="absolute"
              src="/next-button-icon.svg"
              alt="next button"
              onClick={() => scroll('left')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesContainer;
