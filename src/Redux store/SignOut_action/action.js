import firebase from '../../Database config/firebase';


export const Sign_Out = () => {

    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=>{

            dispatch({ type: 'SIGNOUT_SUCCESS'})

        });

    }


}

