import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Navigation from './routes/Navigation/Navigation';

const Shop = () => {
  return <h1>Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
