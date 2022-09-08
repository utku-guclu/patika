import React, { useState, useEffect } from "react";

function Form({ contacts, addContact }) {
  const [form, setForm] = useState({ fullname: "", phone: "" });

  useEffect(() => {
    setForm({ fullname: "", phone: "", id: contacts.length });
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    // INPUT CONTROL
    if (!form.fullname || !form.phone || isNaN(Number(form.phone))) {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form className="contact-form" onSubmit={onSubmitForm}>
      <input
        onChange={onChangeInput}
        type="text"
        name="fullname"
        value={form.fullname}
        placeholder="Full Name"
      />
      <input
        onChange={onChangeInput}
        type="text"
        name="phone"
        value={form.phone}
        placeholder="Phone Number"
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
