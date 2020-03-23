// Core
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';
import cx from 'classnames';
import { AppState } from '../../init/rootReducer';

// Instruments
import Styles from './styles.module.css';
import { startFetching, stopFetching, fill } from '../../bus/profile/actions';
import { ProfileState } from '../../bus/profile/reducer';

type FormValues = {
  firstName: string;
  lastName: string;
};

export const Profile: FC = () => {
  const dispatch = useDispatch();

  const _submit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    dispatch(startFetching());
    actions.setSubmitting(false);
    dispatch(fill(values));
    dispatch(stopFetching());
  };

  const profile = useSelector<AppState, ProfileState>((state: AppState) => state.profile);
  const {
    profile: { firstName, lastName },
    isFetching,
  } = profile;

  const buttonMessage = isFetching ? 'Обновляю' : 'Обновлено';

  const disabledStyle = cx({
    [Styles.disabled]: isFetching,
  });

  return (
    <section className={Styles.profile}>
      <h1>
        {firstName}
        {' '}
        {lastName}
      </h1>
      <Formik
        initialValues={{ firstName, lastName }}
        render={() => (
          <Form>
            <Field className={disabledStyle} disabled={isFetching} name="firstName" type="text" />
            <Field className={disabledStyle} disabled={isFetching} name="lastName" type="text" />
            <button className={disabledStyle} disabled={isFetching} type="submit">
              {buttonMessage}
            </button>
          </Form>
        )}
        onSubmit={_submit}
      />
    </section>
  );
};
