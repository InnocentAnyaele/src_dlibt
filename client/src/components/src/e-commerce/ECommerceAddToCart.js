import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const cart = [];

function ECommerceAddToCart(props) {
	const addToCartHandler = () => {
		// const getCartItems = localStorage.getItem('cart');
		// let cartArray = [];
		cart.push({
			id:
				new Date().getHours() +
				new Date().getMinutes() +
				new Date().getSeconds() +
				props.id,
			title: props.title,
			name: props.name,
			email: props.email,
			phone: props.phone,
			price: props.price,
		});
		localStorage.setItem('cart', JSON.stringify(cart));
		// cartArray = [JSON.parse(getCartItems), ...cart];
		// localStorage.setItem('cart', JSON.stringify(cartArray));
		alert('added to cart');
	};

	return (
		<div>
			<button className='btn btn-primary mr-2' onClick={addToCartHandler}>
				<ShoppingCartIcon />
			</button>
		</div>
	);
}

export default ECommerceAddToCart;
