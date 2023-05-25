export const INPUTS: InputFields<'title' | 'description'>[] = [
  {
    name: 'title',
    placeholder: 'Enter title of advertisement',
    rules: {
      required: {
        value: true,
        message: 'This field is required.',
      },
    },
  },
  {
    name: 'description',
    placeholder: 'Enter description of advertisement',
    rules: {
      required: {
        value: true,
        message: 'This field is required.',
      },
      maxLength: {
        value: 300,
        message: 'Еhe number of characters cannot be more than 300.',
      },
    },
  },
];
