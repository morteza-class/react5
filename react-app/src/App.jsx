import { useEffect, useState } from 'react'
import './App.css'
import Posts from './components/Posts'
import Button from "./components/Button"

function App() {

  const [text, setText] = useState('')
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // this console will show after each render
    console.log(text);
  });

  useEffect(() => {
    // this console will show when the component is render
    document.title = 'Home';
  }, [])

  useEffect(() => {
    // with a state dependency
    console.log('count', count)
  }, [count])

  return (
    <main className='bg-slate-900 text-gray-200 h-screen p-8'>


      <input type="text" placeholder='Type here...' className='border border-gray-300' onChange={(e) => setText(e.target.value)} /> {text}

      <br />
      <br />

      <Button text="Add Count" onClick={() => setCount(count + 1)}></Button> {count}


      {show && <Posts />}

<br />
      <Button text="Toggle posts" className="my-4" onClick={() => setShow(!show)}></Button>

    </main>
  )
}

export default App
