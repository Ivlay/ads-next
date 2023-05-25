export const INPUTS: InputFields<'username' | 'password'>[] = [
  {
    name: 'username',
    placeholder: 'Enter your username',
    autoComplete: 'username',
    rules: {
      required: {
        value: true,
        message: 'This field is required.',
      },
    },
  },
  {
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Enter your password',
    rules: {
      required: {
        value: true,
        message: 'This field is required.',
      },
      minLength: {
        value: 4,
        message: 'Min length 4',
      },
    },
  },
];
