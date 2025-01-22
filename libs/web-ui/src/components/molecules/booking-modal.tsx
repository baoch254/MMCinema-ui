'use client';
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import ArrowIcon from '../svg/arrow-icon';
import { CinemaRoomType } from '@mmcinema-ui/shared-common';
import AgeRating from '../atoms/age-rating';
import { useSelectedDateStore, useShowtimeStore, useMovieFormatStore } from '@mmcinema-ui/shared-stores';
import {getCinemaRoomFromId} from '@mmcinema-ui/shared-utils'
import SeatTypeIndicator from './seat-type-indicator';

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  movieTitle : string
  cinemaBranch : string | undefined
  cinemaRoomId :  number | undefined
}

const BookingModal = ({ isModalOpen, setIsModalOpen, movieTitle, cinemaBranch, cinemaRoomId }: Props) => {
  const [seatsMap, setSeatsMap] = useState<string[][]>([])
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const {selectedShowtime} = useShowtimeStore()
  const { selectedDate } = useSelectedDateStore();
  const { selectedFormat } = useMovieFormatStore()
  const [cinemaRoomInfo, setCinemaRoomInfo] = useState<CinemaRoomType | undefined>()
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedSeats([])
  };

  const ModalHeader = () => {
    return (
      <div className="relative flex shrink-0 items-center bg-pink-600 px-4 py-3 rounded-t-[7px]">
        <div className="justify-start z-[2000] cursor-pointer transition hover:opacity-80"
             onClick={() => setIsModalOpen(false)}>
          <ArrowIcon direction="left" colorHex="#ffffff" />
        </div>
        <b className="grow text-center text-white">Mua vé xem phim</b>
      </div>
    );
  };

  const generateSeatMap = () => {

    const seatsConfig = cinemaRoomInfo?.seatsConfig;

    const seatsMap: string[][] = [];

    if (seatsConfig && seatsConfig.rows && seatsConfig.columns) {
      let seatChar = 'A';

      for (let row = 1; row <= seatsConfig.rows; row++) {
        const seatRow: string[] = [];
        const gapsConfig = seatsConfig.gaps.find(
          (rowWithGaps) => rowWithGaps.row === row
        );
        if (gapsConfig && gapsConfig.columns && gapsConfig.columns.length) {
          let seatNumber = seatsConfig.columns - gapsConfig.columns.length;

          for (let col = seatsConfig.columns; col >= 1 || seatNumber >= 1; col--) {
            if (gapsConfig?.columns.includes(col)) {
              seatRow.push('');
            } else {
              let seatType = '';
              if (seatsConfig.sweetboxRow === row) {
                seatType = 'SW';
              } else if (seatsConfig.normalSeatRows.includes(row)) {
                seatType = 'N';
              } else {
                seatType = 'V';
              }
              seatRow.push(`${seatChar}${seatNumber}:${seatType}`);
              seatNumber--;
            }
          }

          seatsMap.push(seatRow);
          seatChar = String.fromCharCode(seatChar.charCodeAt(0) + 1);
        }
      }
    }

    return seatsMap;
  };

  useEffect(() => {
    if (cinemaBranch && cinemaRoomId) {
      const cinemaRoomInfo = getCinemaRoomFromId(cinemaBranch, cinemaRoomId);
      if (cinemaRoomInfo) {
        setCinemaRoomInfo(cinemaRoomInfo)
        setSeatsMap(generateSeatMap());
      }
    }
  }, [cinemaBranch, cinemaRoomId, cinemaRoomInfo]);

  const handleSelectSeats = (seat : string) => {
    if (selectedSeats.find((seatId) => seatId === seat)) {
      setSelectedSeats((prevState) => prevState.filter((selectedSeat) => selectedSeat !== seat))
    } else {
      setSelectedSeats((prevState) => [...prevState, seat])
    }
  }

  return (
    <>
      <Modal closable={false} width="90%"
             style={{ borderRadius: '10%', maxWidth: '900px' }}
             title={ModalHeader()} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
             wrapClassName="modal-in-booking">
        <div className="bg-white w-full">
          <div className="w-full bg-[#262626] flex flex-col justify-center items-center p-[20px] mt-[-10px]">
            <div className="mb-3 w-full basis-full px-20 pt-3 text-center text-white lg:mb-6 lg:px-40">
              <div className="mx-auto mb-1 h-1 w-64 rounded-[10px] bg-white"></div>
              <div className="text-xs lg:text-sm">MÀN HÌNH</div>
            </div>
            <div className="w-full h-full bg-[#262626] flex gap-2 flex-col items-center">
              {seatsMap.length > 0 &&
                seatsMap.map((seatConfig, rowIndex) => (
                  <div key={rowIndex} className="flex gap-2 justify-center w-full">
                    {seatConfig.map((seat, seatIndex) => {
                      const seatType = seat.split(':')[1] as 'N' | 'V' | 'SW';
                      const seatId = seat.split(':')[0]
                      let seatColor = '';
                      let borderColor = 'transparent'
                      if (selectedSeats.find((seatId) => seatId === seat)) {
                        seatColor = '#EC2F96';
                        borderColor = '#FFFFFF';
                      }
                      else if (seatType === 'N') {
                        seatColor = '#722ED1';
                      } else if (seatType === 'V') {
                        seatColor = '#F5222D';
                      } else if (seatType === 'SW') {
                        seatColor = '#EC2F96';
                      }
                      return (
                        <div
                          key={seatIndex}
                          className={`flex rounded-[5px] cursor-pointer justify-center items-center text-white transition hover:opacity-80 box-border`}
                          style={{
                            backgroundColor: seatColor,
                            width: 'calc(100% / 22)',
                            aspectRatio: '1 / 1',
                            maxWidth: '2.25rem',
                            fontSize: 'min(1.3vw, 1.3vh)',
                            borderColor: borderColor,
                            borderWidth: 2,
                          }}
                          onClick={() => handleSelectSeats(seat)}
                        >
                          {seatId}
                        </div>
                      );
                    })}
                  </div>
                ))}
              <SeatTypeIndicator/>
            </div>
          </div>
          <div className='rounded-t-xl bg-white px-4 py-4 sm:rounded-t-none '>
            <div className='grid grid-cols-1 divide-y divide-gray-200 text-sm'>
              <div className='pb-2'>
                <div className="flex items-center space-x-2 pb-1">
                  <AgeRating rating="16+" />
                  <div><b className="line-clamp-1 text-base md:line-clamp-none ">{movieTitle}</b></div>
                </div>
                <div><span className="block text-tiny text-orange-500 lg:text-sm"> {selectedShowtime} · T{selectedDate?.getDay()}, {selectedDate?.getDate()}/{selectedDate?.getMonth()} · {cinemaRoomInfo?.roomName} · {selectedFormat}</span>
                </div>
              </div>
              <div className='flex  items-center justify-between space-x-3 py-1.5'>
                <span className='shrink-0 text-gray-500'>Chỗ ngồi</span>
                {selectedSeats.length > 0 && <div className="flex items-center space-x-2 rounded-xl border border-gray-200 px-3 py-1">
                  <span>{selectedSeats.join(', ')}</span>
                  <div onClick={() => setSelectedSeats([])}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(239 68 68)" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" aria-hidden="true"
                         className="h-6 shrink-0 cursor-pointer text-white transition-all hover:opacity-70">
                      <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>}
              </div>
            </div>
          </div>
        </div>

      </Modal>
    </>
  );
};

export default BookingModal;
