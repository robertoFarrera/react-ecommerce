import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelector';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
