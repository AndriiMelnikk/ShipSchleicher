import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tableReducer from './reducer/table';

const rootReducer = combineReducers({
    tableReducer
});

export const Store = () => {
    return configureStore({ reducer: rootReducer });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof Store>;
export type AppDispatch = AppStore['dispatch'];
