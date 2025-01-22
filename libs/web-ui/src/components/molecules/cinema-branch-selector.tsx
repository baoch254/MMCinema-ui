import React, { useEffect, useMemo, useState } from 'react';
import { CinemaBranch, CINEMAS } from '@mmcinema-ui/shared-common';
import { useCinemaBrandStore } from '@mmcinema-ui/shared-stores';
import { useProvinceStore } from '@mmcinema-ui/shared-stores';
import { useCinemaBranchStore } from '@mmcinema-ui/shared-stores';
import { Button } from 'antd';
import NotFound from './not-found';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const CinemaBranchSelector = () => {

  const { selectedBrand } = useCinemaBrandStore();
  const { selectedProvince } = useProvinceStore();
  const { selectedBranch, setSelectedBranch } = useCinemaBranchStore();
  const [cinemaList, setCinemaList] = useState<CinemaBranch[] | undefined>();
  const [isLoading, setLoading] = useState(true);
  const [numberOfItemsShown, setNumberOfItemsToShow] = useState(7);

  const showMore = () => {
    if (cinemaList) {
      if (numberOfItemsShown + 7 <= cinemaList.length) {
        setNumberOfItemsToShow(numberOfItemsShown + 7);
      } else {
        setNumberOfItemsToShow(cinemaList.length);
      }
    }
  };

  const itemsToShow = useMemo(() => {
    if (cinemaList) {
      return cinemaList.slice(0, numberOfItemsShown).map((cinema) => {
        return (
          <div key={cinema.name}
               className={`${selectedBranch?.name === cinema.name ? 'bg-pink-50' : 'md:hover:bg-gray-50 cursor-pointer'}`}
               onClick={() => setSelectedBranch(cinema)}>
            <div className="px-4 py-2">
              <div className="flex flex-nowrap items-center">
                <div
                  className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white">
                  <img src={cinema.logo_url} alt="cinema logo" />
                </div>
                <p className="mb-0 min-w-0 flex-1 pl-3 text-md leading-tight text-gray-800">{cinema.name}</p>
                <div className="hidden flex-none self-center pl-2 md:block md:pl-5 ">
                  <img src="/next-button-icon.svg" alt="right arrow" className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>);
      });
    }
  }, [cinemaList, numberOfItemsShown, selectedBranch]);

  const listCinemasByBrandInProvince = (provinceName: string, brandName: string) => {
    const province = CINEMAS.find((p) => p.province === provinceName);

    if (!province) {
      return [];
    }

    if (brandName === 'All') {
      return province.branches;
    }

    const cinemas = province.branches.filter((cinema) => cinema.brand === brandName);

    if (!cinemas) {
      return [];
    }
    return cinemas;
  };

  useEffect(() => {
    const cinemas = listCinemasByBrandInProvince(selectedProvince, selectedBrand);
    setCinemaList(cinemas);
  }, [selectedBrand, selectedProvince]);

  useEffect(() => {
    if (cinemaList) {
      setLoading(false)
      if (cinemaList.length > 0) {
        setSelectedBranch(cinemaList[0]);
      }
      if (cinemaList.length < 7) {
        setNumberOfItemsToShow(cinemaList.length);
      } else {
        setNumberOfItemsToShow(7);
      }
    }
  }, [cinemaList]);


  return (
    <div
      className="border-b border-gray-200 min-h-[300px] h-[550px] overflow-y-auto relative  mx-0 divide-y divide-gray-100">
      <div className="relative z-20 px-3 py-2"><input type="text" placeholder="Tìm theo tên rạp ..."
                                                      className="block h-9 w-full items-center justify-center rounded border border-gray-200 bg-gray-50 py-1 pl-3 pr-10 text-sm"
                                                      value="" />
        <img src="/search-icon.svg" alt="search icon"
             className="h-4 w-4 absolute right-5 top-4 border-none opacity-50 outline-none" />
      </div>
      <div className={`h-[80%] w-full`}>
        <div
          className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity
          ${isLoading ? 'opacity-50 z-10' : 'opacity-0 pointer-events-none'}`}
        >
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}/>
        </div>
        {
          (!isLoading && cinemaList?.length === 0) && (
            <NotFound type='cinema'/>
          )
        }
        {
          (!isLoading && cinemaList && cinemaList.length > 0) && (
            <>
              <div>{itemsToShow}</div>
              {(numberOfItemsShown !== cinemaList.length && numberOfItemsShown >= 7) && (
                <div className="py-5 text-center">
                  <Button type="primary" onClick={showMore}>
                    <p>Xem thêm</p>
                  </Button>
                </div>
              )}
            </>
          )
        }
      </div>
    </div>
  );
};

export default CinemaBranchSelector;
