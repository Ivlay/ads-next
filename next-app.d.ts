import type { RegisterOptions } from 'react-hook-form';

export declare global {
  interface User {
    id: number;
    userName: string;
    name: string;
    token: string;
  }

  interface InputFields<T> {
    type?: string;
    name: T;
    placeholder: string;
    autoComplete?: string;
    rules: RegisterOptions;
  }
}
