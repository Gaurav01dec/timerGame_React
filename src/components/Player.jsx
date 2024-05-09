import { useState , useRef} from "react";
export default function Player() {

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  //useRef always gives us an object such that we can access that current property in that 
  const playerNamebyRef = useRef();

  function handleClick() {
    setEnteredPlayerName(playerNamebyRef.current.value);
    playerNamebyRef.current.value=''
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerNamebyRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
