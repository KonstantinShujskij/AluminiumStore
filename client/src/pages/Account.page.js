import React, { useEffect, useState } from 'react'
import useUserApi from '../api/user.api'

function Account() {
  const User = useUserApi()

  const [user, setUser] = useState(null)

  useEffect(() => {
    const load = async () => { setUser(await User.load()) }

    load()
  }, [])

  return (
    <>
      <div>{user?.email}</div>
      <div>Adress</div>
      <input placeholder='Country' />
      <input placeholder='Town' />
      <input placeholder='Street' />
      <input placeholder='Index' />
      <input placeholder='House' />
      <input placeholder='Flat' />
      <div>Person</div>
      <input placeholder='Name' />
      <input placeholder='Lastname' />
      <div>Payment Person</div>
      <input placeholder='Name' />
      <input placeholder='Lastname' />
    </>
  )
}

export default Account