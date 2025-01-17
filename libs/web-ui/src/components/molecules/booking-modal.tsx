'use client'
import React, { useState } from 'react';
import {Button, Modal} from 'antd'
import ArrowIcon from '../svg/arrow-icon';

interface Props {
  isModalOpen : boolean
  setIsModalOpen :  React.Dispatch<React.SetStateAction<boolean>>
}

const BookingModal = ({isModalOpen, setIsModalOpen} : Props) => {


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const ModalHeader = () => {
    return (
      <div className="relative flex shrink-0 items-center bg-pink-600 px-4 py-3 rounded-t-[15px]">
        <div className="justify-star z-[2000]" onClick={() => setIsModalOpen(false)}>
          <ArrowIcon direction='left' colorHex='#ffffff'/>
        </div>
        <b className="grow text-center text-white">Mua vé xem phim</b>
      </div>
    )
  }

  const ModalContent = () => {
    return <div className='bg-white h-full' style={{borderRadius:'15px', height:'90%'}} >
      <ModalHeader/>
      <div>Hello</div>
    </div>
  }

  return (
    <>
      <Modal closable={false} width='75%' style={{borderRadius:'10%', height:'90%'}} modalRender={() => ModalContent()} centered title={ModalHeader()} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      </Modal>
    </>
  );
};

export default BookingModal;
