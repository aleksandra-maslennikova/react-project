import { FormValues } from './types';

export const required = (value: keyof FormValues): string | undefined => (value ? undefined : 'Value is requied');
export const minLength = (value: keyof FormValues): string | undefined => (value.length < 4 ? 'Value must be at least 4 characters long' : undefined);
export const maxLength = (value: keyof FormValues): string | undefined => (value.length > 10 ? 'Value is too long' : undefined);
export const matchesPassword = (value: keyof FormValues, allValues: FormValues): string | undefined => (value === allValues.password ? undefined : 'Password must match');
export const asyncValidate = (values: FormValues): Promise<void> => {
  const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

  return sleep(1000).then(() => {
    const db = ['oliver', 'andrii'];
    if (db.includes(values.username)) {
      throw new Error('Username already taken');
    }
  }).catch((error) => {
    Promise.reject(error);
  });
};
