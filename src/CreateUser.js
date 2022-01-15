import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateUser() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            name: '',
            email: ''
        },
       
        onSubmit: async (values)=> {
           try {
              
           await axios.post("https://nodetrialnew.herokuapp.com/user_detail",values)
            navigate('/')
           } catch (error) {
               console.log('error')
           }
                    }
    })
    return (
        <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <div className='row'>
            
                <div className='col-lg-6'>
                    <label>Name</label>
                    <input type='text'name="name" 
                className='form-control'     onChange={formik.handleChange} value={formik.values.name}/>
                </div>
                <div className='col-lg-6'>
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

export default CreateUser
