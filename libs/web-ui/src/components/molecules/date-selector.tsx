import React from 'react';
import { dates } from '@mmcinema-ui/shared-common';
import { useSelectedDateStore } from '@mmcinema-ui/shared-stores';

const DateSelector = () => {

  const {selectedDate, setSelectedDate} = useSelectedDateStore()

  return (
    <div className="z-20 border-b border-gray-200 bg-white py-2 h-[78px] md:top-[62px] sticky">
      <div className="h-[62px] px-5 flex">
        {dates.map((date) => {
          return <div
            key={date.date.toString()}
            className={`w-16 cursor-pointer mr-[8px] h-full overflow-hidden rounded border bg-white py-0 text-center transition-all ${selectedDate?.getTime() === new Date(date.date).getTime() ? 'border-pink-600' : 'border-gray-300 hover:border-gray-400'} `}
            onClick={() => setSelectedDate(new Date(date.date))}
          >
            <div
              className={`${selectedDate?.getTime() === new Date(date.date).getTime() ? 'text-white bg-pink-600' : 'bg-gray-100'} mx-auto justify-center py-1 text-lg  font-semibold`}>
              {new Date(date.date).getDate()}
            </div>
            <div
              className={`${selectedDate?.getTime() === new Date(date.date).getTime() ? 'text-pink-600' : ''} text-nowrap flex h-6 items-center justify-center text-xs text-gray-400`}>
              {date.day}
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default DateSelector;
