import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { selectCurrentUser } from '../../redux/user/userSelector';
import { selectIsCartOpen } from '../../redux/cart/cartSelector';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              LOGOUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>LOGIN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
