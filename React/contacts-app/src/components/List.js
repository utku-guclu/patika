import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filterContacts = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });

  return (
    <div id="list-container">
      <input
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        type="text"
        placeholder="Filter contact"
      />
      <div className="contact-list">
        <ul>
          {filterContacts.map((contact, index) => {
            return (
              <li key={index}>
                <span>{contact.fullname}</span>
                <span>{contact.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Total Contacts ({filterContacts.length})</p>
    </div>
  );
}

export default List;
