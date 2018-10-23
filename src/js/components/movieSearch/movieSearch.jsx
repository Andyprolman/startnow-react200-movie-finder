import React from 'react';
import { Link } from 'react-router-dom';

import {
    updateInput,
    searchForMovie,
    updateMovie,
    getMovieDetails,
} from './movieSearchActions'

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this)
    this.handleSearch = this.handleSearch.bind(this);
    this.getDetails = this.getDetails.bind(this);
    
  }

  handleInput(event){
    const { dispatch } = this.props;
    const { value } = event.target; 
    dispatch(updateInput(value));
  }

  handleSearch(){
      const { dispatch, input, array } = this.props;
      console.log(input)
      dispatch(searchForMovie(input));
      dispatch(updateMovie(input));
      console.log('array: ', array)
  }

  getDetails(id){
      const { dispatch } = this.props;
      dispatch(getMovieDetails(id));
  }

  render() {
      const { input, array } = this.props;
    return (
      <div >
        <div className='text-center'>
            <h1 style={{marginTop: '50px'}}>Movie Finder</h1>
        </div>
        <div className='row'>
            <div className='col-md-11'>
                <input 
                id='search'
                className='form-control' 
                name='movieSearch'
                value = { input }
                onChange={this.handleInput}
                />
            </div>
            <div className='col-md-1'>
                <button 
                id='searchButton'
                name='searchButton'
                className='btn btn-primary'
                onClick={this.handleSearch}
                >
                Search</button>
            </div>
        </div>
        {
            array.map(movie => (
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div id='jumbotron' className='jumbotron' style={{marginTop:'50px'}}>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <img style={{height:'200px'}} src={ movie.Poster }></img>
                        </div>
                        <div className='col-sm-8'>
                            <div>
                                <h1>{ movie.Title }</h1>
                                <h4 name='movie-year'>{ movie.Year}</h4>
                            </div>
                            <div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                    <div className='text-right'>
                        <Link 
                        id='getDetails'
                        className='btn btn-primary'
                        to={`/movie/${movie.imdbID}`}
                        onClick={()=>this.getDetails(movie.imdbID)}
                        >
                        More Details</Link>
                    </div>
                </div>
            </div>  
        </div>
        ))}
      </div>
    )
  }
}

export default MovieSearchContainer;