import { Fragment } from "react"
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';


// Import services
import APIService from "../../Services/APIService";

// Import actions
import { onGetName, onGetEmail, onGetGender, onGetImage, onGetPhone, onGetStatus, onSubmit, ToDefault } from "../../Actions/AddContactActions";
import { onAddNewContact } from "../../Actions/ListActions";

const AddContact = ({ Name, Phone, Email, Status, Gender, Image, isRedirect, ContactList,
    onGetName, onGetEmail, onGetGender, onGetImage, onGetPhone, onGetStatus, onSubmit, ToDefault, onAddNewContact }) => {

    if (isRedirect) {
        onAddNewContact(addNewContact(ContactList, { Name, Email, Phone, Status, Image, Gender }));
        ToDefault();
        return <Redirect to="/" />
    }
    let img = "";
    if (Image === "")
        img = "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg"
    else
        img = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;

    return (
        <Fragment>
            <div className="container">
                <nav className="navbar navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                </nav>
                <div className="row mt-4">
                    <form className="col-8" onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" className="form-control" value={Name} placeholder="Enter name" onChange={onGetName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone</label>
                            <input type="tel" name="Phone" className="form-control" value={Phone} placeholder="Enter phone" onChange={onGetPhone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email address</label>
                            <input type="email" name="Email" className="form-control" value={Email} placeholder="Enter email" onChange={onGetEmail} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Status">Status</label>
                            <select className="form-select w-100 p-2" onChange={onGetStatus}>
                                <option aria-selected value="Friend">Friend</option>
                                <option value="Work">Work</option>
                                <option value="Family">Family</option>
                                <option value="Private">Private</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Gender">Gender</label>
                            <select className="form-select w-100 p-2" value={Gender} onChange={onGetGender}>
                                <option aria-selected value="men">Man</option>
                                <option value="women">Woman</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Image</label>
                            <input type="number" name="Image" className="form-control" value={Image} min="0" max="99" placeholder="Enter number" onChange={onGetImage} />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Add</button>
                    </form>
                    <div className="col-4">
                        <img src={img} className="rounded float-left avatar" alt="..." />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

const mapStateToProps = ({ AddContactReducer, ListReducer }) => {
    const { Name, Phone, Email, Status, Gender, Image, isRedirect } = AddContactReducer;
    const { ContactList } = ListReducer;
    return { Name, Phone, Email, Status, Gender, Image, isRedirect, ContactList };
}

const mapDispatchToProps = {
    onGetName, onGetEmail, onGetGender, onGetImage, onGetPhone, onGetStatus, onSubmit, ToDefault, onAddNewContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);

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