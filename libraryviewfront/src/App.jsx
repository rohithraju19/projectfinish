import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'

import View from './components/View'
import Singlepage from './components/Singlepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <View/>
    <Routes>
      <Route path='/books/:id' element={<Singlepage/>}></Route>


    </Routes>
    </>
  )
}

export default App
