import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CategortySkeleton from '../../components/CategortySkeleton/CategortySkeleton';
import ProductCard from '../../components/ProductCard/ProductCard';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../redux/categories/categorySelector';

import { CategoryContainer, CategoryTitle } from './Category.styles';

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      {isLoading ? (
        <CategortySkeleton />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};
export default Category;
