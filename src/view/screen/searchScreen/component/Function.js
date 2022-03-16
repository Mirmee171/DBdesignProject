import './css/Function.css'
import {Button, Col, Container, Row} from "reactstrap";

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