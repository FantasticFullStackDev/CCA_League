import React, { useState, useEffect } from 'react';
import './topnav.css';

function TopNav (props) {

    const [modalDisplay, setModalDisplay] = useState('none');

    const toggleModal = () => {
        setModalDisplay(modalDisplay === 'none' ? 'block' : 'none');
    }

    return (
        <div className='row' style={{position: 'relative'}}>
            <div className='col-12' style={{paddingTop: 30}}>
                <div className='top_nav'>
                    <div className='top_nav_item'>Home</div>
                    <div className='top_nav_item'>Coaching</div>
                    <div className='top_nav_item'>Tournaments</div>
                    <div className='top_nav_item'>Academy</div>
                    <div className='top_nav_item'>League</div>
                    <div className='top_nav_item'>Our Team</div>
                    <div className='top_nav_item'>About Us</div>
                    <div className='top_nav_item'>Contact</div>
                </div>
                <div className='landing_socials'>
                    <a className='landing_social_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.75" height="28" viewBox="0 0 26.75 28">
                            <path id="Icon_awesome-twitch" data-name="Icon awesome-twitch" d="M2.584,2.25.7,7.056V26.7H7.391v3.55h3.763L14.7,26.7h5.438l7.313-7.312V2.25ZM24.947,18.131l-4.181,4.181H14.078l-3.55,3.55v-3.55H4.884V4.756H24.947ZM20.766,9.563v7.306H18.259V9.563Zm-6.687,0v7.306H11.572V9.563Z" transform="translate(-0.703 -2.25)"/>
                        </svg>
                    </a>
                    <a  className='landing_social_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39.822" height="28" viewBox="0 0 39.822 28">
                            <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M40.04,8.881a5,5,0,0,0-3.521-3.544C33.414,4.5,20.961,4.5,20.961,4.5S8.508,4.5,5.4,5.338A5,5,0,0,0,1.882,8.881c-.832,3.126-.832,9.647-.832,9.647s0,6.522.832,9.647A4.929,4.929,0,0,0,5.4,31.662c3.106.838,15.558.838,15.558.838s12.453,0,15.558-.838a4.929,4.929,0,0,0,3.521-3.487c.832-3.126.832-9.647.832-9.647s0-6.522-.832-9.647ZM16.888,24.449V12.607L27.3,18.528,16.888,24.449Z" transform="translate(-1.05 -4.5)"/>
                        </svg>
                    </a>
                    <a  className='landing_social_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34.475" height="28" viewBox="0 0 34.475 28">
                            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M30.931,10.359c.022.306.022.613.022.919,0,9.341-7.109,20.1-20.1,20.1A19.967,19.967,0,0,1,0,28.209a14.617,14.617,0,0,0,1.706.087,14.15,14.15,0,0,0,8.772-3.019,7.078,7.078,0,0,1-6.606-4.9,8.91,8.91,0,0,0,1.334.109,7.473,7.473,0,0,0,1.859-.241A7.067,7.067,0,0,1,1.4,13.312v-.087a7.116,7.116,0,0,0,3.194.9,7.076,7.076,0,0,1-2.187-9.45,20.084,20.084,0,0,0,14.569,7.394,7.976,7.976,0,0,1-.175-1.619A7.072,7.072,0,0,1,29.028,5.612a13.911,13.911,0,0,0,4.484-1.706A7.047,7.047,0,0,1,30.406,7.8a14.164,14.164,0,0,0,4.069-1.094,15.188,15.188,0,0,1-3.544,3.653Z" transform="translate(0 -3.381)"/>
                        </svg>
                    </a>
                    <a className='landing_social_item' style={{marginRight: 0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="28" viewBox="0 0 24.5 28">
                            <path id="Icon_awesome-discord" data-name="Icon awesome-discord" d="M16.254,13.3a1.433,1.433,0,1,1-1.428-1.554A1.492,1.492,0,0,1,16.254,13.3ZM9.716,11.746a1.56,1.56,0,0,0,0,3.108A1.492,1.492,0,0,0,11.144,13.3,1.483,1.483,0,0,0,9.716,11.746ZM24.5,2.884V28c-3.527-3.117-2.4-2.085-6.5-5.894l.742,2.59H2.87A2.877,2.877,0,0,1,0,21.812V2.884A2.877,2.877,0,0,1,2.87,0H21.63A2.877,2.877,0,0,1,24.5,2.884ZM20.51,16.156a18.748,18.748,0,0,0-2.016-8.162,6.923,6.923,0,0,0-3.934-1.47l-.2.224A9.317,9.317,0,0,1,17.85,8.526,11.9,11.9,0,0,0,7.392,8.12c-.518.238-.826.406-.826.406a9.445,9.445,0,0,1,3.682-1.834l-.14-.168a6.923,6.923,0,0,0-3.934,1.47,18.748,18.748,0,0,0-2.016,8.162,5.076,5.076,0,0,0,4.27,2.128s.518-.63.938-1.162a4.354,4.354,0,0,1-2.45-1.652c.206.144.546.331.574.35a10.205,10.205,0,0,0,8.736.49,8.011,8.011,0,0,0,1.61-.826A4.418,4.418,0,0,1,15.3,17.15c.42.532.924,1.134.924,1.134A5.118,5.118,0,0,0,20.51,16.156Z"/>
                        </svg>
                    </a>
                </div>
                <div className="topnav_collapse" onClick={toggleModal}>☰</div>
            </div>
            <div className='topnav_collapse_modal w3-animate-opacity' style={{display: modalDisplay}}>
                <div className='topnav_modal_close' onClick={toggleModal}> &times;</div>
                <div className='top_nav_collapse'>
                    <div className='top_nav_item_collapse'>Home</div>
                    <div className='top_nav_item_collapse'>Coaching</div>
                    <div className='top_nav_item_collapse'>Tournaments</div>
                    <div className='top_nav_item_collapse'>Academy</div>
                    <div className='top_nav_item_collapse'>League</div>
                    <div className='top_nav_item_collapse'>Our Team</div>
                    <div className='top_nav_item_collapse'>About Us</div>
                    <div className='top_nav_item_collapse'>Contact</div>
                    <hr/>
                </div>
                <div className='landing_socials_collapse'>
                    <a  className='landing_social_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26.75" height="28" viewBox="0 0 26.75 28">
                            <path id="Icon_awesome-twitch" data-name="Icon awesome-twitch" d="M2.584,2.25.7,7.056V26.7H7.391v3.55h3.763L14.7,26.7h5.438l7.313-7.312V2.25ZM24.947,18.131l-4.181,4.181H14.078l-3.55,3.55v-3.55H4.884V4.756H24.947ZM20.766,9.563v7.306H18.259V9.563Zm-6.687,0v7.306H11.572V9.563Z" transform="translate(-0.703 -2.25)"/>
                        </svg>
                    </a>
                    <a  className='landing_social_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39.822" height="28" viewBox="0 0 39.822 28">
                            <path id="Icon_awesome-youtube" data-name="Icon awesome-youtube" d="M40.04,8.881a5,5,0,0,0-3.521-3.544C33.414,4.5,20.961,4.5,20.961,4.5S8.508,4.5,5.4,5.338A5,5,0,0,0,1.882,8.881c-.832,3.126-.832,9.647-.832,9.647s0,6.522.832,9.647A4.929,4.929,0,0,0,5.4,31.662c3.106.838,15.558.838,15.558.838s12.453,0,15.558-.838a4.929,4.929,0,0,0,3.521-3.487c.832-3.126.832-9.647.832-9.647s0-6.522-.832-9.647ZM16.888,24.449V12.607L27.3,18.528,16.888,24.449Z" transform="translate(-1.05 -4.5)"/>
                        </svg>
                    </a>
                    <a  className='landing_social_item'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="34.475" height="28" viewBox="0 0 34.475 28">
                            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M30.931,10.359c.022.306.022.613.022.919,0,9.341-7.109,20.1-20.1,20.1A19.967,19.967,0,0,1,0,28.209a14.617,14.617,0,0,0,1.706.087,14.15,14.15,0,0,0,8.772-3.019,7.078,7.078,0,0,1-6.606-4.9,8.91,8.91,0,0,0,1.334.109,7.473,7.473,0,0,0,1.859-.241A7.067,7.067,0,0,1,1.4,13.312v-.087a7.116,7.116,0,0,0,3.194.9,7.076,7.076,0,0,1-2.187-9.45,20.084,20.084,0,0,0,14.569,7.394,7.976,7.976,0,0,1-.175-1.619A7.072,7.072,0,0,1,29.028,5.612a13.911,13.911,0,0,0,4.484-1.706A7.047,7.047,0,0,1,30.406,7.8a14.164,14.164,0,0,0,4.069-1.094,15.188,15.188,0,0,1-3.544,3.653Z" transform="translate(0 -3.381)"/>
                        </svg>
                    </a>
                    <a className='landing_social_item' style={{marginRight: 0}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24.5" height="28" viewBox="0 0 24.5 28">
                            <path id="Icon_awesome-discord" data-name="Icon awesome-discord" d="M16.254,13.3a1.433,1.433,0,1,1-1.428-1.554A1.492,1.492,0,0,1,16.254,13.3ZM9.716,11.746a1.56,1.56,0,0,0,0,3.108A1.492,1.492,0,0,0,11.144,13.3,1.483,1.483,0,0,0,9.716,11.746ZM24.5,2.884V28c-3.527-3.117-2.4-2.085-6.5-5.894l.742,2.59H2.87A2.877,2.877,0,0,1,0,21.812V2.884A2.877,2.877,0,0,1,2.87,0H21.63A2.877,2.877,0,0,1,24.5,2.884ZM20.51,16.156a18.748,18.748,0,0,0-2.016-8.162,6.923,6.923,0,0,0-3.934-1.47l-.2.224A9.317,9.317,0,0,1,17.85,8.526,11.9,11.9,0,0,0,7.392,8.12c-.518.238-.826.406-.826.406a9.445,9.445,0,0,1,3.682-1.834l-.14-.168a6.923,6.923,0,0,0-3.934,1.47,18.748,18.748,0,0,0-2.016,8.162,5.076,5.076,0,0,0,4.27,2.128s.518-.63.938-1.162a4.354,4.354,0,0,1-2.45-1.652c.206.144.546.331.574.35a10.205,10.205,0,0,0,8.736.49,8.011,8.011,0,0,0,1.61-.826A4.418,4.418,0,0,1,15.3,17.15c.42.532.924,1.134.924,1.134A5.118,5.118,0,0,0,20.51,16.156Z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopNav;