import React from 'react';
import logImg from "../../assets/images/log.svg";
const LeftPanel = ({ onToggle }) => {
  return (
    <div className="panel left-panel">
      <div className="content">
        <h3>New here ?</h3>
        <p>Sign up and discover a great amount of new opportunities!</p>
        <button className="btn transparent" onClick={() => onToggle('signup')}>
          Sign up
        </button>
      </div>
      <img src={logImg} className="image" alt="Log" />
    </div>
  );
};

export default LeftPanel;