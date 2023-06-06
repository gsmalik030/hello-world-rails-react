import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Greeting from './Greeting'

const App = () => {
  return (
    <main>
        <h1>Hello World App</h1>
      <Link to="greeting">Greeting</Link>
        <Routes>
            <Route path="greeting" element={<Greeting />} />
        </Routes>
    </main>
  )
}

export default App
