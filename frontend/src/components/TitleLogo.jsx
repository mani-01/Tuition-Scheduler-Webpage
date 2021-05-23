import { Col, Row } from 'reactstrap'
import logo from '../images/scheduler-logo-removebg.png'

const TitleLogo = () => {

  return (
    <Row>
      <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={logo} alt="tuition scheduler logo" className={'titleImage'}/>
      </Col>
    </Row>
  )
}
export default TitleLogo