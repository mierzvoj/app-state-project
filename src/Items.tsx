import React, { useState } from "react";
import Item from "./Item";

const Items = () => {
  const values = [
    { id: 1, value: 0 },
    { id: 2, value: 20 },
    { id: 3, value: 45 },
  ];

  const [items, setItems] = useState<{ id: number; value: number }[]>(values);

  const handleDelete = function (itemId: number) {
    const newItems = [...items];
    var index = newItems.findIndex((i) => i.id === itemId);
    if (index !== -1) {
      newItems.splice(index, 1);
      setItems(newItems);
    }
  };

  const deleteHandler = (itemId: number) => handleDelete(itemId);

  return (
    <>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          handler={deleteHandler}
          value={item.value}
        />
      ))}
    </>
  );
};

export default Items;
