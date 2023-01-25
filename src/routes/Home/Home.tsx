import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Category } from '../../redux/categories/categoryTypes';
import { CategoriesMenuContainer } from './CategoriesMenu.styles';

const categories: Category[] = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    items: [],
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    items: [],
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    items: [],
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    items: [],
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    items: [],
  },
];

const Home = () => {
  return (
    <CategoriesMenuContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesMenuContainer>
  );
};

export default Home;
