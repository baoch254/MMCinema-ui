import React from 'react';
import { CINEMA_BRANDS, CinemaBrandKey } from '@mmcinema-ui/shared-common';
import useCinemaBrandStore from '../../stores/cinema-brand-store';

const CinemaBrandSelect = () => {

  const { selectedBrand, setSelectedBrand } = useCinemaBrandStore();

  return (
    <div className="hidden relative -mx-5 border-b border-gray-200 bg-white md:block md:top-0 md:mx-0 pb-2 pt-3 px-5 lg:px-3">
      <div className="flex">
        {
          Object.keys(CINEMA_BRANDS).map((brandKey) => {
            const brand = CINEMA_BRANDS[brandKey as CinemaBrandKey];
            return (
              <div className={`w-16 mr-[2px] cursor-pointer flex flex-col items-center`}
                   key={brandKey}
                   onClick={() => setSelectedBrand(brandKey as CinemaBrandKey)}
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center overflow-hidden border bg-white border-gray-200 ${brandKey as CinemaBrandKey === selectedBrand ? 'border-pink-600' : ''}`}
                  style={{ borderRadius: 8 }}>
                  <img className="" src={brand.logo_url} alt={brand.name} />
                </div>
                <span
                  className={`${brandKey as CinemaBrandKey === selectedBrand ? 'text-pink-600 font-semibold' : ''} truncate w-full text-center ml-1 mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500`}>{brand.name}</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default CinemaBrandSelect;
