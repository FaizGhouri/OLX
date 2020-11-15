import firebase from '../../Database config/firebase';
import firestore from '../../Database config/firebase'

const createAd = (Post_Ads) => {

    return (dispatch , getState , { getFirestore , getFirebase}) => {

        const firestore = getFirestore();
        firestore.collection('Post_Ad').add({
            ...Post_Ads,
            createAt : new Date ()
        }).then(() => {

            dispatch({type : "CREATE_AD" , Post_Ads})

        })
        .catch((err) => {

            dispatch({type : "CREATE_AD_ERROR " , err})

        })


    }
}

export {
    createAd
}