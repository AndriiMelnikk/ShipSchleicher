import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Table } from '../../ts/Table';

interface TableState {
    table: Table[];
}

const initialState: TableState = {
    table: []
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addRow: (state, action: PayloadAction<Table>) => {
            state.table.push(action.payload);
        },
        removeRow: (state, action: PayloadAction<Table[]>) => {
            state.table = action.payload;
        }
    }
});

export const { addRow, removeRow } = tableSlice.actions;
export default tableSlice.reducer;
