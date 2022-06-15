import { useOptions, TABS } from '../../Contexts/OptionsContext'
import './Tabs.css'

const Tabs = () => {
    const { changeTab, selectedTab } = useOptions()

    return (
        <div className="tabs">
            <div data-selected={selectedTab === TABS.TAB_1 ? true : false}
                onClick={() => changeTab(TABS.TAB_1)}>
                {TABS.TAB_1}
            </div>
            <div data-selected={selectedTab === TABS.TAB_2 ? true : false}
                onClick={() => changeTab(TABS.TAB_2)}>
                {TABS.TAB_2}
            </div>
            <div data-selected={selectedTab === TABS.TAB_3 ? true : false}
                onClick={() => changeTab(TABS.TAB_3)}>
                {TABS.TAB_3}
            </div>
        </div>
    )
}

export default Tabs
