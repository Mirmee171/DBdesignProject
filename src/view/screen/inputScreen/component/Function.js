import {Button, Col, Container, Row} from "reactstrap";
import './css/Function.css'

const Function = () => {
    return (
        <>
            <div id="function_container">
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <div>
                                <Button outline>
                                    Find
                                </Button>
                                {' '}
                                <Button outline>
                                    Clear
                                </Button>
                                {' '}
                                <Button outline>
                                    New
                                </Button>
                                {' '}
                                <Button outline>
                                    Save
                                </Button>
                                {' '}
                                <Button outline>
                                    Delete
                                </Button>
                                {' '}
                                <Button outline>
                                    Print
                                </Button>
                                {' '}
                                <Button outline>
                                    Excel
                                </Button>
                                {' '}
                                <Button outline>
                                    Close
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Function;