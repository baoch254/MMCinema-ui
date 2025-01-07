import React from 'react';

const CinemaNotFound = () => {
  return (
    <div className='py-5 text-center'>
      <div>
        <img className='mx-auto w-[120px] h-[120px]' src='/not-found.svg' alt='not found' />
      </div>
      <div className="mb-0 mt-3 text-lg font-semibold"> Không tìm thấy cụm rạp nào.</div>
      <div className="text-sm text-gray-500">Bạn hãy thử lại với phim khác hoặc rạp khác nha!</div>
    </div>
  );
};

export default CinemaNotFound;
