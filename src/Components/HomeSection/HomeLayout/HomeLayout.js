import { useOptions } from '../../../Contexts/OptionsContext'

const HomeLayout = ({ data }) => {
    const { searchbarQuery } = useOptions()

    return (
        <div className="layout-container">
            <div className="layout">
                {data.map(item =>
                    item.name.toLowerCase().includes(searchbarQuery.toLowerCase()) &&
                    <div key={item.id} >
                        <h3>{item.name}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeLayout