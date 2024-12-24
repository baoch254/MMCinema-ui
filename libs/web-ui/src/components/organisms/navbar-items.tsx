import React from 'react';
import ButtonWithDropdown from '../molecules/button-with-dropdown';
import { blogItems, cinemaItems, scheduleItems } from '../../constants/constants-and-types';
import {Button} from "antd";

const NavbarItems = () => {
  return (
    <>
      <ButtonWithDropdown items={scheduleItems.items} title={scheduleItems.title}/>
      <ButtonWithDropdown items={cinemaItems.items} title={cinemaItems.title}/>
      <Button type='text'><a className='font-bold'>Phim chiếu</a></Button>
      <Button type='text'><a className='font-bold'>Review phim</a></Button>
      <Button type='text'><a className='font-bold'>Top phim</a></Button>
      <ButtonWithDropdown items={blogItems.items} title={blogItems.title}/></>
  );
};

export default NavbarItems;
