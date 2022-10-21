import { useSelector } from 'react-redux';
import CategortySkeleton from '../../components/CategortySkeleton/CategortySkeleton';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/categorySelector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <>
      {isLoading ? (
        <div style={{ marginTop: '90px' }}>
          <CategortySkeleton />
        </div>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;
