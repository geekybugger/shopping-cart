import React, {useState} from 'react';
import CartItem from './CartItem';


const Cart = ({ initialItems }) => {

	const [items, setItems] = useState(initialItems);

	const grandTotal = items.reduce((total, item) => (
		total + item.qty * item.price
		),0).toFixed(2);
	return(
		<div className="cart">
		<h2> This is a cart!</h2>
		<div id = "CartItem">
		{items.map(item => <CartItem key={item.id} {...item} /> )}
		</div>
		<h2>Grand Total : ${grandTotal}</h2>
		</div>
		);
}

export default Cart;