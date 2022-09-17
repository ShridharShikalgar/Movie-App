import React from "react";
import { addFavourite, removeFromFavourite } from "../actions";
import StarsRating from "./StarsRating";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class MovieCard extends React.Component{
    constructor() {
        super();
        this.state={
            rate:0,
            active:false,
        }
  }
    handleFavourite = () => {
        const {movie} = this.props;
        this.props.dispatch(addFavourite(movie)); //action dispatched
    }
    handleUnFavourite = () =>{
        const {movie} = this.props;
        this.props.dispatch(removeFromFavourite(movie));
    }

    handleSubmitClick=()=>{
        toast("Rated Succefully..!")
        this.setState({active:false})
    }
   
    render(){
        console.log(this.state.rate)
        const {movie, isFavourite} = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    {/* <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <button className="favourite-btn" onClick={this.handleFavourite}>Favourite</button>
                    </div> */}
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <div className="StarDiv">
                            <strong className="StrongHeader" style={{marginRight:10}}>Rate Your Movie:</strong> 
                            <StarsRating 
                                Rating={this.state.rate}
                                HandleClick={(i)=>this.setState({rate:i+1,active:true})}
                            />
                        </div>
                        {
                            this.state.active ? <button className="SubmitBtn" style={{backgroundColor:'green', color:'white'}} onClick={this.handleSubmitClick}>Submit Rating</button> : ""
                        }
                        {
                            isFavourite
                            ? <button className="unfavourite-btn" onClick={this.handleUnFavourite}>UnFavourite</button>
                            : <button className="favourite-btn" onClick={this.handleFavourite}>Favourite</button>
                        }
                        <ToastContainer/>
                    </div>
                </div>
            </div>
        )
    }
}
export default MovieCard;