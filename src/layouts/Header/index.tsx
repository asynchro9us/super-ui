import { Link, Outlet } from 'react-router-dom';
import Container from '../Container';
import { ROUTE_ABOUT_US, ROUTE_COMPONENTS, ROUTE_HOME } from '../../routes';
import Footer from '../Footer';
import { Logo } from '../../assets/icons';

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 w-full flex justify-center bg-grayV1 text-white">
        <Container className="!max-w-[1024px] px-4">
          <ul className="flex items-center gap-6">
            <li>
              <Link to={ROUTE_HOME}>
                <Logo width={'30'} height={'30'} />
              </Link>
            </li>
            <li className="py-4 text-xs font-light">
              <Link to={ROUTE_COMPONENTS}>Components</Link>
            </li>
            <li className="py-4 text-xs font-light">
              <Link to={ROUTE_ABOUT_US}>About Us</Link>
            </li>
          </ul>
        </Container>
      </nav>
      <main className="flex justify-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Header;
