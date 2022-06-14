import React, { FC, ReactElement, useState, createContext } from 'react';
// @ts-ignore
import style from './style.module.css';
// @ts-ignore
import Modal from 'react-modal';
import Button, { TypeBtn } from '../button';

interface Props {
    text: ReactElement | string;
    children: ReactElement;
    typeBtn: TypeBtn;
}

export interface BtnCtx {
    close: (show: boolean) => void;
}

export const BtnCtx = createContext<BtnCtx>({ close: (show) => undefined });

const Modals: FC<Props> = ({ children, typeBtn, text }) => {
    const [ modalIsOpen, setIsOpen ] = useState(false);

    const value: BtnCtx = {
        close: setIsOpen
    };
    return (
        <BtnCtx.Provider value={value}>
            <Button typeClass={typeBtn} click={() => setIsOpen(true)}>
                {text}
            </Button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setIsOpen(false)} className={style.modal}>
                <div className={style.btnClose}>
                    <Button typeClass={TypeBtn.icon} click={() => setIsOpen(false)}>
                        <svg xmlns='http://www.w3.org/2000/svg' className='bi bi-x-lg' viewBox='0 0 16 16'>
                            <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
                        </svg>
                    </Button>
                </div>
                <div className={style.container}>{children}</div>
            </Modal>
        </BtnCtx.Provider>
    );
};
export default Modals;
