import SideMenu from '../side_menu';
import TopMenu from '../top_menu';
import Weapons from '../WeaponsList';
import Stats from '../stats';
import Side from '../Battle';
import Celebration_Dog_Tag from '../../assets/images/Celebration_Dog_Tag.png'
import premium_dog from '../../assets/images/premium_dog.png'
import './index.css'
const Home = () => {
    return (
        <div className="main-container">
            <div className='app-container'>
                <div className='side-menu'>
                    <SideMenu />
                </div>
                <div className='section2'>
                    <div className='top-menu'>
                        <TopMenu />
                    </div>
                    <div className='inner-section'>
                        <div className='solider-postion'>
                            <img src={premium_dog} alt='premium-do-tag' className='premum-dog' />
                            <img src={Celebration_Dog_Tag} alt='dog-tag' className='dog-tag' />
                        </div>
                        <div className='dynamic-container'>
                            <div className='stats-container1'>
                                <div className='stats-inner'>
                                    <div className='logo-container'>
                                        <img src='https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712303241/solider/yden0l7gj8qdarhcbtfp.png' alt="logo" className='logo' />
                                    </div>
                                    <div className='side-data'>
                                        <div>
                                            <p className='stats-inner-head'>Cookie</p>
                                        </div>
                                        <div className='stats-inner-sm'>
                                            
                                            <p className='stats-inner-text'>63</p>
                                            <p className='stats-inner-rank'>69,840/110,000</p>
                                            <p className='stats-inner-data'>-Estimated rank up in 1h</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='stat_w'>
                                    <Weapons />
                                    <Stats />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className='last-container'>
                    <Side />
                </div>
            </div>
        </div>
    )
}
export default Home;