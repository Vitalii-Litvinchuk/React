import { Fragment } from "react"
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"

// Import actions
import { onGetName, onGetEmail, onGetGender, onGetImage, onGetPhone, onGetStatus, onSubmit, ToDefault } from "../../Actions/AddContactActions";
import { onAddNewContact } from "../../Actions/ListActions";

const AddContact = ({ Name, Phone, Email, Status, Gender, Image, isRedirect, isCreated,
     onGetName, onGetEmail, onGetGender, onGetImage, onGetPhone, onGetStatus, onSubmit, ToDefault, onAddNewContact }) => {

    if (isRedirect && isCreated) {
        onAddNewContact({ Name, Phone, Email, Status, Gender, Image });
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
                            <input type="text" name="Name" className="form-control" placeholder="Enter name" onChange={onGetName} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Phone">Phone</label>
                            <input type="tel" name="Phone" className="form-control" placeholder="Enter phone" onChange={onGetPhone} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email address</label>
                            <input type="email" name="Email" className="form-control" placeholder="Enter email" onChange={onGetEmail} />
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
                            <select className="form-select w-100 p-2" onChange={onGetGender}>
                                <option aria-selected value="men">Man</option>
                                <option value="women">Woman</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Image">Image</label>
                            <input type="number" name="Image" className="form-control" min="0" max="99" placeholder="Enter number" onChange={onGetImage} />
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

const mapStateToProps = ({ AddContactReducer }) => {
    const { Name, Phone, Email, Status, Gender, Image, isRedirect, isCreated } = AddContactReducer;
    return { Name, Phone, Email, Status, Gender, Image, isRedirect, isCreated };
}

const mapDispatchToProps = {
    onGetName, onGetEmail, onGetGender, onGetImage, onGetPhone, onGetStatus, onSubmit, ToDefault, onAddNewContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);