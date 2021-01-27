import Item from '../CartItem/CartItem';
//Styles
import { Wrapper } from './Cart.styles';
//Types
import { CartItem } from '../App';

type Props = {
	cartItems: CartItem[];
	addToCart: (clickedItem: CartItem) => void;
	removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ addToCart, cartItems, removeFromCart }) => {
	const calculateTotal = (items: CartItem[]) => {
		return items.reduce((acc: number, item) => acc + item.amount * item.price, 0);
	}

	return (
		<Wrapper>
			<h2>Your Shopping Cart</h2>
			{cartItems.length === 0 ? <p>No items in cart.</p> : null}
			{cartItems.map(item => (
				<Item key={item.id}
					item={item}
					addToCart={addToCart}
					removeFromCart={removeFromCart} />
			))}
			<h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
		</Wrapper>
	)
}

export default Cart