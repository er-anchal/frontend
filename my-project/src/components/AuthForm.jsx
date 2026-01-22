import React, { useState, useEffect } from 'react'; // Import useEffect
import { FaUser, FaLock, FaEnvelope, FaFacebookF, FaTwitter, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AuthForm.css'; 

import LogSvg from '../assets/images/log.svg'; 
import RegisterSvg from '../assets/images/register.svg';

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // ==================================================
  // 🟢 FIX: LOCK SCROLLBAR TO REMOVE BLACK GAP
  // ==================================================
  useEffect(() => {
    // 1. Force the body to have NO scrollbar
    document.body.style.overflow = 'hidden';
    
    // 2. Also ensure html tag has no scrollbar (for some browsers)
    document.documentElement.style.overflow = 'hidden';

    // 3. Cleanup: Restore scrollbar when leaving this page
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);
  // ==================================================

  const handleSignUp = () => {
    setIsSignUpMode(true);
  };

  const handleSignIn = () => {
    setIsSignUpMode(false);
  };

  return (
    <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      {/* ... (Rest of your JSX remains exactly the same) ... */}
      
      <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 100, textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>
        ← Back to Home
      </Link>

      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i><FaUser /></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i><FaLock /></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGoogle /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i><FaUser /></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i><FaEnvelope /></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i><FaLock /></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaGoogle /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Sign up and discover a great amount of new opportunities!</p>
            <button className="btn transparent" onClick={handleSignUp} id="sign-up-btn">Sign up</button>
          </div>
          <img src={LogSvg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>If you already have an account, just sign in. We've missed you!</p>
            <button className="btn transparent" onClick={handleSignIn} id="sign-in-btn">Sign in</button>
          </div>
          <img src={RegisterSvg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;