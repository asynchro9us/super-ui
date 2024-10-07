import { Logo } from '../../assets/icons';
import Container from '../Container';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-gray-50">
      <Container className="!max-w-[1024px] p-4 flex flex-col gap-4">
        <>
          <div className="flex items-center">
            <Logo width={'30'} height={'30'} />
            <p className="text-xs text-gray-800">Some description over here.</p>
          </div>

          <hr />

          <p className="text-xs text-gray-800"> Some navigation urls</p>

          <hr />

          <p className="text-sm text-gray-500">Copyright</p>
        </>
      </Container>
    </footer>
  );
};

export default Footer;
