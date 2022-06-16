import { useLocation, useNavigate } from 'react-router-dom'
import './EpisodeDetails.css'

const EpisodeDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state

    return (
        <div className="episode-details-section">
            <div className='episode-details-container'>
                <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="episode-avatar" />
                <div className='character-details-body'>
                    <span>
                        <h1>{data.name}</h1>
                        <h3>{data.episode}</h3>
                    </span>
                    <span>
                        <p><span>Aired at:</span> {data.air_date}</p>
                    </span>
                </div>
            </div>
            <button className='back-button' onClick={() => navigate(-1)}>
                Volver
            </button>
        </div>
    )
}

export default EpisodeDetails