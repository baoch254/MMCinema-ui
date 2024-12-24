import React from 'react';

interface Props {
  text : string
}

const PrimaryTitle = ({text} : Props) => {
  return (
    <div className="mb-2 text-2xl font-bold text-pink-600 md:mb-6 md:text-3xl lg:text-4xl">
      {text}
    </div>
  );
};

export default PrimaryTitle;
