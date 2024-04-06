import { useEffect, useState } from 'react'
import './index.css'

const Stats = () => {
    const [stats, setStats] = useState(null);
    const [objs, setObjs] = useState(null);

    const getStats = async () => {
        const res = await fetch('https://solider-api.onrender.com/stat');
        const data = await res.json();
        setStats(data);
    }

    const getObjects = async () => {
        const res = await fetch('https://solider-api.onrender.com/getobj');
        const data = await res.json();
        setObjs(data);
        console.log(data);
    }

    useEffect(() => {
        getStats();
        getObjects();
    }, [])
    return (
        <div className="main-container">
            <div className='stat-container'>
                {stats != null &&
                    stats.map(each => {
                        return (<div className='stat-card' key={each.id}>
                            <div className='title-container'>
                                <p className='stat-head'>{each.name}</p>
                                <p className='stat-score'>{each.score}</p>
                            </div>
                        </div>

                        )
                    })}
            </div>
            <div className='objects-container'>
                {objs != null &&
                    objs.map(each => {
                        return (<div className='object-card' key={each.id}>
                            <div className='title-container'>
                                <p className='obj-head'>{each.head}</p>
                            </div>
                            <img src={each.imageUrl} className={`img1  ${each.name}`} alt={each.name} />
                            <div className='obj-data-container'>
                                <p className='obj-name'>{each.name}</p>
                                <p className='obj-score'>{each.score}</p>
                            </div>
                        </div>

                        )
                    })}
            </div>

        </div>

    )

}

export default Stats
