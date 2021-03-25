import React from 'react'
import Timer from './Timer'

function Stats() {
    return (
        <div className='Stats'>
            <h1>Stats</h1>
            <Timer time={600} /> <br />
            <p>
                Username: {'Demo_User'} <br />
                Items played: {0} <br />
                Items Correct: {0} <br />
                <br />
                Games Played: {0}
            </p>
        </div>
    );
}

export default Stats;
