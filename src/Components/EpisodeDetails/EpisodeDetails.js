import { useCallback, useEffect, useState } from 'react'
import { useAPIData } from '../../Contexts/APIDataContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import './EpisodeDetails.css'

const EpisodeDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const { characters } = useAPIData()

    const filterCharacters = useCallback(() => {
        setFilteredCharacters([])
        data.characters.map(item => {
            let characterFound = characters.find(character => character.url === item)
            return setFilteredCharacters(prevFilteredCharacters => {
                if (characterFound) return [...prevFilteredCharacters, characterFound]
                return [...prevFilteredCharacters]
            })
        })
    }, [characters, data.characters])

    useEffect(() => {
        filterCharacters()
    }, [filterCharacters])

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
            <h1 className='character-list-title'>Characters</h1>
            <div className="layout-container">
                <div className="layout">
                    {filteredCharacters.map(character =>
                        <Card key={character.id} data={character} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default EpisodeDetails