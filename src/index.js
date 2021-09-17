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
import EditContact from "./Components/EditContact/EditContact";

// Import Services
import APIService from "./Services/APIService";

class App extends Component {
    
    apiService = new APIService();

    state = {
        // ContactList: [
        //     {
        //         Id: uuidv4(),
        //         Name: " Alexander Verdnam",
        //         Phone: "+1-800-600-9898",
        //         Email: "Verdnam@gmail.com",
        //         Status: "Friend",
        //         Gender: "men",
        //         Image: "45"
        //     },
        //     {
        //         Id: uuidv4(),
        //         Name: "Camilla Terry",
        //         Phone: "+1-800-132-7841",
        //         Email: "camt@gmail.com",
        //         Status: "Private",
        //         Gender: "women",
        //         Image: "18"
        //     },
        //     {
        //         Id: uuidv4(),
        //         Name: "Stafani Jamson",
        //         Phone: "+1-800-225-1587",
        //         Email: "stef@gmail.com",
        //         Status: "Work",
        //         Gender: "women",
        //         Image: "39"
        //     }
        // ],
        ContactList: [],
        SearchValue: "",
        CurrentContact: "",
        IsRequest: true,
    }

  
    // componentDidUpdate(){
    //     console.log("componentDidUpdate");
    // }

    // shouldComponentUpdate(nextState, nextProps){
    //     console.log("Next state", nextState);
    //     console.log("Next props", nextProps);
    //      if (nextProps.ContactList[0].Status === "Work") {
    //          return false;
    //      }
    //      else return true;
    // }

    // componentWillUnmount(){
    //     console.log("componentWillUnmount");
    // }

    componentDidMount(){
        // console.log("componentDidMount");
        this.apiService.fetchContactList(this.state.IsRequest).then(currentListData => {
            this.setState({
                ContactList: currentListData[0].List,
                IsRequest: currentListData[1]
            });
        })
    }

    // async fetchContactList() {
    //     const List = await fetch(this.URL)
    //         .then(responce => {
    //             return responce.json();
    //         }).then(data => {
    //             if (data == null) {
    //                 return {
    //                     List: []
    //                 }

    //             } else {
    //                 return {
    //                     List: data
    //                 }
    //             }
    //         })
    //         .catch(err => console.log(err))
    //     return List;
    // }

    // updateDatabse = (List) => {
    //     fetch(this.URL,
    //         {
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             method: "PUT",
    //             body: JSON.stringify(List)
    //         })
    //         // .then(res => console.log(res))
    //         // .catch(res => console.log(res))
    // }

    onChangeStatus = (Id) => {
        const index = this.state.ContactList.findIndex(e => e.Id === Id);
        let contact = this.state.ContactList[index];
        switch (contact.Status) {
            case "Friend": contact.Status = "Work"; break;
            case "Work": contact.Status = "Family"; break;
            case "Family": contact.Status = "Private"; break;
            case "Private": contact.Status = "Friend"; break;
            default: break;
        }

        const tempList = this.state.ContactList.slice();
        tempList[index] = contact;
        this.setState({
            ContactList: tempList
        });
        this.apiService.updateDatabse(tempList);
    }

    onClickDelete = (Id) => {
        let index = this.state.ContactList.findIndex(e => e.Id === Id);
        let partTempListOne = this.state.ContactList.slice(0, index);
        let partTempListTwo = this.state.ContactList.slice(index + 1);
        let tempList = [...partTempListOne, ...partTempListTwo]

        this.setState({
            ContactList: tempList
        })
        this.apiService.updateDatabse(tempList);
    }

    onAddNewContact = (newContact) => {
        const { Name, Email, Phone, Status, Image, Gender } = newContact;
        const tempList = this.state.ContactList.slice();
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
        this.setState({
            ContactList: tempList
        })
        this.apiService.updateDatabse(tempList);
    }

    onClickEdit = (Id) => {
        let contact = this.state.ContactList.find((i) => i.Id === Id);
        this.setState({
            CurrentContact: contact
        });
    }

    onEditContact = (editedContact) => {
        let tempList = this.state.ContactList.slice();
        const index = tempList.findIndex(i => i.Id === editedContact.Id);

        tempList[index] = editedContact;
        this.setState({
            ContactList: tempList
        })
        this.apiService.updateDatabse(tempList);
    }

    onChangeSearch = (e) => {
        const someString = e.target.value.toLowerCase();
        this.setState({
            SearchValue: someString
        });
    }

    render() {
        let { SearchValue, ContactList, CurrentContact, IsRequest } = this.state;
        if (SearchValue !== "") {
            const tempList = [];

            ContactList.forEach(element => {
                const name = element.Name.toLowerCase();
                if (name.includes(SearchValue))
                    tempList.push(element);
            });
            ContactList = tempList;
        }

        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => (<Main List={ContactList} onChangeStatus={this.onChangeStatus} onClickDelete={this.onClickDelete} onClickEdit={this.onClickEdit} onChangeSearch={this.onChangeSearch} IsRequest={IsRequest} />)} />
                    <Route path="/add-new-contact" exact render={() => (<AddContact onAddNewContact={this.onAddNewContact} />)} />
                    <Route path="/edit-contact" exact render={() => (<EditContact onEditContact={this.onEditContact} CurrentContact={CurrentContact} />)} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Router >

        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));