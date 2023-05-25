'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { type FieldValues, useForm } from 'react-hook-form';

import api from '@/api';

import useUserStore from '@/store/user';

import { Button, Input } from '@/components/UI';

import { INPUTS } from './form.constants';

import styles from './form.module.css';

const LoginForm: React.FC = () => {
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

      const { data } = await api.post('/sign-in', values);

      setUser({ ...data.user, token: data.token });
      setIsLoading(false);

      replace('/');
    } catch (error: any) {
      const errorMessage = error?.response?.data.message;

      setError('username', { message: errorMessage });
      setError('password', { message: errorMessage });

      setIsLoading(false);
    }
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        {INPUTS.map((input) => (
          <Input
            {...register(input.name, input.rules)}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            autoComplete={input.autoComplete}
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

export default LoginForm;
