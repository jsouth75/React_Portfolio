import React, { useState} from 'react';
// import styled from 'styled-components';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');

  }
  
  return (
    <div>
      <p></p>
      <p></p>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='name' required
            value={name}
            onChange={(e) => setName(e.target.value)}>
          </input>
          <input
            placeholder='email' required
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </input>
          <input
            placeholder='phone' required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}>
          </input>
          <input
            placeholder='message' required
            value={message}
            onChange={(e) => setMessage(e.target.value)}>
          </input>
        </form>
      </div>


    </div>
  )
}

export default Contact;