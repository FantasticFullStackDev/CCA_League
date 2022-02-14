import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    membershipHistory: [
        {
            month: 'Jan 22', 
            amount: '$11.99',
            method: 'paypal',
            type: 'Monthly',
            date: 'Top'
        },
        {
            month: 'Jan 22', 
            amount: '$11.99',
            method: 'paypal',
            type: 'Monthly',
            date: 'Top'
        },
        {
            month: 'Jan 22', 
            amount: '$11.99',
            method: 'paypal',
            type: 'Monthly',
            date: 'Top'
        },
        {
            month: 'Jan 22', 
            amount: '$11.99',
            method: 'paypal',
            type: 'Monthly',
            date: 'Top'
        },
    ],
};

export const membershipSlice = createSlice({
    name: 'membership',
    initialState,
    reducers: {
        setHistory: (state, action) => {
            state.membershipHistory = [...action.payload];
        }
    }
});

export const { setHistory } = membershipSlice.actions;

export const getMembershipHistory = (state) => state.membership.membershipHistory;

export default membershipSlice.reducer;