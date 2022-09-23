import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
  const { setIsCartOpen } = useContext(CartContext);

  const cartToggle = () => {
    setIsCartOpen((isOpen) => !isOpen);
  };

  return (
    <div className='cart-icon-container' onClick={cartToggle}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  );
};
export default CartIcon;
