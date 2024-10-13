import { FC, HTMLProps, ReactElement } from 'react';

interface IContainer {
  children: ReactElement;
  className?: HTMLProps<HTMLElement>['className'];
  // className?: React.ComponentProps<'section'>['className'];
}

const Container: FC<IContainer> = ({ children, className }) => {
  return (
    <section className={`w-full max-w-[2560px] ${className}`}>
      {children}
    </section>
  );
};

export default Container;
