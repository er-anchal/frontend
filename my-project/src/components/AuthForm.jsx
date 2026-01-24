import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./AuthForm.css";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const AuthForm = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const toggleMode = (mode) => {
    setIsSignUpMode(mode === "signup");
  };

  // Lock scrollbar on component mount
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      document.documentElement.style.height = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  return (
    <div className="auth-form-page">
      <Navbar />
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        {/* FORMS CONTAINER */}
        <div className="forms-container">
          <div className="signin-signup">
            <SignInForm />
            <SignUpForm />
          </div>
        </div>

        {/* PANELS CONTAINER */}
        <div className="panels-container">
          <LeftPanel onToggle={toggleMode} />
          <RightPanel onToggle={toggleMode} />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
