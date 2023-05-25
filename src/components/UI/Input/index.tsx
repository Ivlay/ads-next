import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './input.module.css';

type InputProps = JSX.IntrinsicElements['input'];

interface Props extends InputProps {
  error?: boolean;
  helperText?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, label = '', helperText = '', ...props }, ref) => {
    return (
      <div className={clsx(styles.wrapper, props.className)}>
        {label && <label className={styles.label}>{label}</label>}

        <input
          {...props}
          ref={ref}
          className={clsx(styles.input, error && 'error')}
        />

        {helperText && (
          <span
            className={clsx(styles.helperText, error && styles.helperTextError)}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
