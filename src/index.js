import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

// Import css
import "./index.css";

// Import components
import Main from "./Components/Main/Main";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import AddContact from "./Components/AddContact/AddContact";

class App extends Component {
    state = {
        ContactList: [
            {
                Id: uuidv4(),
                Name: " Alexander Verdnam",
                Phone: "+1-800-600-9898",
                Email: "Verdnam@gmail.com",
                Status: "Friend",
                Gender: "men",
                Image: "45"
            },
            {
                Id: uuidv4(),
                Name: "Camilla Terry",
                Phone: "+1-800-132-7841",
                Email: "camt@gmail.com",
                Status: "Private",
                Gender: "women",
                Image: "18"
            },
            {
                Id: uuidv4(),
                Name: "Stafani Jamson",
                Phone: "+1-800-225-1587",
                Email: "stef@gmail.com",
                Status: "Work",
                Gender: "women",
                Image: "39"
            }
        ]
    }

    onChangeStatus = (Id) => {
        const index = this.state.ContactList.findIndex(e => e.Id === Id);
        let contact = this.state.ContactList[index];
        switch (contact.Status) {
            case "Friend": contact.Status = "Work"; break;
            case "Work": contact.Status = "Private"; break;
            case "Private": contact.Status = "Family"; break;
            case "Family": contact.Status = "Friend"; break;
            default: break;
        }

        const tempList = this.state.ContactList.slice();
        tempList[index] = contact;
        this.setState({
            ContactList: tempList
        });
    }

    onClickDelete = (Id) => {
        const index = this.state.ContactList.findIndex(e => e.Id === Id);
        const partTempListOne = this.state.ContactList.slice(0, index);
        const partTempListTwo = this.state.ContactList.slice(index + 1);
        const tempList = [...partTempListOne, ...partTempListTwo]

        this.setState({
            ContactList: tempList
        })
    }

    onAddNewContact = (newContact) =>{
        const { Name, Email, Phone, Status, Image, Gender } = newContact;
        this.state.ContactList.unshift(
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
    }

    render() {
        const { ContactList } = this.state;
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => (<Main List={ContactList} onChangeStatus={this.onChangeStatus} onClickDelete={this.onClickDelete} />)} />
                    <Route path="/add-new-contact" exact render={() => (<AddContact onAddNewContact={this.onAddNewContact}/>)}/>
                    <Route path="*"component={NotFoundPage}/>
                </Switch>
            </Router>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));