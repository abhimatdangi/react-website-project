import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyRoute from './routes/MyRoute'

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <MyRoute />
      </div>
    </Router>
  )
}

export default App 