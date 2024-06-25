import { createContext } from "react"
import Main from "./Components/Main"
import Sidebar from "./Components/Sidebar"

export const chatContext = createContext(''); 

function App() {

  return (
    <div className='h-screen w-screen flex'>
      
      <Sidebar />

      <Main />

    </div>
  )
}

export default App
