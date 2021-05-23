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

  //id, type, placeholder, formFeedback
  const emailField = ['loginEmail', 'email', 'Email', 'formFeedbackGoesHere']
  const usernameField = ['loginUsername', 'text', 'Username', 'formFeedbackGoesHere']
  const passwordField = ['loginPassword', 'password', 'Password', 'formFeedbackGoesHere']

  return (

    <Row className="justify-content-center">
      <Col xs={'11'}>

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
                     borderRadius: '30px',
                   }}>
          <h6><b>{signUpMode ? 'Sign up' : 'Login'} to continue:</b></h6>
          <Form>
            {signUpMode ? <FormGroupLogin id={emailField[0]} type={emailField[1]} placeholder={emailField[2]} formFeedback={emailField[3]}/> : null}

            <FormGroupLogin id={usernameField[0]} type={usernameField[1]} placeholder={usernameField[2]} formFeedback={usernameField[3]}/>

            <FormGroupLogin id={passwordField[0]} type={passwordField[1]} placeholder={passwordField[2]} formFeedback={passwordField[3]}/>


          </Form>

          <Row className={'justify-content-center'}>
            <Button color="primary"> {signUpMode ? 'Sign Up' : 'Login'}</Button>
          </Row>
          <Row className={'justify-content-center'}>
            <Button onClick={signUpModeTrueFalse} color="link">{signUpMode ? 'Already have an account? Login' : 'Don\'t have an account? Sign up'}</Button>
          </Row>


        </Container>


      </Col>
    </Row>
  )
}
export default Login