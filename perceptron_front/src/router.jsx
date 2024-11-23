import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './Paginas/Inicial';


function Router(){
  return (
      <Routes>
        <Route path={"/"} element={<Inicial/>}/>
        <Route path={"/"} element={<Inicial/>}/>
      </Routes>
  )
}

export default Router;