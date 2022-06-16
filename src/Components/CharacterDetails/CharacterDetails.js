import { useLocation, useNavigate } from 'react-router-dom'
import './CharacterDetails.css'

const CharacterDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state

    return (
        <div className="character-details-section">
            <div className='character-details-container'>
                <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="character-avatar" />
                <div className='character-details-body'>
                    <span>
                        <h1>{data.name}</h1>
                        <h3>{data.species !== 'unknown' ? data.species : 'Species Unknown'} - {data.status !== 'unknown' ? data.status : 'Status Unknown'}</h3>
                    </span>
                    <span>
                        <p><span>Gender:</span> {data.gender}</p>
                        <p><span>Origin:</span> {data.origin.name}</p>
                        <p><span>Location:</span> {data.location.name}</p>
                    </span>
                </div>
            </div>
            <button className='back-button' onClick={() => navigate(-1)}>
                Volver
            </button>
        </div>
    )
}

export default CharacterDetails