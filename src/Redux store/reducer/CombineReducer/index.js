import user from '../index';
import post from '../Postreducer/index';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    User: user,
    Post: post,
    firestore : firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer;