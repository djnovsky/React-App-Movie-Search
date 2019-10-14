import React, { Component } from 'react';
import MovieSearch from './MovieSearch';
import {Route} from 'react-router-dom'


class App extends Component {

  // componentDidMount() {
  //   FetchMovie.getAll().then((movie)=>this.setState({ movie }))
  // }

  render() {
    return (
      <div className='app'>
        <Route exact path="/" render={()=>(
          <MovieSearch />
        )}/>
      </div>
    )
  }
}

export default App;
