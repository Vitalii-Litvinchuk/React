// Import components
import ContactItem from "./Contact item/ContactItem";

const ContactList = ({ List, onChangeStatus, onClickDelete, onClickEdit }) => {
    const item = List.map(listItem => {
        return (
            <ContactItem key={listItem.Id} 
            {...listItem} 
            onChangeStatus={() => onChangeStatus(listItem.Id)}
            onClickDelete={() => onClickDelete(listItem.Id)} 
            onClickEdit ={() => onClickEdit(listItem.Id)}
            />
        )
    });
    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>
    )
}

export default ContactList;