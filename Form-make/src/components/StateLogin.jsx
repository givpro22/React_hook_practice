import { useState } from "react"

export default function StateLogin() {

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  }

  )
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(enteredValues)
  }

  const handleInputChange = (identifier, target) => {
    setEnteredValues(prev => ({
      ...prev,
      [identifier]: target
    }))
    setDidEdit(prev => ({
        ...prev,
        [identifier]: false
    }))

  }

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  })

  const emailIsInvalid = 
  didEdit.email && !enteredValues.email.includes('@')

  function handleInputBlur(identifier) {
    setDidEdit(prev => ({
        ...prev,
        [identifier]: true
    }))
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={(event) => handleInputChange('email', event.target.value)}
            value={enteredValues.email}
            onBlur={() => handleInputBlur("email")}
          />
          <div>
            {emailIsInvalid && <p>올바른 이메일 입력해라</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)}
            value={enteredValues.password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
