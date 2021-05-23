import { Col, Container, Row } from 'reactstrap'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../stylesheets/studentCard.css'

const StudentsList = () => {

  return (
    <Row className="justify-content-center">
      <Col xs={'10'}>


        <Container>
          <Row>
            <Col>

              <Card className={"h-100 startCardColor btn btnAddNewStudent"} id="addNewStudentButton">
                <CardBody>
                  <CardText>Add New Student.</CardText>
                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>

      </Col>
    </Row>
  )
}
export default StudentsList