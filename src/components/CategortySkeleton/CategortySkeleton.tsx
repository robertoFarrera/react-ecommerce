import { FC } from 'react';
import ContentLoader from 'react-content-loader';

const CategortySkeleton: FC = (props) => (
  <ContentLoader
    speed={2}
    width='100%'
    height='auto'
    viewBox='0 0 440 124'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <rect x='8' y='5' rx='0' ry='0' width='95' height='92' />
    <rect x='115' y='6' rx='0' ry='0' width='97' height='93' />
    <rect x='117' y='105' rx='0' ry='0' width='94' height='15' />
    <rect x='227' y='6' rx='0' ry='0' width='98' height='94' />
    <rect x='336' y='7' rx='0' ry='0' width='95' height='90' />
    <rect x='7' y='104' rx='0' ry='0' width='94' height='15' />
    <rect x='227' y='104' rx='0' ry='0' width='94' height='15' />
    <rect x='339' y='105' rx='0' ry='0' width='94' height='14' />
  </ContentLoader>
);

export default CategortySkeleton;
