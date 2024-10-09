import React from "react";
import Contact from "../Contact/Contact.jsx";
import s from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.container}>
      {contacts.map((contact) => (
        <li className="s.li" key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            deleteContact={() => deleteContact(contact.id)}
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
