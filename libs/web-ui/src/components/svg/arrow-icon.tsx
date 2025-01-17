import React from 'react';

interface Props {
  colorHex: string,
  direction: 'up' | 'left' | 'down' | 'right'
}

const ArrowIcon = ({colorHex, direction} : Props) => {
  let rotateClass
  switch(direction) {
    case 'up':
      rotateClass='rotate-270'
      break
    case 'right':
      rotateClass='rotate-0'
      break
    case 'down':
      rotateClass='rotate-90'
      break
    case 'left':
      rotateClass='rotate-180'
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke={`${colorHex}`}
         className={`size-6 ${rotateClass}`}>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"
            ></path>
    </svg>
  );
};

export default ArrowIcon;
