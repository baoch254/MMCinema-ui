import React from 'react';
import { useCinemaBranchStore } from '@mmcinema-ui/shared-stores';
import BranchHeader from './branch-header';
import DateSelector from './date-selector';
import MoviesWithShowtimeContainer from './movies-with-showtime-container';

const SchedulesContainer = () => {
  const { selectedBranch } = useCinemaBranchStore();
  return (
    <div className="relative -mx-5 md:col-span-2 md:mx-0 md:border-l md:border-gray-200 min-h-[300px] h-[550px] overflow-y-auto rounded-br-[0.5rem]">
      {selectedBranch &&
        <>
          <div className="sticky top-0 z-20">
            <BranchHeader />
            <DateSelector />
          </div>
          <MoviesWithShowtimeContainer />
        </>
      }
    </div>
  );
};

export default SchedulesContainer;
