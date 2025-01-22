import React from 'react';

const SeatTypeIndicator = () => {
  return (
    <div className="mt-3 w-full  px-4 text-xs text-white ">
      <div className="mx-auto grid w-fit grid-cols-3 gap-x-2 gap-y-2">
        <div className="flex items-center space-x-1.5">
          <div className="h-4 w-4 shrink-0 rounded-sm bg-gray-700 "></div>
          <span>Đã đặt</span></div>
        <div className="flex items-center space-x-1.5">
          <div className="h-4 w-4 shrink-0 rounded-sm border border-white bg-pink-600"></div>
          <span>Ghế bạn chọn</span></div>
        <div className="flex items-center space-x-1.5">
          <div className="h-4 w-4 shrink-0 rounded-sm bg-[#722ED1]"></div>
          <span className="break-all">Ghế thường</span></div>
        <div className="flex items-center space-x-1.5">
          <div className="h-4 w-4 shrink-0 rounded-sm bg-[#F5222D]"></div>
          <span className="break-all">Ghế VIP</span></div>
        <div className="flex items-center space-x-1.5">
          <div className="h-4 w-4 shrink-0 rounded-sm bg-[#EC2F96]"></div>
          <span className="break-all">Ghế Sweetbox</span></div>
        <div className="flex items-center space-x-1.5">
          <div className="h-4 w-4 shrink-0 rounded-sm border border-green-300"></div>
          <span>Vùng trung tâm</span></div>
      </div>
      <span
        className="mt-2 block cursor-pointer text-center transition-all hover:opacity-70 "><b><u>Xem chi tiết</u></b> hình ảnh và thông tin ghế</span>
    </div>
  );
};

export default SeatTypeIndicator;
