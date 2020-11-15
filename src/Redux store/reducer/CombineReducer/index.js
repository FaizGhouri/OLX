import user from '../index';
import post from '../Postreducer/index';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
    User: user,
    Post: post,
    firestore : firestoreReducer
})

export default rootReducer;