import { useState } from "react"
import Navbar from "./assets/Components/Navbar"
import NewBoards from "./assets/Components/NewBoards"

const App = () => {
  const [category , setCategory] = useState('General')
  return (
    <div>
      <Navbar/>
      <NewBoards category={category }/>
    </div>
  )
}

export default App
