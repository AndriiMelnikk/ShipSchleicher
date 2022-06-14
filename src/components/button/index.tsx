import React, { FC, ReactElement } from 'react';
// @ts-ignore
import style from './style.module.css';

interface Props {
    children: ReactElement | string;
    typeClass: TypeBtn;
    click?: () => void;
    type?: 'button' | 'submit';
}

export enum TypeBtn {
    outline = 'outline',
    fill = 'fill',
    icon = 'icon'
}

const Button: FC<Props> = ({ children, click, typeClass, type = 'button' }) => {
    return (
        <button type={type} onClick={click} className={[ style.btn, style[typeClass] ].join(' ')}>
            {children}
        </button>
    );
};
export default Button;
