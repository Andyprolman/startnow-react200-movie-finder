import React from 'react';
import { Link } from 'react-router-dom';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { details } = this.props;
    return (
      <div>
        <div>
          <Link to='/'>Back</Link>
        </div>
        <div className='text-center'>
          <h1 style={{marginBottom:'50px'}}> Welcome to Movie Finder</h1>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-4' style-={{paddingLeft:'100px'}}>
            <img src={ details.Poster } style={{height: '371px', width:'320px'}}></img>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div style={{backgroundColor:'#ccf2ff'}} className='card-header'>Movie Details</div>
              <div className='card-body text-center'>
                <div name='movie-title'className='text-center'>
                  <h3 style={{fontWeight:'bold'}} id='detailsTitle'>{ details.Title }</h3>
                </div>
                <div className='text-center'>
                  <h6 style={{fontSize:'10pt'}}>{ details.Year }, { details.Runtime }, {details.Genre}</h6>
                </div>
                <hr></hr>
                <div>
                  <p>{ details.Plot}</p>
                </div>
                <hr></hr>
                <div>
                  <label style={{marginRight:'20px', fontWeight:'bold'}} htmlFor='metascore'>Metascore: </label>
                  <p style={{display: 'inline'}}>{ details.Metascore }/100</p>
                </div>
                <div>
                  <label style={{marginRight:'20px', fontWeight:'bold'}} htmlFor='imdb'>IMDB: </label>
                  <p name='imdb' style={{display:'inline'}}>{ details.imdbRating}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieDetailContainer;
