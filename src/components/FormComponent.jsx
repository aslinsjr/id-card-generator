import React from 'react'

import './FormComponent.css'

import { useState } from 'react'

const FormComponent = ({formsInputs}) => {

    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [course, setCourse] = useState("");


    function handleName(e) {
        const inputValue = e.target.value 

        setName(inputValue)
    }

    function handleCollege(e) {
        const inputValue = e.target.value 

        setCollege(inputValue)
    }

    function handleCourse(e) {
        const inputValue = e.target.value 

        setCourse(inputValue)
    }

    function handleFile(e) {

        const fr = new FileReader();

        fr.readAsDataURL(e.target.files[0]);

        fr.addEventListener("load", () => {

            const url = fr.result

            localStorage.setItem("image", url)
        })
    }
    

  return (
    <form>
        <input type="text" name="name" id="name" placeholder='Enter your full name'onChange={(e) => {handleName(e)}} value={name}/>
        <input type="text" name="college" id="college" placeholder='Enter your college name' onChange={(e) => {handleCollege(e)}} value={college}/>
        <input type="text" name="course" id="course" placeholder='Enter your course'onChange={(e) => {handleCourse(e)}} value={course}/>
        <div className='image-profile'>
            <p>Choose a image profile</p>
            <input name="user-image" id='user-image' type="file" onChange={(e) => {handleFile(e)}}/>
        </div>
        <input type="submit" value="Generate Card" onClick={(e) => formsInputs(e, name, college, course)} />
    </form>
  )
}

export default FormComponent