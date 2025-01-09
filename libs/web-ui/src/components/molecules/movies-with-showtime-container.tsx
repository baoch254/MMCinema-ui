'use client';
import React, { useEffect, useState } from 'react';
import MovieThumbnailInSchedule from './movie-thumbnail-in-schedule';
import { CINEMAS } from '@mmcinema-ui/shared-common';
import {
  useCinemaBranchStore,
  useSelectedDateStore,
  useProvinceStore,
  useMoviesStore
} from '@mmcinema-ui/shared-stores';
import { getGenre, getMovieInfoFromId} from '@mmcinema-ui/shared-utils'
import AgeRating from '../atoms/age-rating';

type MovieInfo = {
  title: string,
  thumbnail_url: string,
  genres: string[],
  showings: {
    format: string,
    time: string[]
  }[]
}

const MoviesWithShowtimeContainer = () => {
  const { moviesList } = useMoviesStore();
  const { selectedBranch } = useCinemaBranchStore();
  const { selectedDate } = useSelectedDateStore();
  const { selectedProvince } = useProvinceStore();
  const [showingMoviesInfo, setshowingMoviesInfo] = useState<MovieInfo[]>([]);

  useEffect(() => {
    if (moviesList) {
      const province = CINEMAS.find((cinema) => cinema.province === selectedProvince);
      const branch = province?.branches.find((branch) => branch.name === selectedBranch?.name);
      const nowShowing = branch?.nowShowing?.filter((nowShowing) => {
        return nowShowing.showings.some((showing) => {
          return new Date(showing.date).getTime() === selectedDate?.getTime();
        });
      });
      const moviesShowing: MovieInfo[] = [];
      nowShowing?.forEach((movie) => {
        const movieFromId = getMovieInfoFromId(moviesList, movie.movieId);
        if (movieFromId) {
          const genres = getGenre(movieFromId.genre_ids);
          const formatTimeInfo : {
            format: string,
            time: string[]
          }[] = []
          const nowShowingMoviesInfo = movie.showings.find((showing) =>
            new Date(showing.date).getTime() === selectedDate?.getTime()
          )
          nowShowingMoviesInfo?.info.forEach((info) => {
            formatTimeInfo.push(info)
          })
          moviesShowing.push({
            title: movieFromId.title,
            thumbnail_url: movieFromId.poster_path,
            genres: genres,
            showings: formatTimeInfo
          });
        }
      });
      setshowingMoviesInfo(moviesShowing);
    }
  }, [moviesList, selectedBranch, selectedDate]);

  return (
    <div className="w-full">
      {(showingMoviesInfo && showingMoviesInfo.length > 0) && showingMoviesInfo.map((movie) => {
        return <div key={movie.title} className="grid border-b border-gray-200">
          <div className="w-full p-4 text-left">
            <div className="grid gap-x-4 gap-y-0 md:gap-x-4 lg:gap-x-6"
                 style={{ gridTemplate: 'auto 1fr / 120px minmax(0, 1fr)' }}>
              <div className="col-start-1 row-span-2 row-start-1">
                <MovieThumbnailInSchedule
                  thumbnail_url={`https://image.tmdb.org/t/p/w1280${movie.thumbnail_url}`} />
              </div>
              <div className="col-start-2">
                <div className="mb-1 flex origin-left scale-90 flex-row  flex-nowrap space-x-2">
                  <AgeRating rating="P" />
                </div>
                <div className="font-semibold leading-tight text-gray-800 cursor-pointer">{movie.title}</div>
                <div className="text-sm mt-1 leading-tight text-gray-400">{movie.genres.toString()}</div>
              </div>
              <div className="col-span-2 col-start-1 md:col-start-2">
                  {movie.showings.map((showing) => {
                    return <div key={showing.format} className="mb-4 mt-4">
                      <div className="mb-2 text-sm font-semibold">
                        {showing.format}
                      </div>
                      <div className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-4">
                        {showing.time.map((time, i) => {
                          return <div key={i}
                            className="text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500">
                            <strong className="text-md font-semibold ">{time}</strong>
                          </div>
                        })}
                      </div>
                    </div>
                  })}
              </div>
            </div>
          </div>
        </div>;
      })
      }
    </div>
  );
};

export default MoviesWithShowtimeContainer;
