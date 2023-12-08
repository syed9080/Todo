import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';
import { useSpring, animated } from 'react-spring';
import './Login.css';

const LoginPage = () => {
  const navigate = useNavigate(); // Move useNavigate outside the asynchronous function

  const HandleLogin = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/check-user', {
        params: { email, password },
      });
      console.log(response.data.data.user[0]._id);
      const ID = response.data.data.user[0]._id;
      navigate('/TodoW', { state: { ID } });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginLeft: '10px',
  };

  return (
    <animated.div className="login-container" style={animationProps}>
      <h1>
        <FontAwesomeIcon icon={faEnvelope} /> Login
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <FontAwesomeIcon icon={faLock} /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={HandleLogin}>
          <FontAwesomeIcon icon={faLock} /> Login
        </button>
        <button type="button">
          <Link to="/Register" style={linkStyle}>
            <FontAwesomeIcon icon={faLock} /> Register
          </Link>
        </button>
      </form>
    </animated.div>
  );
};

export default LoginPage;




