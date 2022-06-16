import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'

const APIDataContext = createContext()

export const useAPIData = () => {
    return useContext(APIDataContext)
}

export const APIDataProvider = ({ children }) => {
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [loadingData, setLoadingData] = useState(true)
    const [dataError, setDataError] = useState(false)

    const getMaxPages = (query) => {
        setLoadingData(true)
        setDataError(false)
        let response = axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${query}`,
        }).then(res => {
            setLoadingData(false)
            return res.data.info.pages
        }).catch(e => {
            setDataError(e)
            console.log(e);
        })
        return response
    }

    const getDataFromAPI = (query, maxPages) => {
        setLoadingData(true)
        setDataError(false)
        for (let i = 1; i <= maxPages; i++) {
            axios({
                method: 'GET',
                url: `https://rickandmortyapi.com/api/${query}/?page=${i}`,
            }).then(res => {
                if (query === 'character') return setCharacters(prevCharacters => {
                    return [...prevCharacters, ...res.data.results]
                })
                if (query === 'location') return setLocations(prevLocations => {
                    return [...prevLocations, ...res.data.results]
                })
                setEpisodes(prevEpisodes => {
                    return [...prevEpisodes, ...res.data.results]
                })
            }).catch(e => {
                setDataError(e)
                console.log(e);
            })
            setLoadingData(false)
        }
    }

    useEffect(() => {
        let charactersMaxPages = getMaxPages('character')
        charactersMaxPages.then(maxPages => {
            getDataFromAPI('character', maxPages)
        })
    }, [])

    useEffect(() => {
        let locationsMaxPages = getMaxPages('location')
        locationsMaxPages.then(maxPages => {
            getDataFromAPI('location', maxPages)
        })
    }, [])

    useEffect(() => {
        let episodesMaxPages = getMaxPages('episode')
        episodesMaxPages.then(maxPages => {
            getDataFromAPI('episode', maxPages)
        })
    }, [])

    return (
        <APIDataContext.Provider value={{
            characters,
            locations,
            episodes,
            dataError,
            loadingData,
        }}>
            {children}
        </APIDataContext.Provider>
    )
}





// import { useContext, createContext, useState, useEffect } from 'react'
// import { useOptions, TABS } from '../Contexts/OptionsContext'
// import axios from 'axios'

// const APIDataContext = createContext()

// export const useAPIData = () => {
//     return useContext(APIDataContext)
// }

// export const APIDataProvider = ({ children }) => {
//     const { selectedTab } = useOptions()
//     const [maxPages, setMaxPages] = useState()
//     const [characters, setCharacters] = useState([])
//     const [locations, setLocations] = useState([])
//     const [episodes, setEpisodes] = useState([])
//     const [loadingData, setLoadingData] = useState(true)
//     const [dataError, setDataError] = useState(false)

//     const getDataFromAPI = (query) => {
//         setLoadingData(true)
//         setDataError(false)
//         for (let i = 1; i <= maxPages; i++) {
//             axios({
//                 method: 'GET',
//                 url: `https://rickandmortyapi.com/api/${query}/?page=${i}`,
//             }).then(res => {
//                 if (query === 'character') return setCharacters(prevCharacters => {
//                     return [...prevCharacters, ...res.data.results]
//                 })
//                 if (query === 'location') return setLocations(prevLocations => {
//                     return [...prevLocations, ...res.data.results]
//                 })
//                 setEpisodes(prevEpisodes => {
//                     return [...prevEpisodes, ...res.data.results]
//                 })
//             }).catch(e => {
//                 setDataError(e)
//                 console.log(e);
//             })
//             setLoadingData(false)
//         }
//     }

//     const getMaxPages = (query) => {
//         setLoadingData(true)
//         setDataError(false)
//         axios({
//             method: 'GET',
//             url: `https://rickandmortyapi.com/api/${query}`,
//         }).then(res => {
//             setLoadingData(false)
//             setMaxPages(res.data.info.pages)
//         }).catch(e => {
//             setDataError(e)
//             console.log(e);
//         })
//     }

//     useEffect(() => {
//         if (selectedTab === TABS.TAB_1) return getMaxPages('character')
//         if (selectedTab === TABS.TAB_2) return getMaxPages('location')
//         getMaxPages('episode')
//     }, [selectedTab])

//     useEffect(() => {
//         if (selectedTab === TABS.TAB_1) return getCharacters()
//         if (selectedTab === TABS.TAB_2) return getLocations()
//         getEpisodes()
//     }, [maxPages])

//     const getCharacters = () => {
//         getDataFromAPI('character')
//     }

//     const getLocations = () => {
//         getDataFromAPI('location')
//     }

//     const getEpisodes = () => {
//         getDataFromAPI('episode')
//     }

//     return (
//         <APIDataContext.Provider value={{
//             getCharacters,
//             characters,
//             locations,
//             episodes,
//             maxPages,
//             dataError,
//             loadingData,
//         }}>
//             {children}
//         </APIDataContext.Provider>
//     )
// }
