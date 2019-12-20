const contactsInitialState = []

const contactsReducer = (state=contactsInitialState,action)=>{
    switch(action.type) {
        case 'SET_ADD_CONTACT' : {
            return [...state,action.payload]
        }
        case 'GET_ALL_CONTACTS' : {
            return [...action.payload]
        }
        default : {
            return state
        }
    }
}
export default contactsReducer