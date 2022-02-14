import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCurrentPos } from '../header/headerSlice';
import './leftnav.css';

const LeftNav = (props) => {
    //----- Global States -----
    const currentPos = useSelector(getCurrentPos);

    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Internal States -----
    const [modalDisplay, setModalDisplay] = useState('none');

    //----- Navigate -----
    let navigate = useNavigate();

    //----- Lifecycle Events -----
    useEffect(() => {
        // TODO
    }, [])

    //----- Custom Functions -----
    const toggleModal = () => {
        setModalDisplay(modalDisplay === 'none' ? 'block' : 'none');
    }

    //----- Render -----
    return (
        <React.Fragment>
            <div className="left_nav_collapse" onClick={toggleModal}>☰</div>
            <div className='left_nav' style={{width: 250}}>
                <div className={currentPos === '/main'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main')}> Dashboard </div>
                <div className={currentPos === '/main/sessions'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/sessions')}> Sessions </div>
                <div className={currentPos === '/main/ccaleague'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/ccaleague')}> CCA League </div>
                <div className={currentPos === '/main/courses'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/courses')}> Courses </div>
                <div className={currentPos === '/main/tournaments'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/tournaments')}> Tournaments </div>
                <div className={currentPos === '/main/membership'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/membership')}> Membership </div>
                <div className={currentPos === '/main/account'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/account')}> My Account </div>                
                <button className='logout_button'>Log Out</button>
            </div>
            <div className='left_nav_modal w3-animate-opacity' style={{display: modalDisplay}}>
                <div className='topnav_modal_close' onClick={toggleModal}> &times;</div>
                <div className={currentPos === '/main'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main')}> Dashboard </div>
                <div className={currentPos === '/main/sessions'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/sessions')}> Sessions </div>
                <div className={currentPos === '/main/ccaleague'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/ccaleague')}> CCA League </div>
                <div className={currentPos === '/main/courses'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/courses')}> Courses </div>
                <div className={currentPos === '/main/tournaments'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/tournaments')}> Tournaments </div>
                <div className={currentPos === '/main/membership'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/membership')}> Membership </div>
                <div className={currentPos === '/main/account'?'left_nav_item left_nav_item_selected':'left_nav_item'} onClick={()=>navigate('/main/account')}> My Account </div>            
                <button className='logout_button_modal'>Log Out</button>
            </div>
        </React.Fragment>
    );
}

export default LeftNav;