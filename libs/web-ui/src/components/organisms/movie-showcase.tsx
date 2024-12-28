'use client'
import React, {useEffect, useState} from 'react';
import { getMovieInfo } from '@mmcinema-ui/shared-utils'
import {MovieType} from '@mmcinema-ui/shared-common'
import { sortByScore } from '@mmcinema-ui/shared-utils';
import {getNowShowingMoviews, getUpcomingMovies} from "@mmcinema-ui/shared-utils";
import MoviesContainer from "./movies-container";

const MovieShowcase = () => {
    const [nowShowing, setNowShowing] = useState<MovieType[]>();
    const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>();
    const [loadFinish, setFinish] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovieInfo();
            setNowShowing(sortByScore(getNowShowingMoviews(data), 'desc'));
            setUpcomingMovies(getUpcomingMovies(data));
        };

        fetchMovies();

    }, []);

    useEffect(() => {
        if (nowShowing && upcomingMovies) {
            setFinish(true);
        }
    }, [nowShowing, upcomingMovies]);


    return (
        <div>
            {(loadFinish && nowShowing && upcomingMovies) &&
                <>
                    <MoviesContainer movieList={nowShowing} isNowShowing={true}/>
                    <MoviesContainer movieList={upcomingMovies} isNowShowing={false}/>
                </>
            }
        </div>
    );
};

export default MovieShowcase;
