import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../redux/categories/categoryTypes';
import {
  CategoryItemContainer,
  BackgroundImage,
  Body,
} from './CategoryItem.styles';

type CategoryItemProps = {
  category: Category;
};

const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/shop/${title}`);

  return (
    <CategoryItemContainer
      onClick={navigateHandler}
      className='category-item-container'
    >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
