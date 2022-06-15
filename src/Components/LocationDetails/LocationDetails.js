import { useLocation } from 'react-router-dom'

const LocationDetails = () => {
    const location = useLocation()
    const { data } = location.state
    console.log(data);

    return (
        <div className='card-detail'>
            <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="location-avatar" />
            <h1>{data.name}</h1>
            <h3>{data.type !== 'unknown' ? data.type : 'Type Unknown'}</h3>
            <p>Dimension: {data.dimension}</p>
        </div>
    )
}

export default LocationDetails