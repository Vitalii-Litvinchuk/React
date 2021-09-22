import { useEffect } from "react";
import { connect } from "react-redux";

// Import components
import ContactItem from "./Contact item/ContactItem";

// Import actions
import { getAllList } from "../../../Actions/ListActions";

// Import Services
import APIService from "../../../Services/APIService";

let ones = true;

const ContactList = ({ ContactList, IsRequest, SearchList, isSearch,
    getAllList }) => {

    useEffect(() => {
        if (ones) {
            let api = new APIService();
            api.fetchContactList().then(data => {
                getAllList(data.List)
            });
            ones = !ones;
        }
    }, []); // [ContactList]); - trouble with Change/Get status

    let item;
    if (isSearch)
        item = SearchList.map(listItem => {
            return (
                <ContactItem key={listItem.Id}
                    {...listItem}
                />
            )
        });
    else
        item = ContactList.map(listItem => {
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
    const { ContactList, IsRequest, SearchList, isSearch } = ListReducer;
    return { ContactList, IsRequest, SearchList, isSearch };
}

const mapDispatchToProps = {
    getAllList
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);