import axios from 'axios'

// action type

const GET_REVIEWS = 'GET_REVIEWS'
const ADD_REVIEW = 'ADD_REVIEW'

// initial state
const allReviews = [];

// aciton creators:
const getReviews = reviews => ({type: GET_REVIEWS, reviews});
const addReview = newReview => ({type: ADD_REVIEW, newReview});

// Thunk creators

export const fetchReviews = (ingredientId) => {
    return function thunk(dispatch){
        axios.get(`/api/ingredients/${ingredientId}/review`)
        .then(res => res.data)
        .then(reviews => {
            const action = getReviews(reviews)
            dispatch(action)
        })
        .catch(err => console.error(err))
    }
}

export const addOneReview = (ingredientId, userId, bool) => {
    return function thunk(dispatch){
        axios.post(`/api/ingredients/${ingredientId}/addreview`, {userId: userId, like: bool})
        .then(res => res.data)
        .then(newReview => {
            const action = addReview(newReview)
            dispatch(action)
        })
        .catch(err => console.error(err))
    }
}

//reducer

export default function (review = allReviews, action) {
    switch (action.type){
        case GET_REVIEWS:
        return action.reviews

        case ADD_REVIEW:
        return [...review, action.newReview]

        default:
        return review;
    }
}
