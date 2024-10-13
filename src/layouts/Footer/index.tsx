import { FC } from 'react';
import { Logo } from '../../assets/icons';
import Container from '../Container';

const Footer: FC = () => {
  return (
    <footer className="w-full flex justify-center">
      <Container className="max-w-[1024px] px-6 flex flex-col gap-4">
        <>
          <div className="flex items-center mt-6">
            <Logo width={'30'} height={'30'} />
            <p className="text-xs text-gray-800">Some description over here.</p>
          </div>

          <hr />

          <p className="text-xs text-gray-800"> Some navigation urls</p>

          <hr />

          <p className="text-sm text-gray-500 pb-6 font-thin">Copyright</p>
        </>
      </Container>
    </footer>
  );
};

export default Footer;
