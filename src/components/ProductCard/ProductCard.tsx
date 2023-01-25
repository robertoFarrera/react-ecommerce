import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { CategoryItem } from '../../redux/categories/categoryTypes';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import {
  Footer,
  Name,
  Price,
  ProductCardContainer,
} from './ProductCard.styles';

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
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
