const INITIAL_STATE = {


    Post_Ad: [],
}

const post = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case "CREATE_AD":


            console.log("Create Post", action.Post_Ads)
            return state

        case "CREATE_AD_ERROR":

            console.log("Create Post Error" , action.err)
            return state


        case "SIGN_OUT":

            console.log("Sign Out Successfully")
            return state



        default:
            return state



    }

}

export default post;