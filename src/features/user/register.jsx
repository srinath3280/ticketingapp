import React from "react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useUpdateUserMutation } from "../../services/userapi";

function RegisterForm(){
    var navigate = useNavigate();
    var [addUserFn] = useUpdateUserMutation();
    var registerForm = useFormik({
        initialValues:{
            username:"",
            password:'',
            role:'customer'
        },
        onSubmit:(values)=>{
            // console.log(values)
            addUserFn(values)
            .then((res)=>{
                alert(JSON.stringify(res))
                navigate("/")
            })
            .catch((err)=>{
                alert(JSON.stringify(err))
            })
            
        }
    })
    return (
        <div className='loginform'>
            <h1>Register Form</h1>
            <form onSubmit={registerForm.handleSubmit}>
                Full Name&nbsp; : <input type="text" name="fullname" onChange={registerForm.handleChange}/>
                <br />
                User Name : <input type="text" name="username" onChange={registerForm.handleChange}/>
                <br />
                Password &nbsp; : <input type="text" name="password" onChange={registerForm.handleChange}/>
                <br />
                <button>Register</button><br />
            </form>
        </div>
    )
}
export default RegisterForm