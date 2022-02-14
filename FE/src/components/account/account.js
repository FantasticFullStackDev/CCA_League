import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCurrentPos } from '../header/headerSlice';
import { getTransactionHistory } from './accountSlice';
import './account.css';

const Account = (props) => {
    //----- Global States -----
    const transactionHistory = useSelector(getTransactionHistory);

    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        dispatch(setCurrentPos('/main/account'));
    }, [])
    
    //----- Custom Functions -----    
    const setDisplayName = (e) => {
        setName(e.target.value);
    }

    const setCurrntEmail = (e) => {
        setEmail(e.target.value);
    }

    const linkDiscord = () => {
        alert('Linking Discord...');
    }

    const saveChange = () => {
        alert('Saving changes ...')
    }

    //----- Render -----
    return (
        <div style={{width: '100%', minWidth: 600}}>
            <div className='bold_20'>Your Membership</div>
            <div className='row' style={{paddingTop: 36}}>
                <div className='col-md-6 membership_payment_type'>
                    <b style={{color: 'white'}}> Display Name </b>
                    <div className='white_border' style={{height: 68, marginTop: 16, marginBottom: 16, padding: '21px 32px'}}>
                        <input className='membership_input' placeholder='James Wilson' value={name} onChange={(e)=>setDisplayName(e)}/>
                    </div>
                </div>
                <div className='col-md-6 membership_payment_amount'>
                    <b style={{color: 'white'}}> Email Address </b>
                    <div className='white_border' style={{height: 68, marginTop: 16, padding: '21px 32px'}}>
                        <input className='membership_input' placeholder='jameswilson@gmail.com'  value={email} onChange={(e)=>setCurrntEmail(e)}/>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', height: 40, marginTop: 22}}>
                <button className='account_btn' style={{backgroundColor: '#070707', float: 'left'}} onClick={linkDiscord}>Link Discord</button>
                <button className='account_btn' style={{backgroundColor: '#00ffcc', float: 'right'}} onClick={saveChange}>Save Change</button>
            </div>
            <div className='bold_20' style={{marginTop: 64}}>Membership History</div>
            <div className='white_border' style={{minHeight: 100, marginTop: 16, padding: '20px 30px'}}>
                    <table className="w3-table">
                        <thead>
                            <tr>
                                <th style={{paddingBottom: 25}}>Month</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Type</th>
                                <th>Date of Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactionHistory.map((item) => {
                                    return (
                                        <tr>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.no}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.date}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.time}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.coach}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.amount}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Account;