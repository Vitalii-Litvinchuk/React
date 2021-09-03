import React, { Fragment } from "react";
import ReactDOM from "react-dom";

// Import css
import "./index.css";

// Import components
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";



const App = () => {
  return (
    <div className="container bootstrap snippets bootdeys bootdey">
      <div className="row decor-default">

        <SideBar />

        <Main />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));