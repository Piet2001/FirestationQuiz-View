import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'

const Quiz = ({ OnClick, question }) => {

    return (
        <div className='Game'>
            <h1>Which fire station is this one?</h1>
            <Row>
                <Col>
                    <Image
                        className='FirestationImage'
                        src={question.imageUrl}
                        fluid
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='Option-Button' id='option1' onClick={() => OnClick(question.option1)}>{question.option1}</Button>
                </Col>
                <Col>
                    <Button className='Option-Button' id='option2' onClick={() => OnClick(question.option2)}>{question.option2}</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='Option-Button' id='option3' onClick={() => OnClick(question.option3)}>{question.option3}</Button>
                </Col>
                <Col>
                    <Button className='Option-Button' id='option4' onClick={() => OnClick(question.option4)}>{question.option4}</Button>
                </Col>
            </Row>

        </div>
    );
}

export default Quiz;
