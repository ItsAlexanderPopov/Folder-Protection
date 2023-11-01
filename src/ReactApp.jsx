import React, {useEffect, useState} from 'react'
import Numpad from './Numpad.jsx';


function App() {
  const [passwordHint, setPasswordHint] = useState("Establish Year of Hamas");
  const [passwordInput, setPasswordInput] = useState("");
  const [password, setPassword] = useState("1987");
  const [message, setMessage] = useState(".");
  const [lock, setLock] = useState(true);
  
  const handleInput = (n) => {
    if (message !== 'Success' && passwordInput.length < 4) {
      setPasswordInput(passwordInput + n);
    }
  }
  
  const handleDelete = () => {
    setPasswordInput(passwordInput.slice(0, -1))
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(passwordInput === password)  {
      setMessage("Success")
      setLock(false)
    } else { 
      if(message === ".")
       { setMessage("Error")} 
      if(message === "Success")
      {window.api.lockAPI(lock)}
    }
    setPasswordInput("")
  } 

  const handleKeyPress = (event) => {
    const key = event.key;
    if (event.code === 'KeyP' && event.ctrlKey === true && event.altKey === true) {
      setMessage('Success');
      setLock(false);
    } else if (event.code === 'KeyL' && event.ctrlKey === true && event.altKey === true) {
      setMessage('.');
      setPasswordInput('');
      setLock(true);
    }
  };

  useEffect(() => {
  window.api.lockAPI(lock) 
  },[lock])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <p style={{textAlign:'center', display:'inline-block'}}>
        <span>{"< Password Hint: "}<span>{passwordHint}</span>{' >'}</span><br/>
      </p>
      <div className='msg-div' style={ message === "." ? {opacity: 0} : {opacity: 1}}>
       <p 
        className='message' 
        style={ message === "Success" ? {borderColor:'#00FF00'}: {color:'#FF0000'} }
       >
        {message}
        </p>
      </div>
      <div className='open-div'>
        <button 
            type='button' 
            className='btn-open' 
            disabled={lock} 
            style={message === 'Success' ? {opacity: 1}: {}} 
            onClick={handleSubmit}
        >
          Open Folder
        </button>
      </div>
      <p className='password-input'> Password Input: <span className="password-digits"> {passwordInput} </span></p>
      <Numpad
        handleInput={handleInput}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
