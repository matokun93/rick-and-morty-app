import { useLocation } from 'react-router-dom'

const CharacterDetails = () => {
    const location = useLocation()
    const { data } = location.state
    console.log(data);

    return (
        <div>
            <h1>este es un card detail</h1>
        </div>
    )
}

export default CharacterDetails