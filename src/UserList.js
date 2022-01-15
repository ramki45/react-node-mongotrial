import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import {Link}from 'react-router-dom'
function UserList() {

    const[userList,setUserList] = useState([])
    useEffect(() => {
        fetchUsers()
    }, [])
    let fetchUsers = async()=>{
        try {
            let userData = await axios.get("https://nodetrialnew.herokuapp.com/users")
            setUserList(userData.data)
        } catch (error) {
            console.log('error')
        }
    }
    let handleDelete = async (_id) =>{
    try {
        await axios.delete(`https://nodetrialnew.herokuapp.com/user/${_id}`)
        alert('userdeleted')
        fetchUsers()
    }
     catch (error) {
        console.log('error')
    }
    }
    return (
        <>
        <div className='row'>
            <div className='col-lg-5'> 
            <h3>user List</h3>
        </div>
        <div className='col-lg-5'> 
            <Link to="/create">
            <button className='btn btn-primary'>Create user</button>
            </Link>
        </div>

        </div>
          <table class="table table-striped">
                <tr>
                <th>id</th>
                <th>name</th>

                <th>email</th>
                <th>phone</th>
              
                </tr>
                <tbody>{
                    
                    userList.map((data)=>{
                        return <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>

                        <td><Link to={`/edit/${data._id}`}><button className='btn btn-primary'>Edit</button></Link></td>
                        <td><button onClick={()=>handleDelete(data._id)} className='btn btn-danger'>Delete</button></td> 
                        
                    </tr>
                    })
                    }
                    
                   
                </tbody>
            </table>
            </>
    )
}

export default UserList
