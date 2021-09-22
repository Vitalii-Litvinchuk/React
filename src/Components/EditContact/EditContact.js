import { Component, Fragment } from "react"
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom"

// Import services
import APIService from "../../Services/APIService";

// Import actions
import { onEditContact } from "../../Actions/ListActions";

class AddContact extends Component {

    state =
        {
            Name: this.props.CurrentContact.Name,
            Phone: this.props.CurrentContact.Phone,
            Email: this.props.CurrentContact.Email,
            Status: this.props.CurrentContact.Status,
            Gender: this.props.CurrentContact.Gender,
            Image: this.props.CurrentContact.Image,
            isRedirect: false,
        }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    onGetPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            Phone: phone
        })
    }

    onGetEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }

    onGetStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }

    onGetGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }

    onGetImage = (e) => {
        const image = e.target.value;
        if (image >= 0 && image < 100) {
            this.setState({
                Image: image
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { onEditContact } = this.props;
        const { Name, Email, Phone, Status, Image, Gender } = this.state;
        const contact =
        {
            Id: this.props.CurrentContact.Id,
            Name,
            Phone,
            Email,
            Status,
            Gender,
            Image
        }

        let tempList = this.props.ContactList.slice();
        const index = tempList.findIndex(i => i.Id === contact.Id);

        tempList[index] = contact;
        new APIService().updateDatabse(tempList);

        onEditContact(tempList);
        this.setState({
            isRedirect: true
        })
    }

    render() {
        let isRedirect = this.state.isRedirect;
        if (isRedirect) {
            return <Redirect to="/" />
        }
        const { Name, Phone, Email, Status, Gender, Image } = this.state;
        let img = "";
        if (Image === "" || Image === null)
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
                        <form className="col-8" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="Name" className="form-control" placeholder="Enter name" value={Name} onChange={this.onGetName} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input type="tel" name="Phone" className="form-control" placeholder="Enter phone" value={Phone} onChange={this.onGetPhone} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email address</label>
                                <input type="email" name="Email" className="form-control" placeholder="Enter email" value={Email} onChange={this.onGetEmail} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Status">Status</label>
                                <select className="form-select w-100 p-2" value={Status} onChange={this.onGetStatus}>
                                    <option value="Friend">Friend</option>
                                    <option value="Work">Work</option>
                                    <option value="Family">Family</option>
                                    <option value="Private">Private</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Gender">Gender</label>
                                <select className="form-select w-100 p-2" value={Gender} onChange={this.onGetGender}>
                                    <option value="men">Man</option>
                                    <option value="women">Woman</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Image">Image</label>
                                <input type="number" name="Image" className="form-control" min="0" max="99" placeholder="Enter number" value={Image} onChange={this.onGetImage} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Save</button>
                        </form>
                        <div className="col-4">
                            <img src={img} className="rounded float-left avatar" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ ListReducer }) => {
    const { ContactList, CurrentContact } = ListReducer;
    return { ContactList, CurrentContact };
}

const mapDispatchToProps = {
    onEditContact
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact)