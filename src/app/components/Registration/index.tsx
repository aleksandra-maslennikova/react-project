// Core
import React, { FC } from 'react';

// Components
import { RegistrationForm } from '../RegistrationForm';
import { FormValues } from '../RegistrationForm/types';

export const Registration: FC = () => {
  const handleSubmit = (): void => {
    // window.alert(JSON.stringify(values, null, 4));
  };

  const getInitialValues = (): Partial<FormValues> => ({
    preference: 'spaces',
    newsletter: true,
  });

  return <RegistrationForm onSubmit={handleSubmit} initialValues={getInitialValues()} />;
};
