import React, { useState } from 'react';
import InputField from './InputField';
import SocialMedia from './SocialMedia';
import { validateSignIn } from './validation';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    username: '',
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
    const validationErrors = validateSignIn(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    console.log('Sign In:', formData);
    setTimeout(() => {
      alert('Sign In Successful!');
      setFormData({ username: '', password: '' });
      setIsLoading(false);
    }, 500);
  };

  return (
    <form className="sign-in-form" onSubmit={handleSubmit}>
      <h2 className="title">Sign in</h2>

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
        icon="🔒"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />

      <button type="submit" className="btn solid" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Login'}
      </button>

      <p className="social-text">Or Sign in with social platforms</p>
      <SocialMedia />
    </form>
  );
};

export default SignInForm;