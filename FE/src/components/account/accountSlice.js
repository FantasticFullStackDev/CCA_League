import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    transactionHistory: [
        {
            no: 'No', 
            date: '01-01-2022',
            time: '15:45 GMT',
            coach: 'Lorem ipsum adielsi sit amiot, socmeidi kiek',
            amount: '$11.99'
        },
        {
            no: 'No', 
            date: '01-01-2022',
            time: '15:45 GMT',
            coach: 'Lorem ipsum adielsi sit amiot, socmeidi kiek',
            amount: '$11.99'
        },
        {
            no: 'No', 
            date: '01-01-2022',
            time: '15:45 GMT',
            coach: 'Lorem ipsum adielsi sit amiot, socmeidi kiek',
            amount: '$11.99'
        },
        {
            no: 'No', 
            date: '01-01-2022',
            time: '15:45 GMT',
            coach: 'Lorem ipsum adielsi sit amiot, socmeidi kiek',
            amount: '$11.99'
        },
    ],
};

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setHistory: (state, action) => {
            state.transactionHistory = [...action.payload];
        }
    }
});

export const { setHistory } = accountSlice.actions;

export const getTransactionHistory = (state) => state.account.transactionHistory;

export default accountSlice.reducer;