import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCurrentPos } from '../header/headerSlice';
import { getMembershipHistory } from './membershipSlice';
import './membership.css';
import americanexpress from '../../assets/images/payments/americanexpress.png';
import bitcoin from '../../assets/images/payments/bitcoin.png';
import cirrus from '../../assets/images/payments/cirrus.png';
import dinnerclub from '../../assets/images/payments/dinnerclub.png';
import discover from '../../assets/images/payments/discover.png';
import jcb from '../../assets/images/payments/jcb.png';
import maestro from '../../assets/images/payments/maestro.png';
import mastercard from '../../assets/images/payments/mastercard.png';
import paypal from '../../assets/images/payments/paypal.png';
import visa from '../../assets/images/payments/visa.png';

const Membership = (props) => {
    //----- Global States -----
    const membershipHistory = useSelector(getMembershipHistory);

    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('visa');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        dispatch(setCurrentPos('/main/membership'));
    }, [])

    //----- Custom Functions -----    
    const selectMembershipType = (e) => {
        setType(e.target.value);
        // TODO 
    }

    const setMembershipAmount = (e) => {
        setAmount(e.target.value);
        // TODO
    }

    const setMembershipMethod = (m) => {
        setMethod(m);
        alert(m);
        // TODO
    }

    //----- Render -----
    return (
        <div style={{width: '100%', minWidth: 600}}>
            <div className='bold_20'>Your Membership</div>
            <div className='row' style={{paddingTop: 36}}>
                <div className='col-md-6 membership_payment_type'>
                    <b style={{color: 'white'}}> Type </b>
                    <div className='white_border' style={{height: 68, marginTop: 16, marginBottom: 16, padding: '21px 32px'}}>
                        <select className='membership_input' value={type} onChange={(e)=>selectMembershipType(e)}>
                            <option default value='billed'>Billed Monthly</option>
                            <option value='annually'>Billed Annually</option>
                        </select>
                    </div>
                </div>
                <div className='col-md-6 membership_payment_amount'>
                    <b style={{color: 'white'}}> Amount </b>
                    <div className='white_border' style={{height: 68, marginTop: 16, padding: '21px 32px'}}>
                        <input className='membership_input' placeholder='$11.99' value={amount} onChange={(e) => setMembershipAmount(e)}/>
                    </div>
                </div>
            </div>
            <div className='bold_20' style={{marginTop: 64}}>Payment Method</div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 26}}>
                <div className='membership_method' onClick={()=>setMembershipMethod('visa')}>
                    <img src={visa} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('mastercard')}>
                    <img src={mastercard} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('americanexpress')}>
                    <img src={americanexpress} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('maestro')}>
                    <img src={maestro} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('discover')}>
                    <img src={discover} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('cirrus')}>
                    <img src={cirrus} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('bitcoin')}>
                    <img src={bitcoin} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('jcb')}>
                    <img src={jcb} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('paypal')}>
                    <img src={paypal} alt='visa.png' />
                </div>
                <div className='membership_method' onClick={()=>setMembershipMethod('')}>
                    <img src={dinnerclub} alt='visa.png' />
                </div>
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
                                membershipHistory.map((item) => {
                                    return (
                                        <tr>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.month}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.amount}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.method}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.type}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}><a>{item.date}</a></td>
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

export default Membership;