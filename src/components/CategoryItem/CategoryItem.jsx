import { useNavigate } from 'react-router-dom';
import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(`/shop/${title}`);

  return (
    <div onClick={navigateHandler} className='category-item-container'>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
