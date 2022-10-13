import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cartActions';
import { selectCartItems } from '../../store/cart/cartSelector';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
