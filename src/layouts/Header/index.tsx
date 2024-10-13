import { Link } from 'react-router-dom';
import Container from '../Container';
import { ROUTE_ABOUT_US, ROUTE_COMPONENTS, ROUTE_HOME } from '../../routes';
import { Logo } from '../../assets/icons';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <nav className="sticky top-0 w-full flex justify-center bg-grayV3 backdrop-blur-sm">
      <Container className="max-w-[1024px] px-6">
        <ul className="flex items-center gap-6">
          <li>
            <Link to={ROUTE_HOME}>
              <Logo width={'30'} height={'30'} />
            </Link>
          </li>
          <li className="py-4 text-xs">
            <Link to={ROUTE_COMPONENTS}>Components</Link>
          </li>
          <li className="py-4 text-xs">
            <Link to={ROUTE_ABOUT_US}>About Us</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Header;
