import {
  CartItemContainer,
  ItemDetails,
  ItemImg,
  ItemText,
} from './CartItem.styles';

const CartItem = ({ cartItem }) => {
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
