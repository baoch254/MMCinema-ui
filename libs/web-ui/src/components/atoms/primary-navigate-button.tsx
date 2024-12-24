import React from 'react';
import { Button } from 'antd';

interface Props {
  text : string
}

const PrimaryNavigateButton = ({text} : Props) => {
  return (
      <Button type='primary'>
        <p className='font-extrabold'>{text}</p>
      </Button>
  );
};

export default PrimaryNavigateButton;
