import React from 'react';
import { CONTENTS_MAX_WIDTH } from '@mmcinema-ui/web-ui';
import PrimarySubTitle from '../atoms/primary-sub-title';
import ProvinceSelectorModal from '../molecules/province-selector-modal';
import { Button } from 'antd';


const MoviesSchedule = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-10 lg:py-14">
      <div
        className={`mx-auto w-full ${CONTENTS_MAX_WIDTH} px-5 md:px-8 lg:px-8`}
      >
        <div className='mb-5 text-center md:mb-8'>
          <PrimarySubTitle text='Lịch chiếu phim' color='pink'/>
        </div>
        <div className='md:shadow-custom rounded-[0.5rem] border-gray-200 bg-white md:overflow-hidden md:border'>
          <div className='relative z-10'>
            <div className='flex items-center  pt-3 md:px-4'>
              <div className='mr-3 hidden md:block'>Vị trí</div>
              <div className='h-full'><ProvinceSelectorModal/></div>
              <Button type='default'>Gần bạn</Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesSchedule;
