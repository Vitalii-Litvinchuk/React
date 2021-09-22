import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import css
import "./index.css";

// Import components
import Main from "./Components/Main/Main";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

// Import Services
// import APIService from "./Services/APIService";

// Import store
import store from "./store";
import { Provider } from "react-redux";

const App = () => {

    // apiService = new APIService();

    // state = {
    //     // ContactList: [
    //     //     {
    //     //         Id: uuidv4(),
    //     //         Name: " Alexander Verdnam",
    //     //         Phone: "+1-800-600-9898",
    //     //         Email: "Verdnam@gmail.com",
    //     //         Status: "Friend",
    //     //         Gender: "men",
    //     //         Image: "45"
    //     //     },
    //     //     {
    //     //         Id: uuidv4(),
    //     //         Name: "Camilla Terry",
    //     //         Phone: "+1-800-132-7841",
    //     //         Email: "camt@gmail.com",
    //     //         Status: "Private",
    //     //         Gender: "women",
    //     //         Image: "18"
    //     //     },
    //     //     {
    //     //         Id: uuidv4(),
    //     //         Name: "Stafani Jamson",
    //     //         Phone: "+1-800-225-1587",
    //     //         Email: "stef@gmail.com",
    //     //         Status: "Work",
    //     //         Gender: "women",
    //     //         Image: "39"
    //     //     }
    //     // ],
    //     ContactList: [],
    //     SearchValue: "",
    //     CurrentContact: "",
    //     IsRequest: true,
    // }


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

    // componentDidMount() {
    //     // console.log("componentDidMount");
    //     this.apiService.fetchContactList(this.state.IsRequest).then(currentListData => {
    //         this.setState({
    //             ContactList: currentListData[0].List,
    //             IsRequest: currentListData[1]
    //         });
    //     })
    // }

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

    // Start


    // End

    // render() {
    //     let { SearchValue, ContactList, CurrentContact, IsRequest } = this.state;
    //     if (SearchValue !== "") {
    //         const tempList = [];

    //         ContactList.forEach(element => {
    //             const name = element.Name.toLowerCase();
    //             if (name.includes(SearchValue))
    //                 tempList.push(element);
    //         });
    //         ContactList = tempList;
    //     }

    return (
        <Router>
            <Switch>
                <Provider store={store}>
                    <Route path="/" exact render={() => (<Main />)} />
                    <Route path="/add-new-contact" exact render={() => (<AddContact />)} />
                    <Route path="/edit-contact" exact render={() => (<EditContact />)} />
                </Provider>
                <Route component={NotFoundPage} />
            </Switch>
        </Router >

    )
    // }
}

// Main: List={ContactList} onChangeStatus={this.onChangeStatus} onClickDelete={this.onClickDelete} onClickEdit={this.onClickEdit} onChangeSearch={this.onChangeSearch} IsRequest={IsRequest}
// AddContact: onAddNewContact={this.onAddNewContact} 
// EditContact:  onEditContact={this.onEditContact} CurrentContact={CurrentContact} 
ReactDOM.render(<App />, document.getElementById("root"));