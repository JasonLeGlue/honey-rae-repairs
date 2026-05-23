import { useState } from "react"

export const App = () => {
  const [count, setCount] = useState(0)

  const handleBtnClick = () => {
    setCount(count + 1)
    console.log({count})
    
  }

  return <>
    <h1>Hello!</h1>
    This is amazing!
    <button className="btn-secondary" onClick={handleBtnClick}>
      Click me!
    </button>
    <div>Count: {count}</div>
  </>

}
