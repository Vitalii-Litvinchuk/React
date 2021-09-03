// Import components
import ContactItem from "./Contact item/ContactItem";

const ContactList = ({ List }) => {
    const item = List.map(listItem => {
        return (
            <ContactItem key={listItem.Id} {...listItem}/>
        )
    });
    return (
        <section>
            {item}
        </section>
    )
}

export default ContactList;