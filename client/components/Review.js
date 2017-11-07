//GOAAAAAAALL
//display all reviews belong to ingredient id
// add a new review & be able to display
import React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../store';
import { fetchReviews, addOneReview } from '../store/review'



const mapDispatchToProps = (dispatch) =>{
    return {
        addLikeReview(ingredientId, userId){
            dispatch(addOneReview(ingredientId, userId, true))
        },
        addDislikeReview(ingredientId, userId) {
            dispatch(addOneReview(ingredientId, userId, false))
        }
    }
  
}


const mapStateToProps = (state) =>{
    return {allReviews: state.review,
            currentUser: state.user
        };
}



class Review extends React.Component  {
    constructor(props){
        super(props)
    }
    
    
    componentDidMount(){
        const ingredientId = this.props.match.params.id;
        const allReviewsThunk = fetchReviews(ingredientId);
        store.dispatch(allReviewsThunk)
    }

    
    render(){
        const ingredientId = this.props.match.params.id;        
        const reviews = this.props.allReviews;
        const userId = this.props.currentUser.id;


        let like;
        let dislike;
        const calculateReview = (arrOfReviews) => {
            like = 0;
            dislike = 0;
            reviews.map(review => {
                review.like === true
                ? like ++
                : dislike ++
            })
        return like, dislike
    }
       calculateReview(reviews)
       if(this.props.allReviews){
           return (
               <div>
                  
                  <img value="like" width="50" height="50" 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Thumbs_up_font_awesome.svg/512px-Thumbs_up_font_awesome.svg.png' 
                    onClick={() => this.props.addLikeReview(ingredientId, userId)}
                  /> {like} 
                   <img width="50" height="50" 
                    src='https://image.freepik.com/free-icon/thumbs-down-hand-outline_318-41753.jpg' 
                    onClick={ ()=> this.props.addDislikeReview(ingredientId, userId)}
                   /> {dislike} 
               </div>
           )
       } else{
           return <div> </div>
       }
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Review));

