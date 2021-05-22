import logo from './images/scheduler-logo-removebg.png'
import { titleImage } from './stylesheets/titleImage.css'
import { Col, Container, Row } from 'reactstrap'
import './App.css'
import Login from './components/Login.jsx'

function App () {
  return (

    <Container>
      <Row>
        <Col
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ><img src={logo} alt="tuition scheduler logo" className={'titleImage'}/></Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={'8'}>
          <p className="text-center"><b>Welcome to Tuition Scheduler.</b> A place where tutors can enroll new students, view a list of all students, update student contact details, and unenroll past students to keep a tutoring business organised.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={'7'}>
          <Login/>
        </Col>
      </Row>
    </Container>

  )
}

export default App
