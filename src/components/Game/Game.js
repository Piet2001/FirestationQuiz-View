import './Game.css'
import React from 'react'
import Quiz from './Quiz'
import Stats from './Stats'
import { Col, Row } from 'react-bootstrap'

function Game() {
    const onclick = (Option) => {
        let Message = Option === 'Helmond' ? 'Goed geraden!': 'Helaas, volgende keer beter!'
        alert(Message)
    }

    return (
        <div className='container'>
            <Row>
                <Col xs={8}>
                    <Quiz OnClick={onclick}/>
                </Col>
                <Col xs={4}>
                    <Stats />
                </Col>
            </Row>
        </div>
    );
}

export default Game;
