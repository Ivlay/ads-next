'use client';
import { type FC } from 'react';
import {
  useForm,
  useFieldArray,
  FieldValues,
} from 'react-hook-form';

import useAdsStore from '@/store/ads';

import { Button, Input } from '@/components/UI';

import { INPUTS } from './form.constants';

import styles from './form.module.css';
import useUserStore from '@/store/user';

const CreateAdsForm: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      images: [
        { link: '' },
        { link: '' },
        { link: '' },
      ],
      description: '',
      title: '',
    },
  });

  const { fields } = useFieldArray({ control, name: 'images' });

  const createAds = useAdsStore((store) => store.create);

  const isLoggedIn = useUserStore((store) => store.isLoggedIn);

  console.log('isLoggedIn :>> ', isLoggedIn);

  const submit = async (values: FieldValues) => {
    await createAds({
      ...values,
      images: values.images.map((image: { link: string }) => image.link).filter(Boolean),
    });

    reset();
  };

  return (
    <div className={styles.createAdsWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        {INPUTS.map((input) => (
          <Input
            {...register(input.name, input.rules)}
            placeholder={input.placeholder}
            key={input.name}
            error={Boolean(errors?.[input.name])}
            helperText={errors?.[input.name]?.message as string}
          />
        ))}

        {fields.map((input, index) => (
          <Input
            {...register(`images.${index}.link`)}
            placeholder="Enter link to image"
            key={input.id}
          />
        ))}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreateAdsForm;
