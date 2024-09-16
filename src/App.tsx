
import { Outlet } from "react-router-dom"
import Menu from "./components/Menu"
import Rodape from "./components/Rodape"





function App() {


  return (
    <>
      <Menu/>  {/** Elemento Menu fica fixo na página */}
      <Outlet/>
      
      <Rodape/> {/** Elemento Rodape fica fixo na página */}
    </>
  )
}

export default App
