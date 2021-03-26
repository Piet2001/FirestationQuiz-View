import React from 'react'
import Timer from './Timer'

const Stats = () => {
    var TryCount = 0;
    var GoodCount = 0;
    var GamesPlayed = 0;

    return (
        <div className='Stats'>
            <h1>Stats</h1>
            <Timer time={600} /> <br />
            <p>
                Username: {'Demo_User'} <br />
                Items played: {TryCount} <br />
                Items Correct: {GoodCount} <br />
                <br />
                Games Played: {GamesPlayed}
            </p>
        </div>
    );
}

export default Stats;
