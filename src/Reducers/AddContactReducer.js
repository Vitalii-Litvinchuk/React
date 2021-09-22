const initialState = {
    Name: "",
    Phone: "",
    Email: "",
    Status: "Friend",
    Gender: "men",
    Image: "",
    isRedirect: false,
    isCreated: false
}

const AddContactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GETNAME":
            return {
                ...state,
                Name: action.value
            }
        case "GETPHONE":
            return {
                ...state,
                Phone: action.value
            }
        case "GETEMAIL":
            return {
                ...state,
                Email: action.value
            }
        case "GETSTATUS":
            return {
                ...state,
                Status: action.value
            }
        case "GETGENDER":
            return {
                ...state,
                Gender: action.value
            }
        case "GETIMAGE":
            return {
                ...state,
                Image: action.value
            }
        case "SUBMIT":
            return {
                ...state,
                isRedirect: true,
                isCreated: true
            }
        case "ToDefault":
            return {
                ...state,
                Name: "",
                Phone: "",
                Email: "",
                Status: "Friend",
                Gender: "men",
                Image: "",
                isCreated: false,
                isRedirect: false
            }
        default: return state;
    }
}

export default AddContactReducer;