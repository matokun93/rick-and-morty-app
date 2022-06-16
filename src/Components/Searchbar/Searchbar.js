import { useOptions, TABS } from "../../Contexts/OptionsContext"
import './Searchbar.css'

const Searchbar = () => {
    const { selectedTab, changeSearchbarQuery } = useOptions()

    const handleSearchbar = (e) => {
        changeSearchbarQuery(e)
    }

    return (
        <div className="searchbar">
            <input type="text" onChange={handleSearchbar} placeholder={
                selectedTab === TABS.TAB_1 ? 'Search characters  ...'
                    : selectedTab === TABS.TAB_2 ? 'Search locations  ...'
                        : 'Search episodes  ...'
            } />
        </div>
    )
}

export default Searchbar