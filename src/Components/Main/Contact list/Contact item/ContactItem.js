import { connect } from "react-redux"
import { Link } from "react-router-dom"

// Import components
import GetStatus from "./Status/Status"

// Import services
import APIService from "../../../../Services/APIService"

// Import actions
import { onChangeStatus, onClickDelete, onClickEdit } from "../../../../Actions/ListActions"


const ContactItem = ({ ContactList, Id, Name, Email, Phone, Status, Gender, Image,
    onChangeStatus, onClickDelete, onClickEdit }) => {

    const img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`
    return (
        <div className="unit" >
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div className="row">
                    <div className="col-3">
                        <img src={img} alt="..." className="avatar" />
                    </div>
                    <div className="col-4">
                        {Name}
                        <GetStatus Status={Status} onChangeStatus={() => { onChangeStatus(changeStatus(ContactList, Id)) }} />
                    </div>
                </div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                <div className="row">
                    {Email}
                </div>
                <div className="row">
                    <div className="icons">
                        <Link to="/edit-contact">
                            <i className="far fa-edit fa-2x" onClick={() => onClickEdit(ContactList[ContactList.findIndex(e => e.Id === Id)])}></i>
                        </Link>
                        <i className="far fa-trash-alt fa-2x" onClick={() => onClickDelete( Delete(Id, ContactList))}></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = ({ ListReducer }) => {
    const {ContactList} = ListReducer;
    return {ContactList};
}

const mapDispatchToProps = {
    onChangeStatus, onClickDelete, onClickEdit
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);

function Delete(Id, ContactList){
    let index = ContactList.findIndex(e => e.Id === Id);
    let partTempListOne = ContactList.slice(0, index);
    let partTempListTwo = ContactList.slice(index + 1);
    let tempList = [...partTempListOne, ...partTempListTwo]
    
    new APIService().updateDatabse(tempList);

    return tempList;
}

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