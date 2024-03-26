import React from 'react'
import useAuth from '../hooks/auth.hook'
import useUserApi from '../api/user.api'
import useInput from '../hooks/input.hook'
import useAlert from '../hooks/alert.hook'


function Login() {
  const User = useUserApi()
  const Auth = useAuth()
  const Alert = useAlert()

  const email = useInput()
  const password = useInput()

  const handler = async () => { 
    const token = await User.login(email.value, password.value)
    if(token) { Auth.login(token, 0, false) }
    else { Alert.pushError("Wrong date") }
  }

  return (
    <div>
        <input {...email.bind} placeholder='example@gmail.com'/>
        <input {...password.bind} type='password' placeholder='password'/>

        <button onClick={() => handler()}>login</button>
    </div>
  )
}

export default Login