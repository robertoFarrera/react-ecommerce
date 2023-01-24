import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home/Home';
import Authentication from './routes/Authentication/Authentication';
import Navigation from './routes/Navigation/Navigation';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

import { checkUserSession } from './redux/user/userActions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
