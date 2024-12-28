import React from 'react';
import MovieThumbnail from "../molecules/movie-thumbnail";
import { MovieType } from '@mmcinema-ui/shared-common'

interface MovieShowcaseContainerProps {
    movies : MovieType[],
    theme: 'light' | 'dark'
}

const ThumbnailsContainer = ({movies, theme} : MovieShowcaseContainerProps) => {
    return (
        <div className='-mx-5 md:mx-0 h-full flex border-box no-scrollbar'>
            {movies.map((movie, i) => (
                <MovieThumbnail
                    key={i}
                    id={movie.id}
                    title={movie.title}
                    thumbnail_url={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                    genre_ids={movie.genre_ids}
                    rank={i + 1}
                    theme={theme}
                />
            ))}
        </div>
    );
};

export default ThumbnailsContainer;
