import { TiPower } from "react-icons/ti";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import gun_man from '../../assets/images/gun_man.png'
import lady_solider from '../../assets/images/lady_solider.png'
import Thor from '../../assets/images/Thor.png'
import mask_man from '../../assets/images/mask_men.png'
import side_man from '../../assets/images/side_man.png'
import menu__news from '../../assets/images/menu__news.png'
import menu__watch from '../../assets/images/menu__watch.png'

import './index.css'

const SideMenu = () => {
    return (
        <div className="side-menu-container">
            <div className="images-container">
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="BATTLEFIED V">
                    <img src={lady_solider} alt='lady' className='side-img' />
                </span>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="BATTLEFIED 1">
                    <img src={Thor} alt='thor' className='side-img' />
                </span>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="BATTLEFIED 4">
                    <img src={gun_man} alt='gun_man' className='side-img' />
                </span>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="BATTLEFIED HARDLINE">
                    <img src={side_man} alt='thor' className='side-img' />
                </span>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="CAREER">
                    <img src={mask_man} alt='mask' className='side-img' />
                </span>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="WATCH">
                    <img src={menu__watch} alt='mask' className='side-img' />
                </span>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="NEWS">
                    <img src={menu__news} alt='thor' className='side-img' />
                </span>
            </div>
            <div className='images-container options-container'>
                <span data-html="true" className="d-inline-block info-msg" tabIndex="0" data-bs-toggle="tooltip" title="HELP">
                    <BsFillQuestionCircleFill className="icon" />
                </span>
                <TiPower className="icon" />
            </div>
         
        </div>
    )
}

export default SideMenu;