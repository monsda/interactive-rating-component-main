import { useState } from "react"
import AnswerSubmitted from "./components/AnswerSubmitted"
import Inform from "./components/Inform"
import './index.css'

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [Score, setScore] = useState(0)

  return (
    <div className="grid place-items-center h-screen bg-black">
      {isSubmitted ? <AnswerSubmitted Score={Score}/> 
      : 
      <Inform Score={Score} setScore={setScore} setIsSubmitted={setIsSubmitted}/>}
    </div>
  )
}

export default App
