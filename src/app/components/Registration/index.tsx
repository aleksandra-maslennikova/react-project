// Core
import React, { FC } from 'react';

// Components
import { RegistrationForm } from '../RegistrationForm';

export type FormValues = {
  preference: string;
  newsletter: boolean;
  firstName: string;
  surname: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export const Registration: FC = () => {
  const handleSubmit = (values: FormValues): void => {
    window.alert(JSON.stringify(values, null, 4));
  };

  const getInitialValues = (): Partial<FormValues> => ({
    preference: 'spaces',
    newsletter: true,
  });

  return <RegistrationForm onSubmit={handleSubmit} initialValues={getInitialValues()} />;
};
