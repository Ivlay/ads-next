export const INPUTS: InputFields<'name' | 'username' | 'password'>[] = [
  {
    name: 'name',
    placeholder: 'Enter your name',
    rules: {
      required: {
        value: true,
        message: 'This field is required.',
      },
    },
  },
  {
    name: 'username',
    placeholder: 'Enter your username',
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
    placeholder: 'Enter your password',
    autoComplete: 'new-password',
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
