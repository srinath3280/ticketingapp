import React from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useLazyAuthenticateQuery } from '../../services/userapi'
import { Link } from 'react-router-dom'

function Login() {
    var [loginFn]=useLazyAuthenticateQuery();
    var navigate = useNavigate();
    var loginForm = useFormik({
        initialValues:{
            username:"",
            password:''
        },
        onSubmit:(values)=>{act
            loginFn(values).then((res)=>{
                // console.log(res.data)
                window.localStorage.setItem("user",JSON.stringify(res.data))
                if(res.data.length===0){
                    alert("Please register and login.")
                    window.localStorage.removeItem("user")
                    navigate(`/registerForm`)
                }
                else{
                    navigate(`/dashboard/${res.data[0].id}`)
                }
            })
        }
    })
  return (
    <div className='loginform'>
        <h1>Login</h1>
        <form onSubmit={loginForm.handleSubmit}>
            User Name : <input type="text" name="username" onChange={loginForm.handleChange}/>
            <br />
            Password &nbsp; : <input type="text" name="password" onChange={loginForm.handleChange}/>
            <br />
            <button>Login</button><br />
            New User?&nbsp;<Link to="registerForm">Register Here</Link>
        </form>
    </div>
  )
}

export default Login