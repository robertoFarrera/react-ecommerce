import CategoryItem from '../CategoryItem/CategoryItem';

import { CategoriesMenuContainer } from './CategoriesMenu.styles';

const CategoriesMenu = ({ categories }) => {
  return (
    <CategoriesMenuContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesMenuContainer>
  );
};

export default CategoriesMenu;
