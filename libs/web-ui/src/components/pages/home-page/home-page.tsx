'use client';

import React, { useRef } from 'react';
import PromoteBanner from '../../organisms/promote-banner';
import MovieShowcase from '../../organisms/movie-showcase';
import ScrollToTopButton from '../../molecules/scroll-to-top-button';
import MoviesSchedule from '../../organisms/movies-schedule';

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative bg-pink-200 h-[2000px] w-full top-[64px] z-0 overflow-y-auto" ref={containerRef}
    >
      <div><PromoteBanner/></div>
      <MovieShowcase />
      <MoviesSchedule/>
      <div className="fixed right-3 bottom-24 z-30 duration-300 sm:bottom-16 sm:right-8 translate-y-0 opacity-100">
        <ScrollToTopButton containerRef={containerRef} />
      </div>
    </div>
  );
};

export default HomePage;
