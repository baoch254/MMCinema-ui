'use client'
import React, {useEffect, useState} from 'react';
import getMovies from '../../utils-functions/get-movie-info'
import {MovieType} from '../../constants/constants-and-types'
import {sortByScore} from "../../utils-functions/sort-by-score";
import {getNowShowingMoviews, getUpcomingMovies} from "../../utils-functions/date-categorizer";
import MoviesContainer from "./movies-container";

const MovieShowcase = () => {
    const [nowShowing, setNowShowing] = useState<MovieType[]>();
    const [upcomingMovies, setUpcomingMovies] = useState<MovieType[]>();
    const [loadFinish, setFinish] = useState(false)

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
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
        <>
            {(loadFinish && nowShowing && upcomingMovies) &&
                <>
                    <MoviesContainer nowShowing={nowShowing} isNowShowing={true}/>
                    <MoviesContainer nowShowing={upcomingMovies} isNowShowing={false}/>
                </>
            }
        </>
    );
};

export default MovieShowcase;
