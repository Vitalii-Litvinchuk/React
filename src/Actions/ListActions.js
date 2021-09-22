export const getAllList = (list) => {
    return {
        type: "LISTLOADER",
        payload: list
    }
}

export const onChangeStatus = (tempList) => {
    return {
        type: "CHANGESTATUS",
        tempList
    }
}

export const onClickDelete = (tempList) => {
    return {
        type: "DELETE",
        tempList
    }
}

export const DeleteSearch = (tempList) => {
    return {
        type: "DELETESEARCH",
        tempList
    }
}

export const onAddNewContact = (newContactList) => {
    return {
        type: "ADDNEWCONTACT",
        newContactList
    }
}

export const onChangeSearch = ({ tempList: SearchList, search: isSearch, SearchValue: InputSearch}) => {
    return {
        type: "SEARCH",
        SearchList,
        isSearch,
        InputSearch
    }
}

export const onClickEdit = (CurrentContact) => {
    return{
        type: "EDIT",
        CurrentContact
    }
}

export const EditSearch = (EditedList) =>{
    return{
        type: "EDITSEARCH",
        EditedList
    }
} 

export const onEditContact = (EditedList) => {
    return{
        type: "EDITED",
        EditedList
    }
}

