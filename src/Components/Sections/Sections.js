import { Routes, Route } from 'react-router-dom'
import { useCredentials } from '../../Contexts/CredentialsContext'
import CharacterDetails from '../CharacterDetails/CharacterDetails'
import LocationDetails from '../LocationDetails/LocationDetails'
import EpisodeDetails from '../EpisodeDetails/EpisodeDetails'
import HomeSection from '../HomeSection/HomeSection'
import LoginSection from '../LoginSection/LoginSection'
import PageNotFound from '../PageNotFound/PageNotFound'

const Sections = () => {
    const { userLogged } = useCredentials()
    return (
        <>
            {
                userLogged
                    ? <Routes>
                        <Route path='/' element={<HomeSection />} />
                        <Route path='/Characters/Details/:id' element={<CharacterDetails />} />
                        <Route path='/Locations/Details/:id' element={<LocationDetails />} />
                        <Route path='/Episodes/Details/:id' element={<EpisodeDetails />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    : <Routes>
                        <Route path='/' element={<LoginSection />} />
                        <Route path='/Login' element={<LoginSection />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
            }
        </>
    )
}

export default Sections