import React from 'react';
import PrimaryNavigateButton from '../atoms/primary-navigate-button';
import PrimaryTitle from '../atoms/primary-title';
import { CONTENTS_MAX_WIDTH } from '@mmcinema-ui/web-ui';

const PromoteBanner = () => {

    return (
      <div className="py-8 md:py-10 lg:py-14 bg-pink-50 w-full flex">
        <div className={`mx-auto w-full ${CONTENTS_MAX_WIDTH} px-5 md:px-8 lg:px-8 grid grid-cols-2 gap-6`}>
          <div>
            <PrimaryTitle text='Mua vé xem phim Online trên MoMo'/>
            <p className="text-lg font-light text-gray-600">
              Với nhiều ưu đãi hấp dẫn và kết nối với tất cả các rạp lớn phủ
              rộng khắp Việt Nam. Đặt vé ngay tại MoMo!
            </p>
            <div className="mt-4 grid grid-cols-1 gap-y-3">
              <div className="flex flex-nowrap items-center">
                <img src="/circle-with-tick.svg" alt="circle with tick" />
                <div className="pl-2 text-md text-gray-600">
                  Mua vé Online, <strong>trải nghiệm phim hay</strong>
                </div>
              </div>
              <div className="flex flex-nowrap items-center">
                <img src="/circle-with-tick.svg" alt="circle with tick" />
                <div className="pl-2 text-md text-gray-600">
                  <strong>Đặt vé an toàn</strong> trên MoMo
                </div>
              </div>
              <div className="flex flex-nowrap items-center">
                <img src="/circle-with-tick.svg" alt="circle with tick" />
                <div className="pl-2 text-md text-gray-600">
                  Tha hồ <strong>chọn chỗ ngồi, mua bắp nước</strong> tiện lợi.
                </div>
              </div>
              <div className="flex flex-nowrap items-center">
                <img src="/circle-with-tick.svg" alt="circle with tick" />
                <div className="pl-2 text-md text-gray-600">
                  <strong>Lịch sử đặt vé</strong> được lưu lại ngay
                </div>
              </div>
            </div>
            <div className="flex space-x-3 md:space-x-4 md:inline-block mt-7">
              <PrimaryNavigateButton text="ĐẶT VÉ NGAY" />
            </div>
          </div>
          <div className="flex items-center">
            <img src="/promote-img.png" alt="promote image" />
          </div>
        </div>
      </div>
    );
};

export default PromoteBanner;
