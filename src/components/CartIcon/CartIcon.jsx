import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cartActions.js';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cartSelector.js';

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from './CartIcon.styles.jsx';

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const cartToggle = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={cartToggle}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
