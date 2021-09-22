import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// For redux
import { connect } from "react-redux";

// Import components
import ContactList from "./Contact list/ContactList";
import SideBar from "../SideBar/SideBar"

// Import actions
import { onChangeSearch } from "../../Actions/ListActions";

const Main = ({ ContactList: CL, onChangeSearch }) => {
    return (
        <Fragment>
            <div className="container bootstrap snippets bootdeys bootdey">
                <div className="row decor-default">

                    <SideBar />
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="contacts-list">
                            <Link className="title" to="/add-new-contact">
                                <div className="btn btn-success">
                                    Add new contact
                                </div>
                            </Link>

                            <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
                                <div className="input-group ml-2 ">
                                    <input type="text" className="rounded contacts-list-search" placeholder="Search" onChange={(e) => onChangeSearch(SearchElements(e.target.value.toLowerCase(), CL))} />
                                </div>
                                <div className="unit head">
                                    <div className="field name">
                                        <div className="check">
                                            <input id="cb1" name="cb1" type="checkbox" />
                                            <label htmlFor="cb1"></label>
                                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                                        Name
                                    </div>
                                    <div className="field phone">
                                        Phone
                                    </div>
                                    <div className="field email icons">
                                        Email
                                        {/* <div className="btn-group pull-right" role="group">
                                            <button type="button" className="btn btn-default"><span className="icon icon-folder"></span></button>

                                            <div className="btn-group" role="group">
                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-label"></span></button>

                                                <ul className="dropdown-menu pull-right">
                                                    <li><a href="#"><span className="label label-success text-dark">New</span></a></li>
                                                    <li><a href="#"><span className="label label-primary text-dark">Social</span></a></li>
                                                    <li><a href="#"><span className="label label-warning text-dark">Spam</span></a></li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-default"><span className="icon icon-trash"></span></button>
                                        </div> */}
                                    </div>
                                </div>
                                <ContactList />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ ListReducer }) => {
    const { ContactList } = ListReducer
    return { ContactList };
}

const mapDispatchToProps = {
    onChangeSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

function SearchElements(SearchValue, ContactList) {
    const tempList = [];
    let search = true;
    if (SearchValue !== "")
        ContactList.forEach(element => {
            if (element.Name.toLowerCase().includes(SearchValue))
                tempList.push(element);
        });
        else search = false;
    return { tempList, search };
}