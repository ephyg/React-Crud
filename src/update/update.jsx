import React, { useEffect, useState } from 'react'
import './update.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Update = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState(false)
  const [Id, setId] = useState(null)
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
      axios.put(`https://645f8dfffe8d6fb29e216d9b.mockapi.io/crud/${Id}`,
        {
          firstName,
          lastName
        })
        .then(()=>{
          navigate('/read')
        })
      // setFirstName('')
      // setLastName('')
      setError(false)
    }
  }

  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const id = localStorage.getItem("Id");
    setFirstName(firstName);
    setLastName(lastName);
    setId(id);
    console.log(id, firstName, lastName);
  }, []);

  return (
    <div className='create'>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="first-name">First-Name</label>
        <input type="text" id='first-name' value={firstName} onChange={event => setFirstName(event.target.value)} required />
        {error && firstName.length <= 0 ? <label className='first-error error' htmlFor="first-name">First Name Cannot Be Empty</label> : ""}
        <label htmlFor="last-name">Last-Name</label>
        <input type="text" id='last-name' value={lastName} onChange={event => setLastName(event.target.value)} required />
        {error && lastName.length <= 0 ? <label className='second-error error' htmlFor="last-name">Last Name Cannot Be Empty</label> : ""}
        <input className='btn update-btn' type="submit" onClick={handleButtonOnclick} value="Update" />
      </form>
    </div>
  )
}

export default Update
