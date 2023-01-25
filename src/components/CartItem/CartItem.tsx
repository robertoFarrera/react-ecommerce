import { FC } from 'react';
import { CartItem as TCartItem } from '../../redux/cart/cartTypes';
import {
  CartItemContainer,
  ItemDetails,
  ItemImg,
  ItemText,
} from './CartItem.styles';

type CartItemProps = {
  cartItem: TCartItem;
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <ItemImg src={imageUrl} alt={name} />
      <ItemDetails>
        <ItemText>{name}</ItemText>
        <ItemText>
          {quantity} x ${price}
        </ItemText>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
