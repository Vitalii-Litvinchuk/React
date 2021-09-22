const initialState = {
    ContactList: [],
    SearchList: [],
    CurrentContact: "",
    IsRequest: true,
    isSearch: false
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LISTLOADER": return {
            ...state,
            ContactList: action.payload,
            IsRequest: false
        }
        case "CHANGESTATUS":
            return {
                ...state,
                ContactList: action.tempList,
            }
        case "ADDNEWCONTACT":
            return {
                ...state,
                ContactList: action.newContactList
            }
        case "DELETE":
            return {
                ...state,
                ContactList: action.tempList
            }
        case "SEARCH":
            return {
                ...state,
                SearchList: action.SearchList,
                isSearch: action.isSearch
            }
            case "EDIT":
            return {
                ...state,
                CurrentContact: action.CurrentContact,
            }
            case "EDITED":
            return {
                ...state,
                ContactList: action.EditedList,
            }
        default: return state;
    }
}

export default ListReducer
