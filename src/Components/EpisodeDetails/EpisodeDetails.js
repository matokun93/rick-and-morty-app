import { useLocation } from 'react-router-dom'

const LocationDetails = () => {
    const location = useLocation()
    const { data } = location.state
    console.log(data);

    return (
        <div className='card-detail'>
            <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="episode-avatar" />
            <h1>{data.name}</h1>
            <h3>{data.episode}</h3>
            <p>Aired at: {data.air_date}</p>
        </div>
    )
}

export default LocationDetails