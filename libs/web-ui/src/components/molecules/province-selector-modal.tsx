'use client';
import React, { useState } from 'react';
import { Modal, Button, ConfigProvider } from 'antd';
import { PRIMARY_COLOR, PROVINCES } from '@mmcinema-ui/shared-common';
import { DownOutlined } from '@ant-design/icons';
import useProvinceStore from '../../stores/province-store';

interface Props {
  currentSelected: 'province' | 'near you';
}

const ProvinceSelectorModal = ({ currentSelected }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedProvince, setSelectedProvince } = useProvinceStore()
  const [filteredProvinceList, setFilteredProvinceList] = useState<string[]>(PROVINCES);

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
    setSelectedProvince(province);
  };

  const removeDiacritics = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
  };

  const filterProvinceList = (keyword: string) => {
    const normalizedKeyword = removeDiacritics(keyword.toLowerCase().trim());

    const filtered = PROVINCES.filter((province) => {
      const normalizedProvince = removeDiacritics(province.toLowerCase());
      return normalizedProvince.includes(normalizedKeyword);
    });

    setFilteredProvinceList(filtered);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              defaultBorderColor: `${currentSelected === 'province' ? `${PRIMARY_COLOR}` : ''}`,
              defaultColor: `${currentSelected === 'province' ? `${PRIMARY_COLOR}` : ''}`,
              boxShadow: '0 0 0 rgba(0, 0, 0, 0.02)'
            }
          }
        }}
      >
        <Button type="default" onClick={showModal} className="h-full w-40 flex"
                style={{ padding: 0 }}>
          <div className="relative flex items-center gap-1 w-full h-full">
            <div className="absolute left-2 flex gap-1 items-center font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              {selectedProvince}
            </div>
            <DownOutlined className="absolute right-2" />
          </div>
        </Button>
      </ConfigProvider>
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
        <div className="px-4 md:px-10 h-[750px]">
          <div className="mb-6 flex items-center justify-between">
            <div className="mr-5 whitespace-nowrap text-xl font-bold text-gray-700">Chọn địa điểm</div>
            {/*<SearchTextInput placeholder="Tìm địa điểm ..." />*/}
            <div className="relative">
              <input type="text" placeholder="Tìm địa điểm ..."
                     className="block h-9 w-full items-center justify-center rounded border border-gray-300 bg-white px-3 py-1"
                     onChange={(e) => filterProvinceList(e.target.value)} />
              <button type="submit" aria-label="Search"
                      className="absolute right-2 top-2 border-none opacity-50 outline-none">
                <img src="/search-icon.svg" alt='search icon' className="size-5" />
              </button>
            </div>
          </div>
          <div className="my-3 grid grid-cols-2 gap-1 md:my-5 md:grid-cols-4 md:gap-3 max-h-[700px] overflow-y-auto">
            {filteredProvinceList.map((province) => {
              return (
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBorderColor: `${selectedProvince === province ? `${PRIMARY_COLOR}` : ''}`,
                        defaultColor: `${selectedProvince === province ? `${PRIMARY_COLOR}` : ''}`,
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
                    className={`text-[.9375rem] ${selectedProvince === province ? 'font-semibold' : ''}`}>{province}</span>
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
