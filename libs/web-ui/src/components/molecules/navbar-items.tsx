import React from 'react';
import ButtonWithDropdown from './button-with-dropdown';
import { blogItems, cinemaItems, scheduleItems } from '@mmcinema-ui/shared-common';
import {Button} from "antd";

const NavbarItems = () => {
  return (
    <>
      <ButtonWithDropdown items={scheduleItems.items} title={scheduleItems.title}/>
      <ButtonWithDropdown items={cinemaItems.items} title={cinemaItems.title}/>
      <Button type='text'><a href='/' className='font-bold'>Phim chiếu</a></Button>
      <Button type='text'><a href='/' className='font-bold'>Review phim</a></Button>
      <Button type='text'><a href='/' className='font-bold'>Top phim</a></Button>
      <ButtonWithDropdown items={blogItems.items} title={blogItems.title}/></>
  );
};

export default NavbarItems;
