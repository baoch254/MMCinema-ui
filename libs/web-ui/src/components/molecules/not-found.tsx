import React from 'react';

interface Props {
  type: 'cinema' | 'schedule'
}

const NotFound = ({type} : Props) => {
  return (
    <div className='py-5 text-center'>
      <div>
        <img className='mx-auto w-[120px] h-[120px]' src='/not-found.svg' alt='not found' />
      </div>
      <div className="mb-0 mt-3 text-lg font-semibold">{type === 'cinema' ? 'Không tìm thấy cụm rạp nào.' : 'Úi, Suất chiếu không tìm thấy.'}</div>
      <div className="text-sm text-gray-500">{type === 'cinema' ? 'Bạn hãy thử lại với phim khác hoặc rạp khác nha!' : 'Bạn hãy thử tìm ngày khác nhé'}</div>
    </div>
  );
};

export default NotFound;
