// Core
import React, { FC } from 'react';
import {
  Field, reduxForm, FieldArray, InjectedFormProps,
} from 'redux-form';
import capitalize from 'capitalize';
import { customInput, discounts } from '../Fields';
import {
  required, minLength, maxLength, matchesPassword, asyncValidate,
} from './validation';
import { FormValues } from '../Registration';
import './styles.css';

const RegistrationComponent: FC<InjectedFormProps<FormValues, {}, string>> = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field
      name="firstName"
      component={customInput}
      label="First Name"
      type="text"
      validate={[required]}
      normalize={capitalize}
    />
    <Field
      name="surname"
      component={customInput}
      label="Surname"
      type="text"
      validate={[required]}
      normalize={capitalize}
    />
    <Field
      name="username"
      component={customInput}
      label="Username"
      type="text"
      validate={[required, minLength, maxLength]}
    />
    <Field
      name="password"
      component={customInput}
      label="Password"
      type="password"
      validate={[required]}
    />
    <Field
      name="confirmPassword"
      component={customInput}
      label="Confirm Password"
      type="password"
      validate={[required, matchesPassword]}
    />
    <FieldArray name="discountCodes" component={discounts} />
    <button type="submit">Submit</button>
  </form>
);

export const RegistrationForm = reduxForm({
  form: 'registration',
  asyncValidate,
  asyncBlurFields: ['username'],
})(RegistrationComponent);
