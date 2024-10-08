import {BrowserRouter , Routes , Route } from "react-router-dom"
import MainPage from "./pagess/MainPage"
import Checkout from "./pagess/Checkout"
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
       <Route path="/" element={<MainPage />} />
       <Route path="/checkout" element={<Checkout />} />
       </Routes>
    
    </BrowserRouter>
  )
}

export default App;
