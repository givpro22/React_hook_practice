import { useRef } from "react";
import { useState } from "react";

function App() {
  const playerName = useRef()


  const [enteredName, setEnteredName] = useState(null)


  function handleClick() {
    setEnteredName(playerName.current.value)
    playerName.current.value=''
  }


  return (
    <>
    <section >
      <h2>Welcome {enteredName ?? "이름"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
    </>
  );
}

export default App;
