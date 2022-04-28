import React, {useState} from "react";

interface ItemProps {
    key: number;
    id: number;
    value: number;
    isHex: boolean;
    handler: (val: number) => void;
}

const Item = function ({id, value, isHex, handler}: ItemProps){
    const [hex, setHex] = useState(isHex);

    const toggle = () => {
        setHex(!hex);
    };

    const handleDelete = (itemId: number, handlerFn: (val: number) => void) => {
        handlerFn(itemId);
    };
    console.log(isHex);
    console.log(hex);

    console.log(value.toString(16));


    return (
        <div>

            My val is <b>{hex ? value.toString(16) : value }</b>
            <button onClick={toggle}>Toggle hex</button>
            <button onClick={() => handleDelete(id, handler)}>
                Delete
            </button>
        </div>
    );
};

export default Item;
