import React, { Component } from "react";
import ReactDOM from "react-dom";

// Import css
import "./index.css";

// Import components
import SideBar from "./Components/SideBar/SideBar"
import Main from "./Components/Main/Main";


class App extends Component {
    state = {
        ContactList: [
            {
                Id: 1,
                Name: " Alexander Verdnam",
                Phone: "+1-800-600-9898",
                Email: "Verdnam@gmail.com",
                Status: "Friend",
                Image: "https://api.randomuser.me/portraits/men/45.jpg"
            },
            {
                Id: 2,
                Name: "Camilla Terry",
                Phone: "+1-800-132-7841",
                Email: "camt@gmail.com",
                Status: "Private",
                Image: "https://api.randomuser.me/portraits/women/18.jpg"
            },
            {
                Id: 3,
                Name: "Stafani Jamson",
                Phone: "+1-800-225-1587",
                Email: "stef@gmail.com",
                Status: "Work",
                Image: "https://api.randomuser.me/portraits/women/39.jpg"
            }
        ]
    }

    render() {
        const { ContactList } = this.state;
        return (
            <div className="container bootstrap snippets bootdeys bootdey">
                <div className="row decor-default">
                    <SideBar />
                    <Main List={ContactList} />
                </div>
            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));