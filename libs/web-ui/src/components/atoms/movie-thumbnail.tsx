import React from 'react';

interface Props {
  thumbnail_url : string
}

const MovieThumbnailImage = ({thumbnail_url} : Props) => {
  return (
    <img
      className="object-fill object-center aspect-[2/3] transition-transform duration-300 hover:scale-[1.1]"
      loading="lazy"
      src={thumbnail_url}
      alt="movie thumbnail"
    />
  );
};

export default MovieThumbnailImage;
