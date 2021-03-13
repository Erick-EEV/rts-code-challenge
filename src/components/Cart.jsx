import React from 'react'

export default function Cart(props) {
    return (
        <div>
            <h2>Cart</h2>
            {props.cart?.map(item => 
            <div key={item}>
                {item}
                <button onClick={() => props.shelf(item)}>Shelf Item</button>
            </div>)}
        </div>
    )
}
