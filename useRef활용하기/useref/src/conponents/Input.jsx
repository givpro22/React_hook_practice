import { useRef, useState } from "react"

export function Input() {
  const playerName = useRef()


  const [enteredName, setEnteredName] = useState(null)


  function handleClick() {
    setEnteredName(playerName.current.value)
    playerName.current.value=''
  }


    return(
        <>
        <section >
          <h2>Welcome {enteredName ?? "이름"}</h2>
          <p>
            <input ref={playerName} type="text" />
            <button onClick={handleClick} >Set Name</button>
          </p>
        </section>
        </>
    )
}

