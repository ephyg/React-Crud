import React, { useState } from 'react'
import './create.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Create = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState(false)
  let navigate=useNavigate();
  // Handle Submit Form
  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true)
    }
    else {
      handleButtonOnclick()
    }
  }
  // Handle Submit Buttonf
  const handleButtonOnclick = (event) => {
    event.preventDefault();
    if (firstName.length == 0 || lastName.length == 0) {
      setError(true)
    }
    else {
      axios.post("https://645f8dfffe8d6fb29e216d9b.mockapi.io/crud",
        {
          firstName,
          lastName
        }).then(()=>{
          navigate('/read')
        })
      setFirstName('')
      setLastName('')
      setError(false)
    }
  }
  return (
    <div className='create'>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="first-name">First-Name</label>
        <input type="text" id='first-name' value={firstName} onChange={event => setFirstName(event.target.value)} required />
        {error && firstName.length <= 0 ? <label className='first-error error' htmlFor="first-name">First Name Cannot Be Empty</label> : ""}
        <label htmlFor="last-name">Last-Name</label>
        <input type="text" id='last-name' value={lastName} onChange={event => setLastName(event.target.value)} required />
        {error && lastName.length <= 0 ? <label className='second-error error' htmlFor="last-name">Last Name Cannot Be Empty</label> : ""}
        <input className='btn' type="submit" onClick={handleButtonOnclick}  value="Submit" />
      </form>
    </div>
  )
}

export default Create
