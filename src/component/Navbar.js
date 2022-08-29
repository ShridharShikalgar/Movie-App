import React from "react";
// import { data } from '../data';
import { handleMovieSearch, addMovieToList } from '../actions/index'


class Navbar extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            showSearchResults : false,
            searchText : ''
        }
        
    }
    handleAddMovies=(movie)=>{
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false
        })
    }
    handleSearch = () =>{
        // searchText searched movie data
        const { searchText } = this.state;
        console.log(searchText);
        this.props.dispatch(handleMovieSearch(searchText)); //handleMovieSearch(searchText) action dispatched to reducer to store
        this.setState({showSearchResults: true})
    };

    handleChange = (e) =>{
        this.setState({
            searchText : e.target.value,
        });
    }

    render(){
        const { showSearchResults } = this.state;
        const { result } = this.props.search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                
                {
                    showSearchResults && 
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="search-pic"/>

                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={() => this.handleAddMovies(result)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                }
                </div>
            </div>
        )
    }
}
export default Navbar;