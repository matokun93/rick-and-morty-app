import { useLocation, useNavigate } from 'react-router-dom'
import './LocationDetails.css'

const LocationDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state

    return (
        <div className="location-details-section">
            <div className='location-details-container'>
                <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="location-avatar" />
                <div className='location-details-body'>
                    <span>
                        <h1>{data.name}</h1>
                        <h3>{data.type !== 'unknown' ? data.type : 'Type Unknown'}</h3>
                    </span>
                    <span>
                        <p><span>Dimension:</span> {data.dimension}</p>
                    </span>
                </div>
            </div>
            <button className='back-button' onClick={() => navigate(-1)}>
                Volver
            </button>
        </div>
    )
}

export default LocationDetails