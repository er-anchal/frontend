import React, { useState } from 'react';
import InputField from './InputField';
import SocialMedia from './SocialMedia';
import { validateSignUp } from './validation';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form
    const validationErrors = validateSignUp(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    console.log('Sign Up:', formData);
    setTimeout(() => {
      alert('Sign Up Successful!');
      setFormData({ username: '', email: '', password: '' });
      setIsLoading(false);
    }, 500);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign up</h2>

      <InputField
        icon="👤"
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />

      <InputField
        icon="✉️"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        icon="🔒"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <button type="submit" className="btn" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Sign up'}
      </button>

      <p className="social-text">Or Sign up with social platforms</p>
      <SocialMedia />
    </form>
  );
};

export default SignUpForm;