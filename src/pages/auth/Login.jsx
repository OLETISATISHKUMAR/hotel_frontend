import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/auth.service';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await authService.login(email, password);
      console.log('Login successful', response);
      history.push('/'); // Redirect to homepage or dashboard after successful login
    } catch (error) {
      console.error('Login error', error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" disabled={loading}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
