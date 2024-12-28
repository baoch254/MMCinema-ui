import React from 'react';
import { CINEMA_BRANDS } from '@mmcinema-ui/shared-common';
import useCinemaBrandStore from '../../stores/cinema-brand-store';

const CinemaBrandSelect = () => {

  const { selectedBrand, setSelectedBrand } = useCinemaBrandStore();

  return (
    <div
      className="hidden relative -mx-5 border-b border-gray-200 bg-white md:block md:top-0 md:mx-0 pb-2 pt-3 px-5 lg:px-3">
      <div className="flex">
        <div className={`w-16 mr-[2px] cursor-pointer flex flex-col items-center`}
             onClick={() => setSelectedBrand('All')}
        >
          <div
            className={`mx-auto flex h-12 w-12 items-center justify-center overflow-hidden border bg-white border-gray-200 ${selectedBrand === 'All' ? 'border-pink-600' : ''}`}
            style={{ borderRadius: 8 }}>
            <img className="" src="/dexuat-icon.svg" alt="De xuat" />
          </div>
          <span
            className={`${selectedBrand === 'All' ? 'text-pink-600 font-semibold' : ''} truncate w-full text-center ml-1 mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500`}>All</span>
        </div>
        {
          CINEMA_BRANDS.map((cinema) => {
            return <div className={`w-16 mr-[2px] cursor-pointer flex flex-col items-center`}
                        key={cinema.name}
                        onClick={() => setSelectedBrand(cinema.name)}
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center overflow-hidden border bg-white border-gray-200 ${cinema.name === selectedBrand ? 'border-pink-600' : ''}`}
                style={{ borderRadius: 8 }}>
                <img className="" src={cinema.logo_url} alt={cinema.name} />
              </div>
              <span
                className={`${cinema.name === selectedBrand ? 'text-pink-600 font-semibold' : ''} truncate w-full text-center ml-1 mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-500`}>{cinema.name}</span>
            </div>;
          })
        }
      </div>
    </div>
  );
};

export default CinemaBrandSelect;
