import './Game.css'
import React, { useState } from 'react'
import Quiz from './Quiz'
import Stats from './Stats'
import { Col, Row } from 'react-bootstrap'

function Game() {
    const [TryCount, setTryCount] = useState(0);
    const [GoodCount, setGoodCount] = useState(0);

    const onclick = (Option) => {
        setTryCount(TryCount + 1)
        let Message = Option === 'Helmond' ? 'Goed geraden!' : 'Helaas, volgende keer beter!'
        alert(Message)
        if (Message === 'Goed geraden!') {
            setGoodCount(GoodCount + 1)
        }
    }

    return (
        <div className='container'>
            <Row>
                <Col xs={8}>
                    <Quiz OnClick={onclick} />
                </Col>
                <Col xs={4}>
                    <Stats tryCount={TryCount} GoodCount={GoodCount} />
                </Col>
            </Row>
        </div>
    );
}

export default Game;
