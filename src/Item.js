import React from 'react'

export default function Item(props) {
  return (
    <li className="">
        {props.item.title ? props.item.title : '–'}
        <div className="button-group">
          <button className="remove" onClick={() => {props.deleteItem(props.item.id)}} >❌</button>
          <button className="edit" onClick={() => {props.editItem(props.item.id)}} >🖊️</button>
        </div>
    </li>
  )
}