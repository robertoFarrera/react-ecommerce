import { FC } from 'react';
import { CategoryItem } from '../../redux/categories/categoryTypes';
import ProductCard from '../ProductCard/ProductCard';
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from './CategoryPreview.styles';

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
