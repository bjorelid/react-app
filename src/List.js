import React, {useState, useRef} from 'react'
import Item from './Item';

export default function List(){

    const [items, setItems] = useState([{
        id: 1, 
        title: 'Amour'
    },
    {
        id: 2, 
        title: 'En separation'
    },
    {
        id: 3, 
        title: 'Le Haine'
    },
    {
        id: 4, 
        title: 'Min ungdoms kärlek'
    },
    {
        id: 5, 
        title: 'Blå är den varmaste färgen'
    },
    {
        id: 6, 
        title: 'Play'
    },
    {
        id: 7, 
        title: 'De oskyldiga'
    }]);

    const inputRef = useRef();

    function addItem(event){
        if(event.keyCode === 13 && inputRef.current.value !== ""){
            const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
            setItems([...items, {
                id: newId,
                title: inputRef.current.value
            }]);
            inputRef.current.value = "";
        }

    }

    function deleteItem(id){
        setItems(items.filter((item) => item.id !== id))
    }

    function editItem(id){
        setItems(items.map(item => {
            if (item.id === id) {
                let itemNewTitle = prompt("Ändra titel", item.title);
                if (itemNewTitle !== null) {
                    item.title = itemNewTitle;
                }
            }
            return item
          }))
    }

    return(
        <div>
            <input className="" placeholder="Lägg till film" onKeyUp={addItem} ref={inputRef} />
            <ul className="">
                {items.map((item) => <Item key={item.id} item={item} deleteItem={deleteItem} editItem={editItem} />)}
            </ul>        
        </div>
    )

}