import { Routes, Route } from 'react-router-dom'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import LocationDetails from '../LocationDetails/LocationDetails'
import EpisodeDetails from '../EpisodeDetails/EpisodeDetails'
import HomeSection from '../HomeSection/HomeSection'
import LoginSection from '../LoginSection/LoginSection'

const Sections = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/Login' element={<LoginSection />} />
            <Route path='/Characters/Details/:id' element={<CharacterDetails />} />
            <Route path='/Locations/Details/:id' element={<LocationDetails />} />
            <Route path='/Episodes/Details/:id' element={<EpisodeDetails />} />
        </Routes>
    )
}

export default Sections