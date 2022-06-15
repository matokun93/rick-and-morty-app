import { Routes, Route } from 'react-router-dom'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import LocationDetails from '../LocationDetails/LocationDetails'
import EpisodeDetails from '../EpisodeDetails/EpisodeDetails'
import HomeSection from '../HomeSection/HomeSection'

const Sections = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeSection />} />
            <Route path='/:selectedTab/Details/:id' element={<CharacterDetails />} />
            <Route path='/:selectedTab/Details/:id' element={<LocationDetails />} />
            <Route path='/:selectedTab/Details/:id' element={<EpisodeDetails />} />
        </Routes>
    )
}

export default Sections