import { BrowserRouter, Routes, Route} from "react-router-dom"

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Host from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from "./pages/Host/Reviews";

//Components
import Layout from './components/Layout';

//Server
import "../server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans/>} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host/" element={<Host />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews"element={<Reviews />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App