import React from 'react'
import Timer from './Timer'

const Stats = (props) => {
    var GamesPlayed = 0;

    return (
        <div className='Stats'>
            <h1>Stats</h1>
            <Timer time={60} OnEnd={props.OnEnd} /> <br />
            <p>
                Username: {props.keycloak.idTokenParsed.preferred_username} <br />
                Items played: {props.tryCount} <br />
                Items Correct: {props.GoodCount} <br />
                <br />
                Games Played: {GamesPlayed}
            </p>
        </div>
    );
}

export default Stats;
