import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/CombineReducer/index'
import { getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import { compose } from 'redux';
import { reduxFirestore } from 'redux-firestore';
import { reactReduxFirebase } from 'react-redux-firebase';
import fbConfig from '../Database config/firebase';

const store = createStore(rootReducer,
    compose(

        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        // reactReduxFirebase(fbConfig)

    )
);

export default store;