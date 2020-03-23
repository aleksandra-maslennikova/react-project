import { FormValues } from '../Registration';

export const required = (value: keyof FormValues) => (value ? void 0 : 'Value is requied');
export const minLength = (value: keyof FormValues) => (value.length < 4 ? 'Value must be at least 4 characters long' : void 0);
export const maxLength = (value: keyof FormValues) => (value.length > 10 ? 'Value is too long' : void 0);
export const matchesPassword = (value: keyof FormValues, allValues: FormValues) => (value === allValues.password ? void 0 : 'Password must match');
export const asyncValidate = (values: FormValues) => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  return sleep(1000).then(() => {
    console.log('sleep');
    const db = ['oliver', 'andrii'];
    if (db.includes(values.username)) {
      return Promise.reject({
        username: 'Username already taken',
      });
    }
  });
};
