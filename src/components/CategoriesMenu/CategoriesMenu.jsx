import CategoryItem from '../CategoryItem/CategoryItem';

import './CategoriesMenu.scss';

const CategoriesMenu = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;