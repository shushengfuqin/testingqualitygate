import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [mytuple, setMyTuple] = useState([""])

  const entry = () =>{
    setMyTuple(mytuple => [...mytuple,`Entry ${mytuple.length}`]);
  }

  useEffect(() => {
    
    return () => {
      console.log({mytuple})
    }
  })

  return (
    <div>
          <input type="button" onClick={entry} value="Add" />
    <div>{mytuple.map(entry =>
      <div>{entry}</div>
    )}
    </div>
    </div>
  )
}

export default App;
