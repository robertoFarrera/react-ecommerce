import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

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
