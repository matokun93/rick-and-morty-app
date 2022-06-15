import { Routes, Route } from 'react-router-dom'
import Card from '../Card/Card'
import HomeSection from '../HomeSection/HomeSection'
import { memo } from 'react'

const Sections = memo(() => {
    return (
        <Routes>
            <Route path='/' element={<HomeSection />} />
            {/* <Route path='/:selectedTab/:id' element={<Card />} /> */}
        </Routes>
    )
})

export default Sections