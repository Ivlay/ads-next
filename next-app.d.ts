import type { RegisterOptions } from 'react-hook-form';
import { StateCreator } from 'zustand';

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

  type StateCreatorWithDevtools<T> = StateCreator<T, [], [['zustand/devtools', T]]>
}
