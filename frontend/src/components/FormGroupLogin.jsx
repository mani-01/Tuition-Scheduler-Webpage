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

const FormGroupLogin = (inputType, placeholder, inputId, formFeedback) => {

  return (
    <FormGroup>
      {/*<Label for="password">Password:</Label>*/}
      <Input type={inputType} placeholder={placeholder} id={inputId}/>
      <FormFeedback>{formFeedback}</FormFeedback>
    </FormGroup>

  )
}
export default FormGroupLogin