'use client';
import React, { useState } from 'react';
import { Modal, Button, ConfigProvider } from 'antd';
import { PROVINCES } from '../../constants/constants-and-types';
import SearchTextInput from './search-text-input';

const ProvinceSelectorModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProvince, setProvince] = useState('Tp. Hồ Chí Minh');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleProvinceSelect = (province: string) => {
    setIsModalOpen(false);
    setProvince(province);
  };

  return (
    <>
      <Button type="default" onClick={showModal} className="group font-semibold hover:bg-gray-50 h-9 w-40 flex"
              style={{ justifyContent: 'left'}}>
        <div className="flex items-center mt-1 gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               className="h-4 w-4">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  className="jsx-ef3e391d68e5bac"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  className="jsx-ef3e391d68e5bac"></path>
          </svg>
          {currentProvince}
        </div>
      </Button>
      <Modal open={isModalOpen}
             onCancel={handleCancel}
             title={<button></button>}
             width={800}
             centered
             footer={[
               <div className="flex items-center justify-end border-t border-gray-200 py-2 px-5 md:py-4 mb-[-20px]">
                 <Button key="submit" type="primary" onClick={handleOk}>
                   <strong>Đóng</strong>
                 </Button>
               </div>
             ]}>
        <div className="px-4 md:px-10 max-h-[750px]">
          <div className="mb-6 flex items-center justify-between">
            <div className="mr-5 whitespace-nowrap text-xl font-bold text-gray-700">Chọn địa điểm</div>
            <SearchTextInput placeholder="Tìm địa điểm ..." />
          </div>
          <div className="my-3 grid grid-cols-2 gap-1 md:my-5 md:grid-cols-4 md:gap-3 max-h-[700px] overflow-y-auto">
            {PROVINCES.map((province) => {
              return (
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBorderColor: `${currentProvince === province ? '#cb0c70' : ''}`,
                        defaultColor: `${currentProvince === province ? '#cb0c70' : ''}`,
                        boxShadow: '0 0 0 rgba(0, 0, 0, 0.02)'
                      }
                    }
                  }}
                >
                  <Button type="default" onClick={() => handleProvinceSelect(province)}
                          className="whitespace-nowrap px-3 py-2 flex items-center"
                          size="large"
                          style={{ boxShadow: '0 0 0', justifyContent: 'left' }}
                  ><span
                    className={`text-[.9375rem] ${currentProvince === province ? 'font-semibold' : ''}`}>{province}</span>
                  </Button>
                </ConfigProvider>

              );
            })}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProvinceSelectorModal;
