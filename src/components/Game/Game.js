import './Game.css'
import React, { useState, useEffect } from 'react'
import Quiz from './Quiz'
import Stats from './Stats'
import { Col, Row } from 'react-bootstrap'

function Game(props) {
    const [TryCount, setTryCount] = useState(0);
    const [GoodCount, setGoodCount] = useState(0);
    const [Question, setNewQuestion] = useState({})

    useEffect(() => {
        getGameData();
    }, []);

    //fetch data
    const getGameData = async () => {
        const res = await fetch('http://localhost:8084/gamedata/new')
        const data = await res.json()
        if (data.answer === Question.answer) {
            getGameData();
        }
        //return data;
        setNewQuestion(data)
    }

    const onclick = (Option) => {
        setTryCount(TryCount + 1)
        if (Option === Question.answer) {
            setGoodCount(GoodCount + 1)
        }
        setNewQuestion(getGameData());
    }

    function OnTimeEnd() {
        alert('Time is up!\nYour score: ' + GoodCount)
    }

    return (
        <div className='container'>
            <Row>
                <Col xs={8}>
                    <Quiz OnClick={onclick} question={Question} />
                </Col>
                <Col xs={4}>
                    <Stats tryCount={TryCount} GoodCount={GoodCount} OnEnd={OnTimeEnd} keycloak={props.keycloak} />
                </Col>
            </Row>
        </div>
    );
}

export default Game;
