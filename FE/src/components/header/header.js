import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentPos } from './headerSlice';
import { useNavigate } from 'react-router';
import default_avatar from '../../assets/images/avatar.png';
import './header.css';

const Header = (props) => {
    //----- Global States -----
    const currentPos = useSelector(getCurrentPos);

    //----- Dispatch -----
    const dispatch = useDispatch();
    
    //----- Navigate -----
    let navigate = useNavigate();

    //----- Internal States -----
    const [avatar, setAvatar] = useState(default_avatar);
    const [userId, setUserId] = useState('user@cca-league.com');

    return (
        <React.Fragment>
            <div className='header'>
                <div className='header_logo' onClick={()=>navigate('/')}>
                    CCA
                </div>
                <button className='header_button' style={{display: currentPos === '' ? 'block' : 'none'}}>Account</button>
                <div className='header_avatar' style={{display: currentPos !== '' ? 'block' : 'none'}}>
                    <img src={avatar} alt='avatar' width='40px' height='40px' style={{float: 'left'}}/>
                    <span className='header_userId'>{userId}</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;