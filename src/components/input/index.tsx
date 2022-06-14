import React, { FC, InputHTMLAttributes, ReactElement } from 'react';
// @ts-ignore
import style from './style.module.css';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    register: any;
    children?: ReactElement;
    errors?: any;
    type?: string;
}

const Input: FC<Input> = ({ register, children, errors, type = 'text' }) => {
    return (
        <div className={style.input}>
            <label className={errors && errors[register.name] ? style.error : ''}>
                <input type={type} {...register} />
                {children}
            </label>
        </div>
    );
};

export default Input;

interface Select extends InputHTMLAttributes<HTMLSelectElement> {
    register: any;
    options: string[];
}
export const Select: FC<Select> = ({ register, options }) => {
    const option = options.map((e) => {
        return (
            <option key={e} value={e}>
                {e}
            </option>
        );
    });
    return (
        <div className={style.input}>
            <label>
                <select {...register}>{option}</select>
                <svg xmlns='http://www.w3.org/2000/svg' className='bi bi-chevron-down' viewBox='0 0 16 16'>
                    <path
                        fillRule='evenodd'
                        d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                    />
                </svg>
            </label>
        </div>
    );
};
