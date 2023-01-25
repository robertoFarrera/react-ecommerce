import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../redux/cart/cartActions';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../redux/cart/cartSelector';

import { CartIconContainer, ItemCount, ShoppingIcon } from './CartIcon.styles';

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
