import React from 'react'

const Timer = () => {
    const [counter, setCounter] = React.useState(60);

    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);     
          
      return (
        <div className="App">
          <div>Time to play: {counter}</div>
        </div>
      );
}

export default Timer;