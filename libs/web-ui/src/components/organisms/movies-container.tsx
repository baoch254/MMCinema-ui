import React from 'react';
import ThumbnailsContainer from './thumbnails-container';
import { MovieType } from '../../constants/constants-and-types';
import PrimarySubTitle from '../atoms/primary-sub-title';

interface MoviesContainer {
  nowShowing: MovieType[];
  isNowShowing: boolean;
}

const MoviesContainer = ({ nowShowing, isNowShowing }: MoviesContainer) => {
  return (
    <div
      className={`${
        isNowShowing
          ? 'bg-[url(/now-showing-background.jpg)] bg-black'
          : 'bg-white'
      } h-[550px] scroll-margin-top bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14`}
    >
      <div className="flex flex-col mx-auto w-full h-full max-w-6xl px-5 md:px-8 lg:px-8">
        <div className="mb-5 text-center md:mb-8">
          <PrimarySubTitle
            text={`${isNowShowing ? 'Phim đang chiếu' : 'Phim sắp chiếu'}`}
            color={`${isNowShowing ? 'white' : 'pink'}`}
          />
        </div>
        <ThumbnailsContainer
          movies={nowShowing}
          theme={`${isNowShowing ? 'dark' : 'light'}`}
        />
      </div>
    </div>
  );
};

export default MoviesContainer;
