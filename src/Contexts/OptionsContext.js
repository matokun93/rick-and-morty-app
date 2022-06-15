import { useContext, createContext, useState } from 'react'

const OptionsContext = createContext()

export const useOptions = () => {
    return useContext(OptionsContext)
}

export const TABS = {
    TAB_1: 'Characters',
    TAB_2: 'Locations',
    TAB_3: 'Episodes',
}

export const OptionsProvider = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState(TABS.TAB_1)
    const [searchbarQuery, setSearchbarQuery] = useState('')

    const changeTab = (tab) => {
        setSelectedTab(tab)
        setSearchbarQuery('')
    }

    const changeSearchbarQuery = (e) => {
        setSearchbarQuery(e.target.value)
    }

    return (
        <OptionsContext.Provider value={{
            selectedTab,
            changeTab,
            searchbarQuery,
            changeSearchbarQuery
        }}>
            {children}
        </OptionsContext.Provider>
    )
}