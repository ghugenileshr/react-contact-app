

export const initialState = {
   
    contactList: [
        {
            id: 1,
            firstName: 'User1 First Name',
            lastName: 'User1 Last Name',
            emailAdd: 'user1@testmail.com',
            status: 'active'
        },
        {
            id: 2,
            firstName: 'User2 First Name',
            lastName: 'User2 Last Name',
            emailAdd: 'user2@testmail.com',
            status: 'active'
        },
        {
            id: 3,
            firstName: 'User3 First Name',
            lastName: 'User3 Last Name',
            emailAdd: 'user3@testmail.com',
            status: 'active'
        }
    ]
}

export const contactReducer= (state = initialState, action) => {
    console.info("contactReducer",action,state);
    if (action.type === 'ADD_CONTACT') {
        return {
            ...state,
            contactList: state.contactList.concat( action.newContactData)
        }
    } 
    if(action.type === "EDIT_CONTACT"){
        const newContactList = state.contactList.map(item=>{
            if(item.id===action.dataToBeUpdate.id){
                return action.dataToBeUpdate
            }else {
                return item
            }
        });
        return {
            ...state,
            contactList: newContactList
        }
    } 
    if (action.type === "DELETE_CONTACT"){
        return {
            ...state,
            contactList : state.contactList.filter( (item) => item.id !== action.contactId)
        }
        
    }
    return state;
};

