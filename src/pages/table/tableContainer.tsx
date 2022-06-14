import React, { FC } from 'react';
import Tables from '.';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addRow, removeRow } from '../../redux/reducer/table';
import { Table } from '../../ts/Table';

const TableContainer: FC = () => {
    const { table } = useAppSelector((state) => state.tableReducer);
    const dispatch = useAppDispatch();

    const Id = table.length ? table[table.length - 1].id + 1 : 1;

    const AddTableAC = (td: Table) => {
        dispatch(addRow({ ...td, id: Id }));
    };

    const RemoveTrAC = (arr: Table[]) => {
        dispatch(removeRow(arr));
    };
    return <Tables table={table} addTable={AddTableAC} removeTr={RemoveTrAC} />;
};

export default TableContainer;
