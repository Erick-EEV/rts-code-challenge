import React, {useState} from 'react'
import Cart from '../components/Cart'
import Inventory from '../components/Inventory'

export default function Store() {

    const [inventory, setInventory] = useState(["Soda", "Chips", "Gum"]);
    const [cart, setCart] = useState(["Popcorn"]);

    const buy = (item) => {
        const newInv = inventory.filter(items => items !== item)
        setInventory(newInv)
        setCart((prevCart) => {
            return [...prevCart, item]
        })
    }

    const shelf = (item) => {
        const newCart = cart.filter(items => items !== item)
        setCart(newCart)
        inventory.push(item)
    }
    return (
        <div>
            <h1>Store</h1>
            <Cart cart={cart} shelf={shelf}/>
            <Inventory inventory={inventory} buy={buy}/>
        </div>
    )
}
