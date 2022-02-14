import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPos } from '../header/headerSlice';
import { getCoachSessions, getCCAGames } from './dashboardSlice';
import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';

const Dashboard = (props) => {
    //----- Global States -----
    const coachSessions = useSelector(getCoachSessions);
    const CCAGames = useSelector(getCCAGames);

    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [temp, setTemp] = useState('temp');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        dispatch(setCurrentPos('/main'));
    }, [])

    //----- Render -----
    return (
        <React.Fragment>
            <div style={{width: '100%', minWidth: 600}}>
                <div className='bold_20'>Upcoming Coach Sessions</div>
                <div className='white_border' style={{minHeight: 100, marginTop: 16, padding: '20px 30px', width: '100%'}}>
                    <table className="w3-table">
                        <thead>
                            <tr>
                                <th style={{paddingBottom: 25}}>No</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Coach</th>
                                <th>Role</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                coachSessions.map((item) => {
                                    return (
                                        <tr>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.num}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.start}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.end}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.coach}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.role}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.status}</td>
                                        </tr> 
                                    );
                                })
                            }                               
                        </tbody>
                    </table>
                </div>
                <div  className='bold_20' style={{marginTop: 50}}>Upcoming CCA League Games</div>
                <div className='white_border' style={{minHeight: 100, marginTop: 16, padding: '20px 30px'}}>
                    <table className="w3-table">
                        <thead>
                            <tr>
                                <th style={{paddingBottom: 25}}>No</th>
                                <th>Start Date</th>
                                <th>Start Time</th>
                                <th>Coach</th>
                                <th>Sign Up</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                CCAGames.map((item) => {
                                    return (
                                        <tr>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.num}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.startDate}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.startTime}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}>{item.coach}</td>
                                            <td style={{paddingTop: 2, paddingBottom: 2}}><a>{item.signUp}</a></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;