import React, { useState } from 'react';
import '../css/Waitlist.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../icons/arrow-right-long-solid.svg';

const TelegramForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const telegramBotAPI = `https://api.telegram.org/{/*THE API KEY*/}/sendMessage`;
    const chatID = 'chatid';
    const message = `New email submitted: ${email}`;

    axios.post(telegramBotAPI, {
      chat_id: chatID,
      text: message,
    })
    .then((response) => {
      console.log('Message sent successfully:', response.data);
      setEmail('');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="waitlist-form-cont">
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Email address"
          className="waitlist-email-input"
        />
      <button type="submit"
              className='waitlist-email-input-submit-button'>
                <span className='join-waitlist-btn-text'>Join Waitlist</span>
              <ArrowIcon className="join-waitlist-btn-icon" />
      </button>
      console.log('Your email successfully sent');
    </form>
  );
};

export default function Waitlist() {
  const navigate = useNavigate();

  const handleFormSubmit = () => {
    navigate('/');
  };

  return (
    <div>
      <h3 className='waitlist-early-access-text'>
        Join the waitlist for early access.
      </h3>
      <TelegramForm onSubmit={handleFormSubmit} />
    </div>
  );
}
