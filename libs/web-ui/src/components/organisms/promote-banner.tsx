import React from 'react';
import PrimaryNavigateButton from '../atoms/primary-navigate-button';
import PrimaryTitle from '../atoms/primary-title';
import { CONTENTS_MAX_WIDTH } from '@mmcinema-ui/shared-common';

const PromoteBanner = () => {
  return (
    <div className="flex w-full bg-pink-50 py-8 md:py-10 lg:py-14">
      <div
        className={`mx-auto w-full ${CONTENTS_MAX_WIDTH} grid grid-cols-2 gap-6 px-5 md:px-8 lg:px-8`}
      >
        <div>
          <PrimaryTitle text="Mua vé xem phim Online trên MoMo" />
          <p className="text-lg font-light text-gray-600 mt-2">
            Với nhiều ưu đãi hấp dẫn và kết nối với tất cả các rạp lớn phủ
            rộng khắp Việt Nam. Đặt vé ngay tại MoMo!
          </p>

          <div className="mt-4 grid grid-cols-1 gap-y-3">
            {[
              {
                text: 'Mua vé Online, ',
                bold: 'trải nghiệm phim hay',
              },
              {
                text: 'Đặt vé an toàn ',
                bold: 'trên MoMo',
              },
              {
                text: 'Tha hồ ',
                bold: 'chọn chỗ ngồi, mua bắp nước',
              },
              {
                text: '',
                bold: 'Lịch sử đặt vé',
                end: ' được lưu lại ngay',
              },
            ].map(({ text, bold, end }, index) => (
              <div key={index} className="flex flex-nowrap items-center">
                <img
                  src="/circle-with-tick.svg"
                  alt="circle with tick"
                  className="flex-none"
                />
                <div className="pl-2 text-md text-gray-600">
                  {text}
                  <strong>{bold}</strong>
                  {end}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex space-x-3 md:inline-block md:space-x-4">
            <PrimaryNavigateButton text="ĐẶT VÉ NGAY" />
          </div>
        </div>

        <div className="flex items-center">
          <img src="/promote-img.png" alt="promote" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default PromoteBanner;
