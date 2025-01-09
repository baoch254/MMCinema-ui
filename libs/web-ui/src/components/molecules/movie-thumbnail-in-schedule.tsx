import React from 'react';
import MovieThumbnailImage from '../atoms/movie-thumbnail';

interface Props {
  thumbnail_url : string
}

const MovieThumbnailInSchedule = ({ thumbnail_url } : Props) => {
  return (
    <div
      className="relative flex flex-col items-start basis-[33%] flex-none mr-[2.5%] space-y-2 truncate box-border last:mr-0 first:ml-[20px] md:first:ml-0 md:basis-[calc((100%-10%)/5)]"
    >
      <div className="relative overflow-hidden rounded border-blend">
        <MovieThumbnailImage thumbnail_url={thumbnail_url} />
      </div>
    </div>
  );
};

export default MovieThumbnailInSchedule;
