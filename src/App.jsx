import { useState } from 'react'

import './App.css'

import FormComponent from './components/FormComponent'
import ScreenCardComponent from './components/ScreenCardComponent'

function App() {

  localStorage.removeItem("image")

  const [newName, setNewName] = useState("")
  const [newUrl, setNewUrl] = useState("")
  const [newCollege, setNewCollege] = useState("")
  const [newCourse, setNewCourse] = useState("")
  
  const formsInputs = (e, name, college, course) => {
    e.preventDefault()
    setNewName(name)
    setNewCollege(college)
    setNewCourse(course)

    const url = localStorage.getItem("image");

    const img = new Image();
    img.src = url;

    setNewUrl(url)
  }

  return <div>

    <h1>ID Card Generator</h1>
    <div className='container'>
      <FormComponent formsInputs={formsInputs}/>
      <ScreenCardComponent name={newName} college={newCollege} course={newCourse} url={newUrl} />
    </div>
  </div>
}

export default App
