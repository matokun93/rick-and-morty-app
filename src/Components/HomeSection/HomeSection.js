import { useOptions, TABS } from '../../Contexts/OptionsContext'
import { useAPIData } from '../../Contexts/APIDataContext'
import HomeLayout from './HomeLayout/HomeLayout'
import './HomeSection.css'

const HomeSection = () => {
    const { selectedTab } = useOptions()
    const { characters, locations, episodes, dataError, loadingData } = useAPIData()

    return (
        <div className="home-section">
            {selectedTab === TABS.TAB_1 && <HomeLayout data={characters} />}
            {selectedTab === TABS.TAB_2 && <HomeLayout data={locations} />}
            {selectedTab === TABS.TAB_3 && <HomeLayout data={episodes} />}
            {loadingData && <div className='loading'>Loading Data ...</div>}
            {dataError && <div className='error'>Error when loading data</div>}
        </div>
    )
}

export default HomeSection