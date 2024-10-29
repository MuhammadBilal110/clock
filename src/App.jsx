import { useState, useRef, useEffect } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const sec=useRef()
  const sectimer=useRef(0)
  const min=useRef()
  const hour=useRef()
  const mainDiv=useRef()



  useEffect(()=>{


    
  },[])


  setInterval(()=>{
      sec.current.style.transform=sec.current.style.transform + "rotate(0.00833333333deg)"

  },1000)

  setInterval(()=>{
    min.current.style.transform=min.current.style.transform + "rotate(0.5deg)"

},60000)

setInterval(()=>{
  hour.current.style.transform=hour.current.style.transform + "rotate(30deg)"

},360000)

  return (
    <>
      <div>
        <div className='my-clock' ref={mainDiv}>
          <img src='/assets/Ellipse30.png'/>
          <img src='/assets/sec.png' className='sec' ref={sec}/>
          <img src='/assets/min.png' className='min' ref={min}/>
          <img src='/assets/hour.png' className='hour' ref={hour}/>


        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
