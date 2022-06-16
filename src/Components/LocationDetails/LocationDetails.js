import { useCallback, useEffect, useState } from 'react'
import { useAPIData } from '../../Contexts/APIDataContext'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import './LocationDetails.css'

const LocationDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { data } = location.state
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const { characters } = useAPIData()

    const filterCharacters = useCallback(() => {
        setFilteredCharacters([])
        data.residents.map(item => {
            let characterFound = characters.find(character => character.url === item)
            return setFilteredCharacters(prevFilteredCharacters => {
                if (characterFound) return [...prevFilteredCharacters, characterFound]
                return [...prevFilteredCharacters]
            })
        })
    }, [characters, data.residents])

    useEffect(() => {
        filterCharacters()
    }, [filterCharacters])

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
            <h1 className='character-list-title'>Residents</h1>
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

export default LocationDetails