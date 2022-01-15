import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    let params = useParams()
    useEffect(async() => {
       let userData = await axios.get(`http://localhost:3001/user/${params.id}`)
        formik.setValues(userData.data)
    },[])

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            name: '',
            email: ''
        },
       
        onSubmit: async (values)=> {
           try {
              
           await axios.put(`http://localhost:3001/users/${params.id}`,values)
            navigate('/')
           }
            catch (error) {
               console.log('error')
           }
          }
    })
    return (
        <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            
                <div className='col-lg-4'>
                    <label>Name</label>
                    <input type='text' name="name" 
                className='form-control'     onChange={formik.handleChange} value={formik.values.name}/>
                </div>
                <div className='col-lg-4'>
                    <label>Email</label>
                <input type='text' name="email"
                 className='form-control' onChange={formik.handleChange} value={formik.values.email}/>

                </div>
                
                <button className='btn btn-primary mt-3'>Submit</button>
           
          
        </div>
        </form>
        </div>
    )
}

export default EditUser
