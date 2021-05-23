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

const FormGroupLogin = ({ id, type, placeholder, formFeedback }) => {

  return (
    <FormGroup>
      {/*<Label for="password">Password:</Label>*/}
      <Input id={id} type={type} placeholder={placeholder}/>
      <FormFeedback>{formFeedback}</FormFeedback>
    </FormGroup>

  )
}
export default FormGroupLogin