import "./App.css"
import "rodal/lib/rodal.css"
import Pizza from "./Pizza"
import { useState } from "react";

function App() {
    const [score, setScore] = useState("");
  return (
    <div className=" bg-orange-100 h-screen pt-12">
      <div className="flex justify-between items-center pl-154 px-5 @max-md:flex-column">
        <h1 className='text-center text-4xl mb-2'>Pizza Quiz App</h1>
      <h2 className='text-center text-2xl mt-4'>Score: {score}</h2>
      </div>
      <p className='text-center mt-2'>Choose one piece of pizza and answer</p>
      <div className="mt-10">
        <Pizza score={score} setScore={setScore} />
      </div>
    </div>
  )
}

export default App