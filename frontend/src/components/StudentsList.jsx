import { CardColumns, Col, Container, Row } from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap'
import '../stylesheets/studentCard.css'
import AddNewStudentCard from './AddNewStudentCard'

const StudentsList = () => {

  return (

    <>
    <CardColumns>
      <AddNewStudentCard/>
      <AddNewStudentCard/>
      <AddNewStudentCard/>

    </CardColumns>
    </>
  )
}
export default StudentsList