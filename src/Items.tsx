import React, {useState} from "react";
import Item from "./Item";

const Items = () => {
    // const values = [
    //     {id: 1, value: 10},
    //     {id: 2, value: 20},
    //     {id: 3, value: Math.floor(Math.random() * 10)},
    //     {id: 4, value: Math.floor(Math.random() * 10)},
    //     {id: 5, value: Math.floor(Math.random() * 10)},
    //     {id: 6, value: Math.floor(Math.random() * 10)},
    //     {id: 7, value: Math.floor(Math.random() * 10)},
    //     {id: 8, value: Math.floor(Math.random() * 10)},
    //     {id: 9, value: Math.floor(Math.random() * 10)},
    //     {id: 10, value: Math.floor(Math.random() * 10)},
    // ];


    const [numbers, setNumbers] = useState(Array.from({length: 10}, () => {
        return {

            num: Math.floor(Math.random() * 10),
            // isHex: false,
        }
    }));

    // const [items, setItems] = useState<{ id: number; value: number }[]>(numbers);


    const handleDelete = function (itemId: number) {
        const newItems = [...numbers];
        newItems.forEach((item, i) => item.id = i + 1);
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
                />
            ))}
        </>
    );
};

export default Items;
