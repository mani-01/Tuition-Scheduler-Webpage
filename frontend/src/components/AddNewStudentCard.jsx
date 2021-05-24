import { Card, CardBody, CardText, Col, Row } from 'reactstrap'
import logo from '../images/scheduler-logo-removebg.png'
import '../stylesheets/studentCard.css'

const AddNewStudentCard = () => {

  return (
    <Row className={'justify-content-center'} style={{ padding: '10px' }}>
      <Col >
    <Card className={'h-100 startCardColor btn btnAddNewStudent'} id="addNewStudentButton">
      <CardBody>
        <CardText>Add New Student.</CardText>
      </CardBody>
    </Card>
      </Col>
    </Row>
  )
}
export default AddNewStudentCard