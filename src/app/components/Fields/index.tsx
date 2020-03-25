import React, { FC } from 'react';
import cx from 'classnames';
import {
  Field,
  WrappedFieldProps,
  WrappedFieldMetaProps,
  WrappedFieldArrayProps,
} from 'redux-form';

const getValidityClassName = (meta: WrappedFieldMetaProps): string => {
  if (meta.asyncValidating) {
    return 'async-validating';
  }

  if (meta.touched && meta.invalid) {
    return 'invalid';
  }

  if (meta.touched && meta.valid) {
    return 'valid';
  }
  return '';
};

type PropsT = {
  label: string;
  type: string;
  id: string;
} & WrappedFieldProps;

export const customInput: FC<PropsT> = (props: PropsT) => {
  const {
    label, input, type, meta, id,
  } = props;

  return (
    <div
      className={cx(
        'custom-input-container',
        { 'flex-row-reverse': type === 'checkbox' },
        { dirty: meta.dirty },
        getValidityClassName(meta),
      )}
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} type={type} />
      {meta.error && meta.touched && !meta.active && (
        <div className="feedback-text error-text">{meta.error}</div>
      )}
    </div>
  );
};

export const customSelect: FC<PropsT> = (props: PropsT) => {
  const { id, input, label } = props;
  return (
    <div className="custom-select-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} {...input}>
        <option value="tabs">Tabs</option>
        <option value="spaces">Spaces</option>
      </select>
    </div>
  );
};

export const discounts: FC<WrappedFieldArrayProps> = ({ fields }: WrappedFieldArrayProps) => (
  <div className="custom-field-array-container">
    {fields.map((code, index) => (
      <div key={code} className="field-array-item">
        <Field
          name={code}
          type="text"
          component={customInput}
          label={`Discount Code #${index + 1}`}
          autoFocus
        />
        <button type="button" onClick={(): void => fields.remove(index)}>
          &times;
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={(): void => {
        fields.push('');
      }}
    >
      Add
      {' '}
      {!fields.length ? 'Discount Code(s)' : 'Another'}
    </button>
  </div>
);
