import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coachSessions: [
        {
            num: 1, 
            start: '01-01-22 13:45 GMT',
            end: '01-01-22 15:45 GMT',
            coach: 'coach@cca-league.com',
            role: 'Top',
            status: 'Booked'
        },
        {
            num: 2, 
            start: '01-01-22 13:45 GMT',
            end: '01-01-22 15:45 GMT',
            coach: 'coach@cca-league.com',
            role: 'Top',
            status: 'Booked'
        },
        {
            num: 3, 
            start: '01-01-22 13:45 GMT',
            end: '01-01-22 15:45 GMT',
            coach: 'coach@cca-league.com',
            role: 'Top',
            status: 'Booked'
        },
    ],
    CCAGames: [
        {
            num: 1,
            startDate: '01-01-22',
            startTime: '13:45 GMT',
            coach: '"coach A" vs "coach B"',
            signUp: 'link'
        },
        {
            num: 2,
            startDate: '01-01-22',
            startTime: '13:45 GMT',
            coach: '"coach A" vs "coach B"',
            signUp: 'link'
        },
        {
            num: 3,
            startDate: '01-01-22',
            startTime: '13:45 GMT',
            coach: '"coach A" vs "coach B"',
            signUp: 'link'
        },
        {
            num: 4,
            startDate: '01-01-22',
            startTime: '13:45 GMT',
            coach: '"coach A" vs "coach B"',
            signUp: 'link'
        },
    ]
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        setCoachGames: (state, action) => {
            state.coachSessions = [...action.payload];
        },
        setCCAGames: (state, action) => {
            state.CCAGames = [...action.payload];
        }
    }
});

export const { setCoachGames, setCCAGames } = dashboardSlice.actions;

export const getCoachSessions = (state) => state.dashboard.coachSessions;
export const getCCAGames = (state) => state.dashboard.CCAGames;

export default dashboardSlice.reducer;