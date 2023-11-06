import {BrowserRouter} from 'react-router-dom';
import { Layout } from './Components/Layout/layout';
import './App.css'

function App() {


  return (
  <BrowserRouter>
    <div className="App">     
      <Layout/>
    </div>

  </BrowserRouter>
     
  )
}

export default App
