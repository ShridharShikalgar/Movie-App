import React from "react";
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './Moviecard';
import { addMovies, setShowFavourite } from "../actions";

class App extends React.Component {
//-------------------------------------------------------------------------------------------
  componentDidMount(){
    const { store } = this.props;
    store.subscribe(() => {
      console.log("Updated Successfully");
      this.forceUpdate();
    });
    //We can make api call here in componentDidMount
    store.dispatch((addMovies(data)));//dispatching action to reducer
    console.log("NEW STATE", this.props.store.getState());
  }
//-------------------------------------------------------------------------------------------  
  isMovieFavourite = (movie) =>{
    // getState => movies:{ list:[] , favourites:[]}
    const {movies} = this.props.store.getState();
    //inside the movies.favourites we finding the index of movie 
    const index = movies.favourites.indexOf(movie);
    //if movie doesn't found it return -1 otherwise it returns the movie 
    if(index !== -1){
      //movie found
      return true;
    }
    return false;
  } 
//--------------------------------------------------------------------------------------------
onChangeTabs= (booleanValue) =>{
  this.props.store.dispatch(setShowFavourite(booleanValue)) //setShowFavourite(booleanValue) dispatached the action to the store 
} 
render(){
  console.log(this.props.store.getState());
  const {movies, search} = this.props.store.getState(); //movies {list:[], favorites[], showFavorite : true/false}
  //list, favorites, showFavorite are include in one movies object
  const { list, favourites, showFavourite } = movies;//{list:[],favourites:[]} now our {list:[],favourites:[]} are moved to the movies movies state which inculdes all 3 objects like list,favourite,showFavorite
    // console.log(this.props.store.getState());
    //if displayMovies == true show you "favourites" and  displayMovies == false show you "list"
    const displayMovies = showFavourite ? favourites : list;
    console.log(showFavourite);
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourite ? '' : 'active-tabs'}`} onClick={() =>this.onChangeTabs(false)}>Movies</div>
            <div className={`tab ${showFavourite ? 'active-tabs' : '' }`} onClick={() =>this.onChangeTabs(true)}>Favorites</div>
          </div>
          <div className="list">
              {displayMovies.map((movie, index) => (
                <MovieCard 
                  movie={movie} 
                  key={`movies-${index}`} 
                  dispatch = {this.props.store.dispatch}
                  isFavourite = {this.isMovieFavourite(movie)}
                />
              ))}
          </div>
          { displayMovies.length === 0 ? <div className="no-movies">No Movies to display!</div> : null }
        </div>
      </div>
    );
  }
}

export default App;
