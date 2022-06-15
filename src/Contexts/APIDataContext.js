import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'

const APIDataContext = createContext()

export const useAPIData = () => {
    return useContext(APIDataContext)
}

export const APIDataProvider = ({ children }) => {
    const [maxPages, setMaxPages] = useState()
    const [characters, setCharacters] = useState([])
    const [locations, setLocations] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [currentSection, setCurrentSection] = useState(1)
    const [loadingData, setLoadingData] = useState(true)
    const [dataError, setDataError] = useState(false)

    const getDataFromAPI = (query) => {
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
        return characters
    }

    const getMaxPages = (query) => {
        setLoadingData(true)
        setDataError(false)
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${query}`,
        }).then(res => {
            setLoadingData(false)
            setMaxPages(res.data.info.pages)
        }).catch(e => {
            setDataError(e)
            console.log(e);
        })
    }

    useEffect(() => {
        if (currentSection === 1) return getMaxPages('character')
        if (currentSection === 2) return getMaxPages('location')
        getMaxPages('episode')
    }, [currentSection])

    useEffect(() => {
        if (currentSection === 1) return getCharacters()
        if (currentSection === 2) return getLocations()
        getEpisodes()
    }, [maxPages])

    const processData = () => {
        // (characters.sort((a, b) => a.name.localeCompare(b.name)))
    }

    const getCharacters = () => {
        getDataFromAPI('character')
    }

    const getLocations = () => {
        getDataFromAPI('location')
    }

    const getEpisodes = () => {
        getDataFromAPI('episode')
    }

    return (
        <APIDataContext.Provider value={{
            getCharacters,
            characters,
            locations,
            episodes,
            maxPages,
            dataError,
            loadingData,
        }}>
            {children}
        </APIDataContext.Provider>
    )
}
