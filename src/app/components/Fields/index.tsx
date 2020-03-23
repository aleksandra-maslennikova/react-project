import React, { FC } from 'react';
import cx from 'classnames';
import { Field, WrappedFieldProps, WrappedFieldMetaProps, WrappedFieldArrayProps } from 'redux-form';

const getValidityClassName = (meta: WrappedFieldMetaProps) => {
    if (meta.asyncValidating) {
        return 'async-validating';
    }

    if (meta.active) {
        return;
    }

    if (meta.touched && meta.invalid) {
        return 'invalid';
    }

    if (meta.touched && meta.valid) {
        return 'valid';
    }
}

type PropsT = {
    label: string,
    type: string,
} & WrappedFieldProps


export const customInput: FC<PropsT> = (props: PropsT) => {
    const { label, input, type, meta } = props;

    return (
        <div
            className={cx(
                'custom-input-container',
                { 'flex-row-reverse': type === 'checkbox' },
                { dirty: meta.dirty },
                getValidityClassName(meta)
            )}
        >
            <label>{label}</label>
            <input {...input} type={type} />
            {meta.error &&
                meta.touched && !meta.active && (
                    <div className="feedback-text error-text">
                        {meta.error}
                    </div>
                )}
        </div>
    );
};

export const customSelect:FC<PropsT> = (props: PropsT) => {
    return (
        <div className="custom-select-container">
            <label>{props.label}</label>
            <select {...props.input}>
                <option value="tabs">Tabs</option>
                <option value="spaces">Spaces</option>
            </select>
        </div>
    );
}

export const discounts: FC<WrappedFieldArrayProps> = ({ fields }) => (
    <div className="custom-field-array-container">
        {fields.map((code, index) => (
            <div key={index} className="field-array-item">
                <Field
                    name={code}
                    type="text"
                    component={customInput}
                    label={`Discount Code #${index + 1}`}
                    autoFocus
                />
                <button type="button" onClick={() => fields.remove(index)}>
                    &times;
                </button>
            </div>
        ))}
        <button type="button" onClick={() => {
            fields.push('')
        }}>
            Add {!fields.length ? 'Discount Code(s)' : 'Another'}
        </button>
    </div>
);
