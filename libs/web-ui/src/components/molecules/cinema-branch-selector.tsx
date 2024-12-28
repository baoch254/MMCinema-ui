import React, { useEffect, useState } from 'react';
import { CinemaBrandKey, CINEMAS } from '@mmcinema-ui/shared-common';
import useCinemaBrandStore from '../../stores/cinema-brand-store';
import useProvinceStore from '../../stores/province-store';


const CinemaBranchSelector = () => {

  const { selectedBrand, setSelectedBrand } = useCinemaBrandStore();
  const { selectedProvince, setSelectedProvince } = useProvinceStore()
  const [cinemaList, setCinemaList] = useState<{id: string, name: string, address: string}[]>()

  const listCinemasByBrandInProvince = (provinceName: string, brandKey: CinemaBrandKey) => {
    const province = CINEMAS.find((p) => p.name === provinceName);

    if (!province) {
      return [];
    }
    if (!(brandKey in province.brands)) {
      return [];
    }
    return province.brands[brandKey as keyof typeof province.brands];
  };

  useEffect(() => {
    setCinemaList(listCinemasByBrandInProvince(selectedProvince, selectedBrand))
  }, [selectedBrand, selectedProvince])

  return (
    <div className="border-r border-gray-200 min-h-[300px] h-[550px] overflow-y-auto relative  mx-0 divide-y divide-gray-100">
      <div className="relative z-20 px-3 py-2"><input type="text" placeholder="Tìm theo tên rạp ..."
                                                      className="block h-9 w-full items-center justify-center rounded border border-gray-200 bg-gray-50 py-1 pl-3 pr-10 text-sm"
                                                      value="" />
        <img src="/search-icon.svg" alt="search icon"
             className="h-4 w-4 absolute right-5 top-4 border-none opacity-50 outline-none" />
      </div>
      {
        (cinemaList && cinemaList.length !== 0) ? cinemaList.map((cinema) => {
          return <div>{cinema.name}</div>
        }) :
          <div>Không tìm thấy rạp nào</div>
      }
    </div>
  );
};

export default CinemaBranchSelector;
