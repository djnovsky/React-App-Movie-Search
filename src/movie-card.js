import React from 'react';

export default function (props) {
    console.log(props.movie)
    const movie = props.movie;
    return(
        
        <div className='movie-card'>
            <div className='image-place'>
            { movie.Poster === 'N/A' &&
                    <img src='https://kinoframe.net/films/15/15842/medium.jpg' alt='movie-poster'/>
            } {movie.Poster !== 'N/A' &&
                    <img src={movie.Poster} alt='movie-poster'/>
                } 
            </div>
            <div className='movie-info'>
                <h2>{movie.Title}</h2>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Description:</strong> {movie.Plot}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Rated:</strong> {movie.Rated}</p>
            </div>
        </div>
    )
}