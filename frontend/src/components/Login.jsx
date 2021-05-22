import {
  Button, Col, Container,
  Form,
  FormFeedback,
  FormGroup,
  FormText,
  Input,
  Label, Row,
} from 'reactstrap'
import { useState } from 'react'
import FormGroupLogin from './FormGroupLogin'

const Login = () => {

  const [signUpMode, toggleSignUpMode] = useState(false)
  const signUpModeTrueFalse = () => toggleSignUpMode(!signUpMode)

  const emailField = ['email', 'Email', 'email', 'formfeedbackplaceholder']

  return (
    <>
      <br/>

      <Container className="col-sm-9"
                 style={{
                   borderStyle: 'solid',
                   borderColor: '#9dbdc1',
                   borderWidth: '1px',
                   paddingLeft: '50px',
                   paddingRight: '50px',
                   paddingTop: '40px',
                   paddingBottom: '30px',
                   borderRadius: '30px'
                 }}>
        <h6><b>{signUpMode ? 'Sign up' : 'Login'} to continue:</b></h6>
        <Form>
          {signUpMode ? <FormGroupLogin prop={emailField}/> : null}
          <FormGroup>
            {/*<Label for="username">Username:</Label>*/}
            <Input type="text" placeholder="Username" id="loginUsername"/>
            <FormFeedback>You will not be able to see this</FormFeedback>
          </FormGroup>
          <FormGroup>
            {/*<Label for="password">Password:</Label>*/}
            <Input type="password" placeholder="Password" id="loginPassword"/>
            <FormFeedback>Sweet! that name is available</FormFeedback>
          </FormGroup>


        </Form>

        <Row className={'justify-content-center'}>
          <Button color="primary"> {signUpMode ? 'Sign Up' : 'Login'}</Button>
        </Row>
        <Row className={'justify-content-center'}>
          <Button onClick={signUpModeTrueFalse} color="link">{signUpMode ? 'Already have an account? Login' : 'Don\'t have an account? Sign up'}</Button>
        </Row>


      </Container>


    </>
  )
}
export default Login