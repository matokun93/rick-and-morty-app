import { useOptions, TABS } from '../../Contexts/OptionsContext'
import { useAPIData } from '../../Contexts/APIDataContext'
import HomeLayout from './HomeLayout/HomeLayout'
import Tabs from '../Tabs/Tabs'
import Searchbar from '../Searchbar/Searchbar'

const HomeSection = () => {
    const { selectedTab } = useOptions()
    const { characters, locations, episodes } = useAPIData()

    return (
        <div className="home-section">
            <Tabs />
            <Searchbar />
            <div className="layout-container">
                {selectedTab === TABS.TAB_1 && <HomeLayout data={characters} />}
                {selectedTab === TABS.TAB_2 && <HomeLayout data={locations} />}
                {selectedTab === TABS.TAB_3 && <HomeLayout data={episodes} />}
            </div>
        </div>
    )
}

export default HomeSection