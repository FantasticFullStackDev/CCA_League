import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPos } from '../header/headerSlice';
import TopNav from '../topnav/topnav';
import hero from '../../assets/images/hero.png';
import about from '../../assets/images/about.png';
import news from '../../assets/images/news.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';

function Landing (props) {
    //----- Global States -----
    const [modalDisplay, setModalDisplay] = useState('none');
    
    //----- Dispatch -----
    const dispatch = useDispatch();

    //----- Custom Functions -----
    const toggleModal = () => {
        setModalDisplay(modalDisplay === 'none' ? 'block' : 'none');
    }

    //----- Lifecycle Events -----
    useEffect(() => {
        dispatch(setCurrentPos(''));
    }, [])

    return (
        <React.Fragment>
            <TopNav />
            <div className='row landing_hero'>
                <div className="col-12 w3-display-container">
                    <img src={hero} alt="hero" style={{width: '100%'}} />
                    <div className="w3-padding w3-display-middle" style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>
                        <div className='hero_title'> C C A </div>
                        <div className='hero_detail'> Challanger Coaching Academy </div>
                    </div>
                </div>
            </div>
            <div className='row landing_about'>
                <div className='col-lg-6 landing_about_img' style={{marginBottom: 20, float: 'left'}}>
                    <img src={about} alt='about' style={{width: '100%'}}/> 
                </div>
                <div className='col-lg-6 landing_about_detail'>
                    <div className='landing_about_text1'>Welcome to CCA</div>
                    <div className='landing_about_text2'>Learn something about us!</div>
                    <div className='landing_about_text3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</div>
                    <div className='landing_about_text3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</div>
                    <button className='landing_about_button'>View Tournaments</button>
                </div>
            </div>
            <br/>
            <div className='row landing_news' style={{fontSize: '1.25rem'}}>
                <div className='landing_news_title1'>Keeping you up to date</div>
                <div className='landing_news_title2'>Bringing You The Latest News</div>
                <div className='col-lg-6 landing_news_item1'>
                    <img src={news} alt='news' width='100%' />
                    <div style={{marginTop: '1.5vw', fontWeight: 'bold'}}>
                        New Title 
                        <span style={{float: 'right', color: '#707070', fontWeight: 'normal'}}> 03 Jan 2022</span>
                    </div>
                    <div style={{marginTop: '2vw'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    </div>
                    <div style={{marginTop: '2.5vw', color: '#00ffcc'}}>
                        Read More &nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.846" height="14" viewBox="0 0 22.846 14">
                                <path id="Icon_ionic-md-arrow-round-forward" data-name="Icon ionic-md-arrow-round-forward" d="M14.267,19.934l5.824-5.651a1.285,1.285,0,0,0,.38-.945v-.017a1.285,1.285,0,0,0-.38-.945L14.267,6.725a1.247,1.247,0,0,0-1.822,0,1.4,1.4,0,0,0,0,1.906l3.5,3.349H-1.085a1.317,1.317,0,0,0-1.29,1.35,1.312,1.312,0,0,0,1.29,1.35H15.941l-3.5,3.349a1.4,1.4,0,0,0,0,1.906A1.252,1.252,0,0,0,14.267,19.934Z" transform="translate(2.375 -6.33)" fill="#00ffcc"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-lg-6 landing_news_item2'>
                    <img src={news} alt='news' width='100%' />
                    <div style={{marginTop: '1.5vw', fontWeight: 'bold'}}>
                        New Title 
                        <span style={{float: 'right', color: '#707070', fontWeight: 'normal'}}> 03 Jan 2022</span>
                    </div>
                    <div style={{marginTop: '2vw'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    </div>
                    <div style={{marginTop: '2.5vw', color: '#00ffcc'}}>
                        Read More &nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.846" height="14" viewBox="0 0 22.846 14">
                                <path id="Icon_ionic-md-arrow-round-forward" data-name="Icon ionic-md-arrow-round-forward" d="M14.267,19.934l5.824-5.651a1.285,1.285,0,0,0,.38-.945v-.017a1.285,1.285,0,0,0-.38-.945L14.267,6.725a1.247,1.247,0,0,0-1.822,0,1.4,1.4,0,0,0,0,1.906l3.5,3.349H-1.085a1.317,1.317,0,0,0-1.29,1.35,1.312,1.312,0,0,0,1.29,1.35H15.941l-3.5,3.349a1.4,1.4,0,0,0,0,1.906A1.252,1.252,0,0,0,14.267,19.934Z" transform="translate(2.375 -6.33)" fill="#00ffcc"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-lg-6 landing_news_item1'>
                    <img src={news} alt='news' width='100%' />
                    <div style={{marginTop: '1.5vw', fontWeight: 'bold'}}>
                        New Title 
                        <span style={{float: 'right', color: '#707070', fontWeight: 'normal'}}> 03 Jan 2022</span>
                    </div>
                    <div style={{marginTop: '2vw'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    </div>
                    <div style={{marginTop: '2.5vw', color: '#00ffcc'}}>
                        Read More &nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.846" height="14" viewBox="0 0 22.846 14">
                                <path id="Icon_ionic-md-arrow-round-forward" data-name="Icon ionic-md-arrow-round-forward" d="M14.267,19.934l5.824-5.651a1.285,1.285,0,0,0,.38-.945v-.017a1.285,1.285,0,0,0-.38-.945L14.267,6.725a1.247,1.247,0,0,0-1.822,0,1.4,1.4,0,0,0,0,1.906l3.5,3.349H-1.085a1.317,1.317,0,0,0-1.29,1.35,1.312,1.312,0,0,0,1.29,1.35H15.941l-3.5,3.349a1.4,1.4,0,0,0,0,1.906A1.252,1.252,0,0,0,14.267,19.934Z" transform="translate(2.375 -6.33)" fill="#00ffcc"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div className='col-lg-6 landing_news_item2'>
                    <img src={news} alt='news' width='100%' />
                    <div style={{marginTop: '1.5vw', fontWeight: 'bold'}}>
                        New Title 
                        <span style={{float: 'right', color: '#707070', fontWeight: 'normal'}}> 03 Jan 2022</span>
                    </div>
                    <div style={{marginTop: '2vw'}}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                    </div>
                    <div style={{marginTop: '2.5vw', color: '#00ffcc'}}>
                        Read More &nbsp;
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.846" height="14" viewBox="0 0 22.846 14">
                                <path id="Icon_ionic-md-arrow-round-forward" data-name="Icon ionic-md-arrow-round-forward" d="M14.267,19.934l5.824-5.651a1.285,1.285,0,0,0,.38-.945v-.017a1.285,1.285,0,0,0-.38-.945L14.267,6.725a1.247,1.247,0,0,0-1.822,0,1.4,1.4,0,0,0,0,1.906l3.5,3.349H-1.085a1.317,1.317,0,0,0-1.29,1.35,1.312,1.312,0,0,0,1.29,1.35H15.941l-3.5,3.349a1.4,1.4,0,0,0,0,1.906A1.252,1.252,0,0,0,14.267,19.934Z" transform="translate(2.375 -6.33)" fill="#00ffcc"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='footer' style={{fontSize: '1.25rem', lineHeight: '30px'}}>
                <div className='footer_detail'>                    
                    <div className='header_logo' style={{float: 'none'}}>
                        CCA
                    </div>
                    <div style={{marginTop: 30}}> Property of CCA </div>
                    <div> All Rights Reserved </div>
                    <div> Copyright CCA 2021 </div>
                </div>
                <div className='footer_item'>                    
                    <div style={{fontWeight: 'bold', marginTop: 36}}> Footer Tab</div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                </div>
                <div className='footer_item'>                    
                    <div style={{fontWeight: 'bold', marginTop: 36}}> Footer Tab</div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                </div>
                <div className='footer_item'>                    
                    <div style={{fontWeight: 'bold', marginTop: 36}}> Footer Tab</div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                </div>
                <div className='footer_item'>                    
                    <div style={{fontWeight: 'bold', marginTop: 36}}> Footer Tab</div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                </div>
                <div className='footer_item'>                    
                    <div style={{fontWeight: 'bold', marginTop: 36}}> Footer Tab</div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                    <div> Link Link </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Landing;