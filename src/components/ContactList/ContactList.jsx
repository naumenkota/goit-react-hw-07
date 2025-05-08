import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';  
import s from "./ContactList.module.css";



export default function ContactList() {
  
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.filters.name);

    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (<li key={contact.id} className={s.contactItem}> <Contact contact={contact}/></li>))}
        </ul>
    )
}