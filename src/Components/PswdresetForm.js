import React, { useState } from 'react';

const ResetPasswordForm = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // rest of the submit logic
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Password:
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </label>
      {error && <p className="error">{error}</p>}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default ResetPasswordForm;