import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../components/header/headerSlice';
import dashboardSlice from '../components/dashboard/dashboardSlice';
import membershipSlice from '../components/membership/membershipSlice';
import accountSlice from '../components/account/accountSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    dashboard: dashboardSlice,
    membership: membershipSlice,
    account: accountSlice
  },
});

