import React from 'react';
import logImg from "../assets/images/register.svg";
const RightPanel = ({ onToggle }) => {
  return (
    <div className="panel right-panel">
      <div className="content">
        <h3>One of us ?</h3>
        <p>If you already have an account, just sign in. We've missed you!</p>
        <button className="btn transparent" onClick={() => onToggle('signin')}>
          Sign in
        </button>
      </div>
      <img src={logImg} className="image" alt="Log" />
    </div>
  );
};

export default RightPanel;