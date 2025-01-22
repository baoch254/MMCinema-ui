import React from 'react';

interface Props {
  rating: 'P' | 'K' | '13+' | '16+' | '18+'
}

const AgeRating = ({rating} : Props) => {
  let backgroundColor = ''
  switch (rating) {
    case 'P':
      backgroundColor = 'bg-[#579b41]'
      break
    case 'K':
      backgroundColor = 'bg-[#006ee6]'
      break
    case '13+':
      backgroundColor = 'bg-[#ddbc3f]'
      break
    case '16+':
      backgroundColor = 'bg-[#e88021]'
      break
    case '18+':
      backgroundColor = 'bg-[#9b2020]'
      break
    default:
      console.error('Invalid rating')
  }
  return (
    <div className={`inline-flex rounded-[2px] min-w-[20px] h-5 items-center justify-center bg-opacity-80 px-1 text-xs font-semibold text-white text-opacity-95 ${backgroundColor}`}>
      {rating}
    </div>
  );
};

export default AgeRating;
