import React, {useState} from "react";
import Item from "./Item";

const Items = () => {

    const [numbers, setNumbers] = useState(Array.from({length: 10}, ( id: number ) => {
        return {
            id,
            num: Math.floor(Math.random() * 10),
            isHex: false,
        }
    }));


    const handleDelete = function (itemId: number) {

        const newItems = [...numbers];
        var index = newItems.findIndex((i) => i.id === itemId);
        if (index !== -1) {
            newItems.splice(index, 1);
            setNumbers(newItems);
        }
    };

    const deleteHandler = (itemId: number) => handleDelete(itemId);


    return (
        <>
            {numbers.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    handler={deleteHandler}
                    value={item.num}
                    isHex={item.isHex}
                />
            ))}
        </>
    );
};

export default Items;
