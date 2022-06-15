import { NavLink } from 'react-router-dom'
import { useOptions } from '../../Contexts/OptionsContext'
import './Card.css'

const Card = ({ data }) => {
    const { selectedTab } = useOptions()

    return (
        <NavLink to={`/${selectedTab}/Details/${data.id}`} state={{ data: data }} >
            <div className='card'>
                <img src={data.image ?? 'https://rickandmortyapi.com/api/character/avatar/66.jpeg'} alt="card-image" />
                <div className="body">
                    <h1>{data.name}</h1>
                    {data.status && <p>Status: {data.status} <span>circle</span></p>}
                    {data.origin && <p>Origin: {data.origin.name}</p>}
                </div>
            </div>
        </NavLink>
    )
}

export default Card