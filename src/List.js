import React from 'react'
import "./App.css"

function List(props) {
    const items=props.items;
    const listItems=items.map(item=>
        {
          return(
                <ul key={item.key} id="lista">
                    <li><span>{item.text}</span>
                    <button onClick={()=>props.deleteItem(item.key)} className="btn">x</button></li>
                </ul>
          )
        })
    return (
        <div>
            {listItems}
        </div>
    )
}

export default List
