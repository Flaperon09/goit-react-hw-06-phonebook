import { ContactsInfo } from '../ContactsInfo';
import { useSelector } from "react-redux";

export const ContactsList = () => {
    const contacts = useSelector(state => state.contacts);
    console.log(contacts);
    return (
        <div>
            <ul>
                {contacts.map(contact => 
                    <ContactsInfo
                        key={contact.id}
                        contact={contact}
                    />
                )}              
            </ul>
        </div>
    )
};