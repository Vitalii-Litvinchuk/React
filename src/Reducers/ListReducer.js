import { v4 as uuidv4 } from 'uuid';

// Import services
import APIService from "../Services/APIService";

const initialState = {
    ContactList: [],
    SearchValue: "",
    CurrentContact: "",
    IsRequest: true,
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
                ContactList: changeStatus(state.ContactList, action.Id),
            }
        case "ADDNEWCONTACT":
            return {
                ...state,
                ContactList: addNewContact(state.ContactList, action.newContact)
            }
        default: return state;
    }
}

export default ListReducer

function changeStatus(ContactList, Id) {
    const index = ContactList.findIndex(e => e.Id === Id);
    let contact = ContactList[index];
    switch (contact.Status) {
        case "Friend": contact.Status = "Work"; break;
        case "Work": contact.Status = "Family"; break;
        case "Family": contact.Status = "Private"; break;
        case "Private": contact.Status = "Friend"; break;
        default: break;
    }

    let tempList = ContactList.slice();
    tempList[index] = contact;
    new APIService().updateDatabse(tempList);
    return tempList;
}

function addNewContact(ContactList, newContact) {
    const { Name, Email, Phone, Status, Image, Gender } = newContact;
    let tempList = ContactList.slice();
    tempList.unshift(
        {
            Id: uuidv4(),
            Name,
            Phone,
            Email,
            Status,
            Gender,
            Image
        }
    );
    new APIService().updateDatabse(tempList);
    return tempList;
}