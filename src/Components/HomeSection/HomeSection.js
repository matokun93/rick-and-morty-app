import { useOptions, TABS } from '../../Contexts/OptionsContext'
import { useAPIData } from '../../Contexts/APIDataContext'
import HomeLayout from './HomeLayout/HomeLayout'

const HomeSection = () => {
    const { selectedTab } = useOptions()
    const { characters, locations, episodes } = useAPIData()

    return (
        <div className="layout-container">
            {selectedTab === TABS.TAB_1 && <HomeLayout data={characters} />}
            {selectedTab === TABS.TAB_2 && <HomeLayout data={locations} />}
            {selectedTab === TABS.TAB_3 && <HomeLayout data={episodes} />}
        </div>

        // <div className="layout-container">
        //     {
        //         searchbarQuery
        //             ? <div className="layout">
        //                 {
        //                     characters.map(character =>
        //                         character.name.toLowerCase().includes(searchbarQuery.toLowerCase())
        //                             ? <div key={character.id} >
        //                                 <h3>{character.name}</h3>
        //                             </div>
        //                             : null
        //                     )
        //                 }
        //             </div>
        //             : <div className="layout">
        //                 {
        //                     characters.map(character =>
        //                         <div key={character.id} >
        //                             <h3>{character.name}</h3>
        //                         </div>
        //                     )
        //                 }
        //             </div>
        //     }
        // </div>
    )
}

export default HomeSection