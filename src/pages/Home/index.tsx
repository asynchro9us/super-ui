import { FC } from 'react';
import { Container } from '../../layouts';

const Home: FC = () => {
  return (
    <Container>
      <>
        <div className="flex justify-center items-center flex-col px-6 py-20">
          <p className="text-center text-5xl md:text-7xl lg:text-8xl font-extrabold">
            <span className="block">React</span>
            <span className="block">Components</span>
          </p>
          <p className="text-xl md:text-2xl mt-8">Ready to use UI Components</p>
          <p className="text-sm md:text-base mt-2">
            Highly Customizable, Robust and Reponsive
          </p>
        </div>

        <div className="lg:flex lg:justify-center">
          <div className="flex flex-col gap-10 lg:grid lg:px-6 lg:grid-cols-3 lg:max-w-[1440px]">
            <div className="bg-orangeV1 mr-16 rounded-r-xl p-6 lg:rounded-xl lg:mr-0">
              <h2 className="font-bold md:text-xl lg:text-2xl">Customizable</h2>
              <p className="text-xs md:text-sm lg:text-base mt-1.5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                veritatis voluptas fugiat.
              </p>
            </div>

            <div className="bg-greenV2 ml-16 rounded-l-xl p-6 lg:rounded-xl lg:ml-0">
              <h2 className="font-bold md:text-xl lg:text-2xl">Robust</h2>
              <p className="text-xs md:text-sm lg:text-base mt-1.5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                suscipit neque nobis odit obcaecati eum autem odio eaque ullam
                doloribus!
              </p>
            </div>

            <div className="bg-cyanV1 mr-16 rounded-r-xl p-6 lg:rounded-xl lg:mr-0">
              <h2 className="font-bold md:text-xl lg:text-2xl">Reponsive</h2>
              <p className="text-xs md:text-sm lg:text-base mt-1.5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore ad dignissimos rerum sequi possimus?
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col py-12 px-6">
          <h2 className="font-bold text-3xl md:text-4xl">Quick and Easy</h2>
          <p className="mt-4 text-sm md:text-base lg:text-xl">
            Beautifully designed components that you can copy and paste into
            your apps.
          </p>
          <h3 className="mt-10 font-bold text-3xl md:text-4xl">
            The only component library you will ever need.
          </h3>
        </div>
      </>
    </Container>
  );
};

export default Home;
