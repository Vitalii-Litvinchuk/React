import React, { Fragment } from "react";
import {Link} from "react-router-dom";

// Import components
import ContactList from "./Contact list/ContactList";
import SideBar from "../SideBar/SideBar"


const Main = ({ List, onChangeStatus, onClickDelete }) => {
    return (
        <Fragment>
            <div className="container bootstrap snippets bootdeys bootdey">
                <div className="row decor-default">

                    <SideBar Contacts={List} />
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="contacts-list">
                            <Link className="title" to="/add-new-contact">Add new contact</Link>

                            <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
                                <div className="input-group">
                                    <input type="text" className="contacts-list-search" placeholder="Search" />
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
                                        <div className="btn-group pull-right" role="group">
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
                                        </div>
                                    </div>
                                </div>
                                <ContactList List={List} onChangeStatus={onChangeStatus} onClickDelete={onClickDelete} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Main;