import React from 'react'

const Timer = (props) => {
    const [counter, setCounter] = React.useState(props.time);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);     
          
      return (
        <div>
          <div>Time to play: {counter}</div>
        </div>
      );
}

export default Timer;
