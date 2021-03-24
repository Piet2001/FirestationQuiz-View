import React from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import './Quiz.css';

function Quiz() {
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
                    <Button className='Option-Button'>Asten</Button>
                </Col>
                <Col>
                    <Button className='Option-Button'>Deurne</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='Option-Button'>Helmond</Button>
                </Col>
                <Col>
                    <Button className='Option-Button'>Mierlo</Button>
                </Col>
            </Row>

        </div>
    );
}

export default Quiz;
