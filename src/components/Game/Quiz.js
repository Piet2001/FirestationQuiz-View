import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'

const Quiz = () => {
    return (
        <div className='Game'>
            <h1>Which fire station is this one?</h1>
            <Row>
                <Col>
                    <Image
                        className='FirestationImage'
                        src='https://media.discordapp.net/attachments/534476070192414730/824276101953880074/Brandweer_Helmond2.jpg'
                        fluid
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='Option-Button' id='option1' value={'Asten'}>{'Asten'}</Button>
                </Col>
                <Col>
                    <Button className='Option-Button' id='option2' value={'Eindhoven-Centrum'}>{'Eindhoven-Centrum'}</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='Option-Button' id='option3' value={'Helmond'}>{'Helmond'}</Button>
                </Col>
                <Col>
                    <Button className='Option-Button' id='option4' value={'Mierlo'}>{'Mierlo'}</Button>
                </Col>
            </Row>

        </div>
    );
}

export default Quiz;
