import { useOptions } from '../../../Contexts/OptionsContext'
import Card from '../../Card/Card'

const HomeLayout = ({ data }) => {
    const { searchbarQuery } = useOptions()

    return (
        <div className="layout-container">
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