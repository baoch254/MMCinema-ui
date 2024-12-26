import React from 'react';
import getGenre from '../../utils-functions/get-genre-list';
import MovieThumbnailImage from '../atoms/movie-thumbnail';

interface MovieThumbnailProps {
  rank: number;
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  thumbnail_url: string;
  genre_ids: number[];
  theme: 'light' | 'dark';
}

const MovieThumbnail = ({
                          rank,
                          title,
                          thumbnail_url,
                          vote_average,
                          genre_ids,
                          theme,
                        }: MovieThumbnailProps) => {
  const genreList = React.useMemo(() => getGenre(genre_ids).join(', '), [genre_ids]);

  return (
    <div
      className="relative flex flex-col items-start basis-[33%] flex-none mr-[2.5%] space-y-2 truncate box-border last:mr-0 first:ml-[20px] md:first:ml-0 md:basis-[calc((100%-10%)/5)]"
    >
      <div className="relative overflow-hidden rounded border-blend">
        <MovieThumbnailImage thumbnail_url={thumbnail_url} />
        {theme === 'dark' && (
          <p
            className="absolute bottom-[-5px] text-5xl font-extrabold text-white drop-shadow-2xl"
            style={{ textShadow: '3px 3px 2px black' }}
          >
            {rank}
          </p>
        )}
      </div>

      <div>
        <div className="group cursor-pointer">
          <p
            className={`font-bold group-hover:text-pink-400 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
          >
            {title}
          </p>
          <p className="text-xs text-gray-400 group-hover:text-pink-400">{genreList}</p>
        </div>

        <p
          className={`flex items-center text-xs ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}
        >
          <img className="w-4 h-4 mr-1" src="/star-icon.svg" alt="star icon" />
          {Math.round(vote_average * 10) / 10}
        </p>
      </div>
    </div>
  );
};

export default MovieThumbnail;
