import { useOptions } from '../../../Contexts/OptionsContext'
import Card from '../../Card/Card'
import Tabs from '../../Tabs/Tabs'
import Searchbar from '../../Searchbar/Searchbar'
import './HomeLayout.css'

const HomeLayout = ({ data }) => {
    const { searchbarQuery } = useOptions()

    return (
        <div className="layout-container">
            <Tabs />
            <Searchbar />
            <div className="layout">
                {data.map(item =>
                    item.name.toLowerCase().includes(searchbarQuery.toLowerCase()) &&
                    <Card key={item.id} data={item} />
                )}
            </div>
        </div>
    )
}

export default HomeLayout