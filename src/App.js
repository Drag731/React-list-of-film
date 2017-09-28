import React, { Component } from 'react';
import './App.css';
import ItemMovie from './components/ItemMovie.js';
import Description from './components/Description.js';

class App extends Component {
  constructor(props){
        super(props);
        const selectedId = props.movies && props.movies[0] &&props.movies[0].id;
        this.state = {
          activeId: selectedId,
          movies: props.movies,
          likeCount: ''
        };
        this.change = this.change.bind(this);
        this.likeUp = this.likeUp.bind(this);
        this.likeDown = this.likeDown.bind(this);
    }

    change(id) {
        this.setState({activeId: id});
    }

    likeUp() {
        this.setState({likeCount: 'up'});
    }

    likeDown() {
        this.setState({likeCount: 'down'});
    }

  render() {

    const movies = this.props.movies;
    const activeMovie = movies.filter((el) => el.id === parseInt(this.state.activeId, 10))[0];
    return (
      <div>
          <div className="movies">
              <div className="sort-movies">
                  <h2>Sort movies</h2>
                  <div className="buttons">
                      <button>By likes</button>
                      <button>By rating</button><br/>
                      <input className="search" type="search" /> 
                  </div>
              </div>
              <div className="movies-item">
                  {movies.map((movie) => {
                      return (<ItemMovie 
                        key={movie.id} 
                        currentMovie={movie} 
                        change={this.change}
                        likeUp={this.likeUp}
                        likeDown={this.likeDown}
                        /> );
                  })}
              </div>
          </div>
          <div className="description">
              <Description 
                key={movies.id} 
                activeMovie={activeMovie} 
                change={this.change}
                movies={movies}
              />
          </div>
      </div>
    );
  }
}

export default App;
