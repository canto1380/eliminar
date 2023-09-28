import {Row, Col} from 'react-bootstrap'
const TitlePage = ({titlePage}) => {
  return (
    <Row>
        <Col className="mt-3">
          <div className={`pt-4 pb-1 px-4`}>
            <h3>{titlePage}</h3>
          </div>
        </Col>
      </Row>
  )
}
export default TitlePage