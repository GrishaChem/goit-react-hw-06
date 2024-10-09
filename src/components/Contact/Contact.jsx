import React from "react";
import s from "../Contact/Contact.module.css";

const Contact = ({ name, number, deleteContact }) => {
  return (
    <div className={s.liI}>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={deleteContact}>Delete</button>
    </div>
  );
};

export default Contact;
