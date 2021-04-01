import React, {useState, useEffect} from 'react'

const Timer = (props) => {
    const [counter, setCounter] = useState(props.time);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]); 
      
      if(counter===0)
      {
        setCounter(props.time)
      }
          
      return (
        <div>
          <div>Time to play: {counter}</div>
        </div>
      );
}

export default Timer;
