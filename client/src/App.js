import React from 'react'
import {useRoutes} from './routes/routes'
import * as authSelectors from './redux/selectors/auth.selectors'
import { useSelector } from "react-redux"
import Menu from './sections/Menu.section'
import Alert from './components/Alert'

// import './index.css'


function App() {
  const isAuth = useSelector(authSelectors.isAuth)
  const isAdmin = useSelector(authSelectors.isAdmin)
  const routes = useRoutes(isAuth)

  return (
    <div className="App">
      <Menu isAuth={isAuth} />
      <div className="screen">
        {routes}
      </div>
      <Alert />
    </div>
  )
}

export default App
