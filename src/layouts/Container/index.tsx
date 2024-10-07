import { ReactElement } from 'react';

interface IContainer {
  children: ReactElement;
  className?: string;
}

const Container = ({ children, className }: IContainer) => {
  return (
    <section className={`w-full max-w-[2560px] ${className}`}>
      {children}
    </section>
  );
};

export default Container;
