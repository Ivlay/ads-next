import type { FC } from 'react';

import { SignInForm } from '@/components/pages/sign-in';

import { AuthLayout } from '@/layouts';

const SignIn: FC = () => {
  return (
    <AuthLayout title="Sign-in">
      <SignInForm />
    </AuthLayout>
  );
};

export default SignIn;
