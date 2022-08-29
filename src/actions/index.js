//action type
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE'
export const ADD_SEARCH_RESULT ='ADD_SEARCH_RESULT'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
// action Creator 
export function addMovies(movies){
    return {
        type : ADD_MOVIES,
        movies : movies
    }
}

export function addFavourite(movie){
    return {
        type : ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie){
    return {
        type : REMOVE_FROM_FAVOURITE,
        movie
    }
}

export function setShowFavourite(booleanValue){
    return {
        type : SET_SHOW_FAVOURITE,
        booleanValue
    }
}

export function addMovieToList(movie){
    return{
        type : ADD_MOVIE_TO_LIST,
        movie
    }
}
export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(Response => Response.json())

        .then(movie => {
            console.log('MOVIE', movie);
            //we have to dispatch this action but its not a object right now 
            //dispatching an action
            dispatch(addMovieSearchResult(movie));
        })
    }
}
//action Creator
export function addMovieSearchResult(movie) {
    console.log("after fetching", movie);
    return{
        type : ADD_SEARCH_RESULT,
        movie
    }
}