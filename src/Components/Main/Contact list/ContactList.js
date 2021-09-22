import { useEffect } from "react";
import { connect } from "react-redux";

// Import components
import ContactItem from "./Contact item/ContactItem";

// Import actions
import { getAllList } from "../../../Actions/ListActions";

// Import Services
import APIService from "../../../Services/APIService";

const ContactList = ({ ContactList, IsRequest, getAllList }) => {

    useEffect(() => {
        let api = new APIService();
        api.fetchContactList().then(data => {
            getAllList(data.List)
        });
    }, []);

    const item = ContactList.map(listItem => {
        return (
            <ContactItem key={listItem.Id}
                {...listItem}
            />
        )
    });

    if (IsRequest && ContactList.length === 0)
        return (
            <section>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </section>
        )
    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>

    )

}

const mapStateToProps = ({ ListReducer }) => {
    const { ContactList, IsRequest } = ListReducer;
    return { ContactList, IsRequest };
}

const mapDispatchToProps = {
    getAllList,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);