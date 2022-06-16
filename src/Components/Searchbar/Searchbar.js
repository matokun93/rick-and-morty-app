import { useOptions, TABS } from "../../Contexts/OptionsContext"
import './Searchbar.css'

const Searchbar = () => {
    const { selectedTab, changeSearchbarQuery } = useOptions()

    const debounce = (cb, delay = 250) => {
        let timeout
        return (...args) => {
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                cb(...args)
            }, delay);
        }
    }

    const handleSearchbar = debounce(e => {
        changeSearchbarQuery(e)
    })

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