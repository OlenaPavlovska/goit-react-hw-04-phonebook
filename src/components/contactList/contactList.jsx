import PropTypes from 'prop-types';
import css from './contactList.module.css'



export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map((contact) => (
                <li className={css.list} key={contact.id}>
                    <p className={css.text}>{contact.name}:  {contact.number}</p>
                    <button className={css.btnAddContacts}  type='button' onClick={()=>onDelete(contact.id)}>Delete</button>
                </li>
            ))}

        </ul>
    )


}
 





ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
}