


const INITIAL_STATE = {

    users: [],
    current_user: [],


}
const user = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SETUSER":
            return ({
                ...state,
                current_user: action.payload
            })

        case "SIGNOUT_SUCCESS":
            console.log('sign out success')
            return state;

    }
    return state
}


export default user;