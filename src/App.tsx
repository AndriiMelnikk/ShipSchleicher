import React, { useContext } from 'react';
import { Provider } from 'react-redux';
import Table from './pages/table/tableContainer';
import { Store } from './redux/store';

function App() {
    const store = Store();
    return (
        <div>
            <Provider store={store}>
                <div className='APP'>
                    <Table />
                </div>
            </Provider>
        </div>
    );
}

export default App;
