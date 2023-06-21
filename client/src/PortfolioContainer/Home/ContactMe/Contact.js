import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://formsubmit.co/ajax/hritvik7654@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formState).toString(),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setFormState({ name: '', email: '', message: '' }); // Clear form
        alert("Messge sent"); // Show alert
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleInputChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="contact-container">
        <div className='container-title'>
          <span style={{color:"white"}}> Contact Me</span>
          <span className='text'>Replying through email can take up to 24hrs</span>
        </div>
        <div className='contact-parent'>
          <div className='contact map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3256470968413!2d-117.33224702339716!3d33.98416837318269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae69ca25fd8b%3A0x8fb4cf192a8669c5!2s3170%20Canyon%20Crest%20Dr%2C%20Riverside%2C%20CA%2092507!5e0!3m2!1sen!2sus!4v1687110496675!5m2!1sen!2sus" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='contact details-fillup'>
            <form className='details-form' onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value ="false"></input>
              <label>
                Name:
                <input type="text" name="name" onChange={handleInputChange} value={formState.name} />
              </label>
              <label>
                Email:
                <input type="text" name="email" onChange={handleInputChange} value={formState.email} /> 
              </label>
              <label>
                Message:
                <textarea type="text" name="message" onChange={handleInputChange} value={formState.message} />
              </label>
              <label>
                <input type="submit" value="Submit" style={{width:"10rem", backgroundColor:"darkorange"}} /> 
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
