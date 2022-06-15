import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Sections from './Components/Sections/Sections'
import ScrollUpButton from './Components/ScrollUpButton/ScrollUpButton'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Sections />
      <ScrollUpButton />
    </div>
  )
}

export default App;

