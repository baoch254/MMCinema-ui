'use client'
import React, { useState } from 'react';
import BookingModal from '../molecules/booking-modal';

interface Props {
  showing : {
    format: string,
    time:  string[]
  },
  runtime : number
}

const ShowtimeButtons = ({showing, runtime} : Props) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return <div key={showing.format} className="mb-4 mt-4">
    <div className="mb-2 text-sm font-semibold">
      {showing.format}
    </div>
    <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {showing.time.map((time, i) => {
        const [hour, minutes] = time.split(':').map(Number);
        const startDate = new Date()
        startDate.setHours(hour)
        startDate.setMinutes(minutes)
        const endDate = new Date(startDate)
        endDate.setMinutes(startDate.getMinutes() + runtime)
        const formattedStartTime = startDate.toTimeString().slice(0,5)
        const formattedEndTime = endDate.toTimeString().slice(0,5)
        return <div key={i}
                    className="text-tiny group cursor-pointer whitespace-nowrap rounded-[5px] border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500"
                    onClick={() => setIsModalOpen(true)}
        >
          <strong className="text-[.9375rem] font-semibold ">{formattedStartTime}</strong> <span className='text-sm'>~ {formattedEndTime}</span>
        </div>
      })}
    </div>
    <BookingModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
  </div>
};

export default ShowtimeButtons;
