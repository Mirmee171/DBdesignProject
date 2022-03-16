import {Col, Container, Row} from "reactstrap";
import './css/InputBasic.css'

const InputBasic = () => {
    return (
        <>
            <Container>
                <Row>
                    <div id="input_div">
                        <Col>
                            <div id="toggle_div">
                                <div id="biz"><span id="red_star">* </span>Biz</div>
                                <select name="workplace" id="workplace">
                                    <option value="null">로그인 사업장</option>
                                    <option value="test1">test1</option>
                                    <option value="test2">test2</option>
                                    <option value="test3">test3</option>
                                </select>
                            </div>
                        </Col>
                        <Col>
                            <div id="input_room_type_div">
                                <div id="input_room_type">
                                    Rm Type Code / Name
                                </div>
                                <span>
                                <input type="text" id="input_box"/>
                            </span>
                            </div>
                        </Col>
                        <Col>
                            <div id="radio_div">
                                <div id="is_used">
                                    사용 여부
                                </div>
                                <div id="is_used_radio">
                                    <span className="t">
                                        <input type="radio" name="isYesOrNo" value="Yes"
                                               defaultChecked/>
                                        <label htmlFor="Yes" className="select_radio_label">Yes</label>
                                    </span>
                                    <span className="t">
                                        <input type="radio" name="isYesOrNo" value="No"/>
                                        <label htmlFor="No" className="select_radio_label">No</label>
                                    </span>
                                    <span className="t">
                                        <input type="radio" name="isYesOrNo" value="All"/>
                                        <label htmlFor="All" className="select_radio_label">All</label>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default InputBasic;