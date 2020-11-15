


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

    }
    return state
}


export default user;