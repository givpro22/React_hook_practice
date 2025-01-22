import { useRef } from "react";
import { Input } from "./conponents/Input";
import Modal from "./conponents/Modal";

function App() {

  const modal = useRef()

  function handleClick() {
    modal.current.showModal()
  }

  return (
    <>
      <Input/>
      <button onClick={handleClick}>클릭</button>
      <Modal ref={modal}/>
    </>
  );
}

export default App;
