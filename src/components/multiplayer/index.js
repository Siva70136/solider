import SideMenu from '../side_menu';
import TopMenu from '../top_menu';
import Side from '../Battle';

import './index.css'
const Multiplayer = () => {
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
                    <div className=''>Multiplayer</div>
                </div>
                <div className='last-container'>
                    <Side />
                </div>
            </div>
        </div>
    )
}
export default Multiplayer;