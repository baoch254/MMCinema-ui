import React from 'react';
import { CONTENTS_MAX_WIDTH } from '@mmcinema-ui/shared-common';
import PrimarySubTitle from '../atoms/primary-sub-title';
import LocationSelect from '../molecules/location-select';
import CinemaBrandSelect from '../molecules/cinema-brand-select';
import CinemaBranchSelector from '../molecules/cinema-branch-selector';
import ShowtimeSelector from '../molecules/showtime-selector';


const MoviesSchedule = () => {
  return (
    <div className="bg-gray-50  py-8 md:py-10 lg:py-14">
      <div
        className={`mx-auto w-full ${CONTENTS_MAX_WIDTH} px-5 md:px-8 lg:px-8`}
      >
        <div className="mb-5 text-center md:mb-8">
          <PrimarySubTitle text="Lịch chiếu phim" color="pink" />
        </div>
        <div className='rounded-[0.5rem] shadow-custom border border-gray-200'>
          <LocationSelect />
          <CinemaBrandSelect />
          <div className="rounded-b-[0.5rem] bg-white grid grid-cols-1 md:grid-cols-3">
            <CinemaBranchSelector />
            <ShowtimeSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesSchedule;
