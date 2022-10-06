import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.styles.jsx';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const cartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
