import { useOptions } from "../../Contexts/OptionsContext"

const Searchbar = () => {
    const { selectedTab, searchbarQuery, changeSearchbarQuery } = useOptions()

    const handleSearchbar = (e) => {
        changeSearchbarQuery(e)
    }

    return (
        <>
            <input type="text" onChange={handleSearchbar} />
        </>
    )
}

export default Searchbar