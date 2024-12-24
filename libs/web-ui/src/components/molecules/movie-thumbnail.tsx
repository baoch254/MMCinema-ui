import React from 'react';
import getGenre from "../../utils-functions/get-genre-list";

interface MovieThumbnailProps {
    rank: number,
    id: number,
    title: string,
    vote_average: number,
    release_date: string,
    thumbnail_url: string,
    genre_ids: number[],
    theme: 'light' | 'dark',
}

const MovieThumbnail = ({
                            rank,
                            id,
                            title,
                            thumbnail_url,
                            release_date,
                            vote_average,
                            genre_ids,
                            theme
                        }: MovieThumbnailProps) => {

    const genre = React.useMemo(() => getGenre(genre_ids), [genre_ids]);
    const genreList = genre.join(', ');

    return (
        <div
            className="relative flex basis-[33%] first:ml-[20px] md:first:ml-0 md:basis-[calc((100%-10%)/5)] flex-none flex-col mr-[2.5%] box-border last:mr-0 items-start space-y-2 truncate">
                <div className="relative overflow-hidden border-blend rounded">
                    <img
                        className="object-fill object-center aspect-[2/3] transition-transform duration-300 hover:scale-[1.1]"
                        loading="lazy"
                        src={thumbnail_url}
                        alt="movie thumbnail"
                    />
                    {theme === 'dark' && <p className={`absolute bottom-[-5px] text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-black'} drop-shadow-2xl`}
                    style={{textShadow : '3px 3px 2px black'}}>{rank}</p>}
                </div>
            <div>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} font-bold`}>{title}</p>
                <div>
                    <p className="text-gray-400 text-xs">
                        {genreList}
                    </p>
                </div>
                <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} flex items-center text-xs`}><img className='size-4' src='/star-icon.svg'
                                                                         alt='star'/>{vote_average}</p>
            </div>
        </div>

    );
};

export default MovieThumbnail;
