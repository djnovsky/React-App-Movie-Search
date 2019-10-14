import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import * as FetchMovie from './utils/FetchMovie';
import MovieCard from './movie-card';

class MovieSearch extends Component {

    state = {}

    updateQuery() {
        let search = document.getElementById('search').value
        FetchMovie.getMovie(search).then((searchedMovie)=>{
            console.log(searchedMovie)
            this.setState({...searchedMovie})})
    }

    render() {
        return(
            <div className='movie-search'>
                 <div className='movie-search-top'>
                     <input 
                     id='search'
                     className='search-contacts' 
                     type='text' 
                     placeholder='Enter movie title'
                     ></input>
                     <button onClick={()=>this.updateQuery()}
                     className='search-button'
                     >Search</button>
                 </div>
                    {this.state.Title !== undefined &&
                        <MovieCard movie={this.state}/>
                    }
                 
            </div>
         )
    }
    
}

export default MovieSearch;