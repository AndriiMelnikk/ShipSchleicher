import React, { FC, useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BtnCtx } from '../..';
// @ts-ignore
import style from './style.module.css';

import Input, { Select } from '../../../input';
import Button, { TypeBtn } from '../../../button';
import { Table } from '../../../../ts/Table';

interface Modal {
    show: (show: boolean) => void;
    slider: (left: any) => void;
    addPost?: (add: Table) => void;
    setValue: (body: any) => void;
}
interface Props {
    addTable: (tr: Table) => void;
}

const TableAdd: FC<Props> = ({ addTable }) => {
    const btnCtx = useContext(BtnCtx);
    const [ slider, setSlider ] = useState(0);
    const [ value, setValue ] = useState({});

    const addPost = (date: Table) => {
        addTable(date);
    };
    return (
        <div className={style.tableModal} style={{ left: `-${slider}00%` }}>
            <InvoiceAddress show={btnCtx.close} slider={setSlider} setValue={setValue} />
            <BankData show={btnCtx.close} slider={setSlider} setValue={setValue} />
            <Contact show={btnCtx.close} slider={setSlider} addPost={addPost} setValue={setValue} />
        </div>
    );
};
export default TableAdd;

// InvoiceAddress
type addressValue = {
    company: Table['company'];
    name: Table['name'];
    additional: Table['additional'];
    street: Table['street'];
    postalCode: Table['postalCode'];
    country: Table['country'];
};
const InvoiceAddress: FC<Modal> = ({ show, slider, setValue }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<addressValue>();
    const onSubmit: SubmitHandler<addressValue> = (data) => {
        setValue((prev: any) => ({ ...prev, ...data }));
        slider((prev: number) => prev + 1);
    };

    return (
        <div className={style.invoiceAddress}>
            <h2> Invoice Address </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.columnInput}>
                    <span>Company *</span>
                    <Input register={register('company', { required: true })} errors={errors} />
                </div>
                <div className={style.columnInput}>
                    <span>Name *</span>
                    <Input register={register('name', { required: true })} errors={errors} />
                </div>
                <div className={style.columnInput}>
                    <span> Additional</span>
                    <Input register={register('additional')} />
                </div>
                <div className={style.columnInput}>
                    <span>Street</span>
                    <Input register={register('street')} />
                </div>
                <div className={style.columnInput}>
                    <span>PostalCode</span>
                    <Input
                        register={register('postalCode', {
                            pattern: /[0-9]/
                        })}
                        errors={errors}
                    />
                </div>
                <div className={style.columnInput}>
                    <span>Country</span>
                    <Select register={register('country')} options={[ 'usa', 'ua', 'pol' ]} />
                </div>
                <div className={style.buttons}>
                    <Button typeClass={TypeBtn.outline} click={() => show(false)}>
                        Cancel
                    </Button>
                    <Button type='submit' typeClass={TypeBtn.fill}>
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

// Bank Data
type bankValue = {
    iban: Table['iban'];
    bic: Table['bic'];
    bankName: Table['bankName'];
};

const BankData: FC<Modal> = ({ show, slider, setValue }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<bankValue>();
    const onSubmit: SubmitHandler<bankValue> = (data) => {
        setValue((prev: any) => ({ ...prev, ...data }));
        slider((prev: number) => prev + 1);
    };

    return (
        <div className={style.invoiceAddress}>
            <h2> BankData </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.columnInput}>
                    <span>IBAN *</span>
                    <Input register={register('iban', { required: true })} errors={errors} />
                </div>
                <div className={style.columnInput}>
                    <span>BIC *</span>
                    <Input register={register('bic', { required: true })} errors={errors} />
                </div>
                <div className={style.columnInput}>
                    <span>Bank name *</span>
                    <Input register={register('bankName', { required: true })} errors={errors} />
                </div>
                <div className={style.buttons}>
                    <Button typeClass={TypeBtn.outline} click={() => show(false)}>
                        Cancel
                    </Button>
                    <Button typeClass={TypeBtn.outline} click={() => slider((prev: number) => prev - 1)}>
                        Previous
                    </Button>
                    <Button type='submit' typeClass={TypeBtn.fill}>
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

// Contact
type contactValue = {
    fax: Table['fax'];
    mail: Table['mail'];
    birthday: Table['birthday'];
    homepage: Table['homepage'];
};
const Contact: FC<Modal> = ({ show, slider, addPost, setValue }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<contactValue>();
    const onSubmit: SubmitHandler<contactValue> = (data) => {
        setValue((prev: any) => {
            // @ts-ignore
            addPost({ ...prev, ...data });
        });
        show(false);
    };

    return (
        <div className={style.invoiceAddress}>
            <h2> Contact </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.columnInput}>
                    <span>Fax</span>
                    <Input register={register('fax')} />
                </div>
                <div className={style.columnInput}>
                    <span>E-mail</span>
                    <Input
                        register={register('mail', {
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })}
                        errors={errors}
                    />
                </div>
                <div className={style.columnInput}>
                    <span>Birthday</span>
                    <Input register={register('birthday')} type='date'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='bi bi-calendar' viewBox='0 0 16 16'>
                            <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                        </svg>
                    </Input>
                </div>
                <div className={style.columnInput}>
                    <span>Homepage</span>
                    <Input register={register('homepage')} />
                </div>
                <div className={style.buttons}>
                    <Button typeClass={TypeBtn.outline} click={() => show(false)}>
                        Cancel
                    </Button>
                    <Button typeClass={TypeBtn.outline} click={() => slider((prev: number) => prev - 1)}>
                        Previous
                    </Button>
                    <Button type='submit' typeClass={TypeBtn.fill}>
                        Save
                    </Button>
                </div>
            </form>
        </div>
    );
};
