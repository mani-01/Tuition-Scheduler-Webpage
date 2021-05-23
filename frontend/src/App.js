import logo from './images/scheduler-logo-removebg.png'
import { titleImage } from './stylesheets/titleImage.css'
import { Col, Container, Row } from 'reactstrap'
import './App.css'
import Login from './components/Login.jsx'
import IntroText from './components/IntroText.jsx'
import { useState } from 'react'
import TitleLogo from './components/TitleLogo'
import StudentsList from './components/StudentsList'

function App () {

  // change the default after implementing auth on backend
  const [isAuthenticated, toggleIsAuthenticated] = useState(true)

  return (
    <Container>
      <TitleLogo/>
      {isAuthenticated ? <StudentsList/> : <IntroText/>}
      {isAuthenticated ? null : <Login/>}
    </Container>
  )
}

export default App
