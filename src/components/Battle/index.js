import offline from '../../assets/images/offline.png'
import online from '../../assets/images/online.png'
import './index.css'


const Side = () => {
    return (
        <div className='side-container'>
            <div className='text-container'>
                <div className='logo-container1'>
                    <img src='https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712303241/solider/yden0l7gj8qdarhcbtfp.png' alt="logo" className='logo1' />
                </div>
                <img src='https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712359450/solider/knw4z3mvsm07lslcupxw.png' alt='name' className='battle' />
            </div>
            <div className="images-container1">
                <div className='box'>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712305724/solider/ckfnozbcshxqxcyiik9i.png' alt='thor' className='squad' />
                        <div class="hover-content">
                            <p>SQUAD</p>
                        </div>
                    </div>
                    <div className='row'>
                        <img src="https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712305724/solider/hlytflrxgeipwxnhpzdc.png" alt='lady' className='side-img' />
                        <div class="hover-content">
                            <p>SQUAD</p>
                        </div>
                    </div>
                </div>

                <div className='box'>
                    <div className='row'>
                        <img src={online} alt='online' className='squad' />
                        <div class="hover-content">
                            <p>Online</p>
                        </div>
                    </div>
                    <div className='row'>
                        <img src="https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712305725/solider/eljxmajw3rpg5l6mrggd.png" alt='lady' className='side-img' />
                        <div class="hover-content">
                            <p>MaryZone</p>
                            <p className='status'>Online</p>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div className='row'>
                        <img src={offline} alt='online' className='squad' />
                        <div class="hover-content">
                            <p>Offline</p>
                        </div>
                    </div>
                    <div className='row'>
                        <img src='https://res.cloudinary.com/dcf6kyeeu/image/upload/v1712305724/solider/hfxw83edrjbmokdawff5.png' alt='thor' className='side-img' />
                        <div class="hover-content">
                            <p className='status'>420</p>
                            <p className='status'>Offline</p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Side;