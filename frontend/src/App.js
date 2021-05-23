import logo from './images/scheduler-logo-removebg.png'
import { titleImage } from './stylesheets/titleImage.css'
import { Col, Container, Row } from 'reactstrap'
import './App.css'
import Login from './components/Login.jsx'
import IntroText from './components/IntroText.jsx'
import { useState } from 'react'
import TitleLogo from './components/TitleLogo'

function App () {

  const [isAuthenticated, toggleIsAuthenticated] = useState(false)

    return (

      <Container>
        <TitleLogo/>
        <IntroText/>
        <Row className="justify-content-center">
          <Col xs={'7'}>
            <Login/>
          </Col>
        </Row>
      </Container>
    )
}

export default App
