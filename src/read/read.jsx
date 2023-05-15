import React, { useEffect, useState } from 'react'
import './read.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Read = () => {
  const [datas, setDatas] = useState([])
  const [Id, setId] = useState()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("https://645f8dfffe8d6fb29e216d9b.mockapi.io/crud")
      .then((response) => { setDatas(response.data) })
  }, [])

  const getUpdated = () => {
    setLoading(true)
    axios.get("https://645f8dfffe8d6fb29e216d9b.mockapi.io/crud")
      .then((response) => { setDatas(response.data) })
    setLoading(false)

  }
  const handleSetId = (data) => {
    setId(data.id)
    localStorage.setItem("Id", data.id)
    localStorage.setItem("firstName", data.firstName)
    localStorage.setItem("lastName", data.lastName)
  }
  const handleDelete = (dataId) => {
    const newItems = datas.filter(item => item.id !== dataId);
    setDatas(newItems);
    axios.delete(`https://645f8dfffe8d6fb29e216d9b.mockapi.io/crud/${dataId}`)
      .then(() => {
        getUpdated()
      })
  }

  return (
      // {loading ? "waiting" : }

    <div className='read'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>
                <Link to='/update'><button onClick={() => handleSetId(data)} className='btn table-btn  update'>Update</button></Link>
              </td>
              <td>
                <button onClick={() => handleDelete(data.id)} className='btn table-btn delete'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="Create-button">
        <Link to='/'><button className='btn'>Create</button></Link>
      </div>
    </div>
  )
}

export default Read
