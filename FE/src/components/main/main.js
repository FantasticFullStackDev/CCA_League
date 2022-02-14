import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router';
import LeftNav from '../leftnav/leftnav';
import Dashboard from '../dashboard/dashboard';
import Membership from '../membership/membership';
import Account from '../account/account';
import './main.css';

const Main = (props) => {
    //----- Internal States -----
    const [temp, setTemp] = useState('temp');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        // TODO
    }, [])

    //----- Render -----
    return (
        <div style={{display: 'flex', position: 'relative'}}>
            <LeftNav />
            <div className='main_body' style={{flexGrow: 8}}>
                <Routes>                    
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/membership' element={<Membership />} />
                    <Route path='/account' element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;