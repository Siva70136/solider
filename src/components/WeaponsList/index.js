import { useEffect, useState } from 'react'
import './index.css'

const Weapons = () => {
    const [weapons, setWeapons] = useState(null);

    const getWeapons = async () => {
        const res = await fetch('https://solider-api.onrender.com/get');
        const data = await res.json();
        setWeapons(data);
        console.log(data);
    }

    useEffect(() => {
        getWeapons()
    }, [])
    return (
        <div className="main-container">
            <div className='weapon-container'>
                {weapons != null &&
                    weapons.map(each => {
                        return (<div className='weapon-card' key={each.id}>
                            <div className='title-container'>
                                <p className='head'>{each.name}</p>
                            </div>
                            <div className='data-container'>
                                <p className='head'>{each.stock}</p>
                                <img src={each.imageUrl} className='stock' />
                            </div>
                        </div>

                        )
                    })}
            </div>
        </div>
    )
}

export default Weapons
