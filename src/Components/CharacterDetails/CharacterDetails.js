import { useCallback, useEffect, useState } from 'react'
import { useAPIData } from '../../Contexts/APIDataContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import './CharacterDetails.css'

const CharacterDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state
    const [filteredEpisodes, setFilteredEpisodes] = useState([])
    const { episodes } = useAPIData()

    const filterEpisodes = useCallback(() => {
        data.episode.map(item => {
            let episodeFound = episodes.find(episode => episode.url === item)
            return setFilteredEpisodes(prevFilteredEpisodes => {
                if (episodeFound) return [...prevFilteredEpisodes, episodeFound]
                return [...prevFilteredEpisodes]
            })
        })
    }, [episodes, data.episode])

    useEffect(() => {
        filterEpisodes()
    }, [filterEpisodes])

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
            <h1 className='episode-list-title'>Episodes</h1>
            <div className="layout-container">
                <div className="layout">
                    {filteredEpisodes.map(episode =>
                        <Card key={episode.id} data={episode} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails