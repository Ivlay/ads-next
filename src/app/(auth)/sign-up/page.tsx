import type { FC } from 'react';

import { AuthLayout } from '@/layouts';
import { SignUpForm } from '@/components/pages/sign-up';

const SignUp: FC = () => {
  return (
    <AuthLayout title="Sign up">
      <SignUpForm />
    </AuthLayout>
  );
}

export default SignUp;
