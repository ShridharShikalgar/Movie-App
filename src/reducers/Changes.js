import { combineReducers } from "redux";
import { 
    ADD_MOVIES, 
    ADD_FAVOURITE, 
    REMOVE_FROM_FAVOURITE, 
    SET_SHOW_FAVOURITE, 
    ADD_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST
} from "../actions";
// --> movies State
const initialMoviesState = {
    list : [],
    favourites : [],
    showFavourite : false
}
// --> Reducer 
export function movies(state = initialMoviesState, action) {
    console.log("MOVIES REDUCER");
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list : action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list : action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
            //filterd array is simply new array which takes the movie which are unfavourite and not available in favourites
            const filteredArray = state.favourites.filter((movie) =>{
                return movie.Title !== action.movie.Title
            });
            return{
                ...state,
                favourites: filteredArray
            };
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourite: action.booleanValue
            }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;         
    }
}
// --> search State
const initialSearchState = {
   result: {}
}
// --> Reducer 
export function search(state = initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULT :
            return{
                ...state,
                result: action.movie
            }
        default:
            return state;         
    }
}
// state of both the reducer 
/* const initialRootReducer = {
    movies : initialMoviesState,
    search : initialSearchState
}*/
// --> Root Redecer 
// method - I Creating rootReducers
/* export default function rootReducer(state = initialRootReducer, action){
    return{
        //movies reducer 
        movies : movies(state.movies, action),
        //search reducer 
        search : search(state.search, action)
    }
} */

//method - II directly combineReducers method/function
export default combineReducers({
    // movies : movies,
    // search : search
    //--------- or ------------
    movies,
    search
})