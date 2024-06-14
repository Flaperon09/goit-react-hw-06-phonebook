import { ContactsInfo } from '../ContactsInfo';
import { useSelector } from "react-redux";

export const ContactsList = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    return (
        <div>
            <ul>
                {contacts.map(contact => {return contact.name.toLowerCase().includes(filter) &&
                    <ContactsInfo
                        key={contact.id}
                        contact={contact}
                    />}
                )}              
            </ul>
        </div>
    )
};