import React, { FC, useEffect } from 'react';
// @ts-ignore
import style from './style.module.css';
import { TypeBtn } from '../../components/button';

import Modals from '../../components/modal';
import TableAdd from '../../components/modal/modals/tableAdd';
import { Table } from '../../ts/Table';

interface Props {
    table: Table[];
    addTable: (tr: Table) => void;
    removeTr: (id: Table[]) => void;
}

const Tables: FC<Props> = ({ table, addTable, removeTr }) => {
    return (
        <div className={style.tablePages}>
            <div>
                <Modals text='Add' typeBtn={TypeBtn.fill}>
                    <TableAdd addTable={addTable} />
                </Modals>
            </div>
            <div className={style.container}>
                <table>
                    <thead>
                        <tr>
                            <th />
                            <th>Company</th>
                            <th>Name</th>
                            <th>Additional</th>
                            <th>Street</th>
                            <th>Postal Code</th>
                            <th>Country</th>
                            <th>IBAN</th>
                            <th>BIC</th>
                            <th>Bank name</th>
                            <th>Fax</th>
                            <th>E-mail</th>
                            <th>Birthday</th>
                            <th>Homepage</th>
                        </tr>
                    </thead>
                    <Tbody table={table} removeTr={removeTr} />
                </table>
            </div>
        </div>
    );
};
export default Tables;

interface TbodyProps {
    table: Props['table'];
    removeTr: Props['removeTr'];
}

const Tbody: FC<TbodyProps> = ({ table, removeTr }) => {
    const deleteTr = (id: number) => {
        const newArr = table.filter((e) => e.id !== id);
        removeTr(newArr);
    };

    const TR = table.map((e) => {
        return (
            <tr key={e.id}>
                <td
                    onClick={() => {
                        deleteTr(e.id);
                    }}>
                    <svg xmlns='http://www.w3.org/2000/svg' className='bi bi-trash-fill' viewBox='0 0 16 16'>
                        <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' />
                    </svg>
                </td>
                <td>{e.company}</td>
                <td>{e.name}</td>
                <td>{e.additional}</td>
                <td>{e.street}</td>
                <td>{e.postalCode}</td>
                <td>{e.country}</td>
                <td>{e.iban}</td>
                <td>{e.bic}</td>
                <td>{e.bankName}</td>
                <td>{e.fax}</td>
                <td>{e.mail}</td>
                <td>{e.birthday}</td>
                <td>{e.homepage}</td>
            </tr>
        );
    });
    return <tbody>{TR}</tbody>;
};
