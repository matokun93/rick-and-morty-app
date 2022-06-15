import { useLocation } from 'react-router-dom'

const CharacterDetails = () => {
    const location = useLocation()
    const { data } = location.state
    console.log(data);

    return (
        <div className='card-detail'>
            <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="card-image" />
            <h1>{data.name}</h1>
            <h3>{data.species !== 'unknown' ? data.species : 'Species Unknown'} - {data.status !== 'unknown' ? data.status : 'Status Unknown'}</h3>
            <p>Gender: {data.gender}</p>
            <p>Origin: {data.origin.name}</p>
            <p>Location: {data.location.name}</p>
        </div>
    )
}

export default CharacterDetails