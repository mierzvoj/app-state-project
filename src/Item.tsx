import React, { useState } from "react";

interface ItemProps {
  id: number;
  value: number;
  handler: (val: number) => void;
}

const Item = function (props: ItemProps) {
  const [hex, setHex] = useState(props.value + "");

  const handleToHexValue = (value: number) => {
    setHex(value.toString(16));
  };

  const handleDelete = (itemId: number, hadnlerFn: (val: number) => void) => {
    hadnlerFn(itemId);
  };

  return (
    <div>
      <button onClick={() => handleToHexValue(props.value)}>
        Go for Hex {hex}
      </button>
      <button onClick={() => handleDelete(props.id, props.handler)}>
        Delete
      </button>
    </div>
  );
};

export default Item;
