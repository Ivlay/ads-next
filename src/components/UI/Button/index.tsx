import type { ReactNode, FC } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

type ButtonProps = JSX.IntrinsicElements['button'];

interface Props extends ButtonProps {
  children: ReactNode;
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {children}
    </button>
  );
};

export default Button;
