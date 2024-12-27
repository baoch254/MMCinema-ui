import React from 'react';
import { CONTENTS_MAX_WIDTH } from '@mmcinema-ui/web-ui';
import PrimarySubTitle from '../atoms/primary-sub-title';
import LocationSelect from '../molecules/location-select';


const MoviesSchedule = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-10 lg:py-14">
      <div
        className={`mx-auto w-full ${CONTENTS_MAX_WIDTH} px-5 md:px-8 lg:px-8`}
      >
        <div className='mb-5 text-center md:mb-8'>
          <PrimarySubTitle text='Lịch chiếu phim' color='pink'/>
        </div>
        <LocationSelect/>
      </div>
    </div>
  );
};

export default MoviesSchedule;
