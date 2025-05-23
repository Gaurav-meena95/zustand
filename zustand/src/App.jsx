import { useState } from 'react'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <h1>Home Page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, optio. Cum quas ut eum dolorum vel laudantium culpa cupiditate distinctio amet esse. Vel repellendus laborum odit ullam recusandae architecto qui?</p>
    <Link to="/store">store</Link>
    </>
  )
}

export default App
