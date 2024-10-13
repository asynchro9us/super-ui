import { FC } from 'react';
import { Container } from '../../layouts';

const Home: FC = () => {
  return (
    <Container className="px-6">
      <>
        <div className="flex flex-col justify-center items-end py-24">
          <h1 className="text-3xl sm:text-5xl md:text-7xl">React Components</h1>
          <span>
            <p className="inline text-gray-600">powered by</p>
            <h2 className="inline text-3xl ml-2">Super UI</h2>
          </span>
        </div>

        <div className="flex flex-col justify-center items-start py-24">
          <h1 className="text-2xl sm:text-3xl md:text-5xl">
            Built by us for you.
          </h1>
          <p className="inline text-gray-600 mt-1">
            Robust, customizable and responsive components ready to use on the
            go.
          </p>
        </div>

        <div className="flex flex-col items-center py-24 gap-6">
          <p className="text-2xl">Find out more about our components.</p>
        </div>
      </>
    </Container>
  );
};

export default Home;
