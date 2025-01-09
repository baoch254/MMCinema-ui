import React from 'react';
import { useCinemaBranchStore } from '@mmcinema-ui/shared-stores';

const BranchHeader = () => {
  const { selectedBranch } = useCinemaBranchStore();

  return (
    <div className="flex h-[62px] items-center bg-gray-50 px-4 pb-2.5 pt-2.5">
      <img
        className="cursor-pointer flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white"
        src={selectedBranch?.logo_url} alt="cinema logo" />
      <div className="min-w-0 flex-1 flex-col md:pl-3 flex">
        <div className="mb-0 text-md font-semibold leading-tight text-gray-800"><p
          className="text-gray-800 hover:text-pink-500 cursor-pointer ">Lịch chiếu phim {selectedBranch?.name}</p>
        </div>
        <div className="flex flex-nowrap items-center text-[.8125rem] text-gray-500">
          <p className="truncate">{selectedBranch?.address}</p>
          <div className="pl-2">
            <button
              className="inline-block  text-blue-500 whitespace-nowrap relative z-10 hover:text-blue-700 cursor-pointer">
              [ Bản đồ ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchHeader;
