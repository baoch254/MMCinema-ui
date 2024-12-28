import React from 'react';

interface Props {
  text: string;
  color: 'pink' | 'white';
}

const PrimarySubTitle = ({ text, color }: Props) => {
  return (
    <p className={`text-balance text-2xl font-bold sm:text-wrap lg:text-3xl ${color === 'pink' ? 'text-pink-600' : 'text-white'}`}>
      {text}
    </p>
  );
};

export default PrimarySubTitle;
