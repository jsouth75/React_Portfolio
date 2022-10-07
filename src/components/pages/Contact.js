import React, { useState} from 'react';
import '../../assets/style.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import PlaceHolder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';

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
    <Container className='inputForm'>
      <Card className='card'>
        <Card.Body>
          <Card.Title className='NavTitles'>Contact Me</Card.Title>
          <form onSubmit={handleSubmit}>

          {/* input name */}
          <Card.Text>
            <input
              placeholder='name' required
              value={name}
              onChange={(e) => setName(e.target.value)}>
            </input>
          </Card.Text>

          {/* enter email */}
          <Card.Text>
            <input
              placeholder='email' required
              value={email}
              onChange={(e) => setEmail(e.target.value)}>
            </input>  
          </Card.Text>

          {/* enter message here */}
          <Card.Text>
            <textarea
              placeholder='Please enter message here...' required
              value={message}
              onChange={(e) => setMessage(e.target.value)}>
            </textarea>
          </Card.Text>

          {/* Submit Button */}
          <Button className='submitBtn' variant="info" type='submitButton'>Submit</Button>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;