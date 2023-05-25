'use client'
import { useState, type FC } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, type FieldValues, } from 'react-hook-form';

import api from '@/api';

import useUserStore from '@/store/user';

import { Button, Input } from '@/components/UI';

import { INPUTS } from './form.constants';

import styles from './form.module.css';

const SignUpForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const { replace } = useRouter();

  const setUser = useUserStore((state) => state.setUser);

  const submit = async (values: FieldValues) => {
    try {
      clearErrors();
      setIsLoading(true);

      const { data } = await api.post('/sign-up', values);

      setUser({ ...data.user, token: data.token });
      setIsLoading(false);

      replace('/');
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        {INPUTS.map((input) => (
          <Input
            {...register(input.name, input.rules)}
            name={input.name}
            placeholder={input.placeholder}
            error={Boolean(errors?.[input.name])}
            helperText={errors?.[input.name]?.message as string}
            key={input.name}
          />
        ))}

        <Button type="submit" disabled={isLoading}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
