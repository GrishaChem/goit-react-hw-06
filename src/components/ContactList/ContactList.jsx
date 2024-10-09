import React from "react";
import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";
import { useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice.js";
import { useDispatch } from "react-redux";

const ContactList = ({}) => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <ul className={s.container}>
      {contacts.map((contact) => (
        <li className="s.li" key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}

      {/* {contactList.map((contactItem) => (
        <li className="s.li" key={contactItem.id}>
          <Contact name={contactItem.name} number={contactItem.number} />
        </li>
      ))} */}
    </ul>
  );
};

export default ContactList;
