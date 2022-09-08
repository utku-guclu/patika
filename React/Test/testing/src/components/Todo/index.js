import React, { useState } from "react";

function Todo() {
  const defaultItems = [
    {
      name: "ItemA",
    },
    {
      name: "ItemB",
    },
  ];

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };

  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);
  return (
    <div>
      <label htmlFor="input">
        Text
        <input
          id="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
        />
      </label>
      <button onClick={addItem}>ADD</button>
      {items.map((item, i) => (
        <h1 key={i}>{item.name}</h1>
      ))}
    </div>
  );
}

export default Todo;
