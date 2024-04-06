import { Link } from 'react-router-dom'
import React, { useContext } from 'react';
import { MenuContext } from '../../context/themecontext';
import './index.css'

const TopMenu = () => {
    const { activeTab, onChange } = useContext(MenuContext);
    return (
        <div className="main-menu-container">
            <div className='top-menu-container'>
                <Link
                    to="/"
                    className='nav-link'
                    onClick={() => { onChange('home') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <p id="HOME" className={`${activeTab === 'home' ? 'active' : ''} caption`}>
                                Home
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/multiplayer"
                    className={`nav-link`}
                    onClick={() => { onChange('multiplayer') }}>
                    <div className='item'>
                        <div className='nav-item-container'>

                            <p id="" className={`${activeTab === 'multiplayer' ? 'active' : ''} caption`}>
                                multiplayer
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/campaign"
                    className=' nav-link'
                    onClick={() => { onChange('campaign') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <p id="" className={`${activeTab === 'campaign' ? 'active' : ''} caption`}>
                                campaign
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/solider"
                    className='nav-link'
                    onClick={() => { onChange('solider') }}>
                    <div className='item'>
                        <div className='nav-item-container'>

                            <p id="solider" className={`${activeTab === 'solider' ? 'active' : ''} caption`}>
                                solider
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/store"
                    className=' nav-link'
                    onClick={() => { onChange('store') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <p id="" className={`${activeTab === 'store' ? 'active' : ''} caption`}>
                                store
                            </p>
                        </div>
                    </div>
                </Link>
                <Link
                    to="/more"
                    className='nav-link'
                    onClick={() => { onChange('more') }}>
                    <div className='item'>
                        <div className='nav-item-container'>
                            <p id="solider" className={`${activeTab === 'more' ? 'active' : ''} caption`}>
                                more
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div >

    )

}

export default TopMenu
