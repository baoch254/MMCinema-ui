import React from 'react';
import PromoteBanner from '../../organisms/promote-banner';
import MovieShowcase from '../../organisms/movie-showcase';

const HomePage = () => {
  return (
    <div className=' relative bg-pink-200 h-[2000px] w-full top-[64px] z-0'>
      <PromoteBanner/>
      <MovieShowcase/>
    </div>
  );
};

export default HomePage;
