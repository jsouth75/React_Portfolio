import React, { useState} from 'react';
import '../../assets/style.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');

  }
  
  return (
    <div className='inputForm'>
      <h1>Contact Me</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/* input name */}
          <input
            placeholder='name' required
            value={name}
            onChange={(e) => setName(e.target.value)}>
          </input>
          {/* input email */}
          <input
            placeholder='email' required
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </input>  
          {/* input message */}
          <textarea
            placeholder='Please enter message here...' required
            value={message}
            onChange={(e) => setMessage(e.target.value)}>
          </textarea>

          <button className='submitBtn' type="submitButton">Submit</button>
        </form>
      </div>


    </div>
  )
}

export default Contact;