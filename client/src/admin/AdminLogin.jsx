import React, {useState} from 'react'
import { logIn } from '../auth';
import { useNavigate} from 'react-router-dom'

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://real-estate-1kn6.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),

      });

      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful');
        // Save the token to state, localStorage, or a global state management solution
        logIn(data.token)
        setUsername('');
        setPassword('');
        navigate('/admin/admin-dashboard')
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }

  };

  return ( 
    <div className='container-fluid'>
        <h1 className='text-center mt-4 fs-1'>Admin Login</h1>
      <form className='container-admin mt-3' onSubmit={handleLogin}>
        <label className='admin-label'>
          <span className='fs-4'>Username</span>
          <input type="text" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className='admin-label'>
          <span className='fs-4'>Password</span>
          <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button className='btn btn-primary fs-5 admin-btn' type="submit">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin