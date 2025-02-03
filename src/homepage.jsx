import './App.css';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [username, setUsername] = useState('');
  const [activeView, setActiveView] = useState('dashboard'); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedFullName = localStorage.getItem('fullname');
    if (storedFullName) {
      setUsername(storedFullName); 
    }
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('firstname');
    await fetch('/api/logout', { method: 'POST' });
    navigate('/login');
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <div className='min-h-screen flex flex-col animate-loginCard-slideFadeIn'>
      
  
      <header className='bg-white shadow-md text-black p-4 flex justify-between items-center z-20 relative'>
        <h1 className='text-2xl font-bold tracking-widest'>Gaisano University</h1>

        <nav className='flex space-x-4'>
          <button 
            className='text-black font-medium hover:bg-green-600 py-2 px-4 rounded-lg'
            onClick={() => handleViewChange('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className='text-black font-medium hover:bg-green-600 py-2 px-4 rounded-lg'
            onClick={() => handleViewChange('users')}
          >
            Users
          </button>
          <button
            className="text-black font-medium hover:bg-red-600 py-2 px-4 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>

      <div className='flex flex-1'>
        <main className='flex-1 p-6'>
          {activeView === 'dashboard' && (
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md'>
              <div className='text-center p-6'>
                <h2 className='font-bold text-xl'>Welcome, {username}!</h2>
              </div>
            </div>
          )}
          {activeView === 'users' && (
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md'>
              <div className='text-center p-6'>
                <h2 className='font-bold text-xl'>Users</h2>
                <p>{username}</p>
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className='bg-white text-black p-2 text-center'>
        <p>&copy; 2025 Zeel</p>
      </footer>
    </div>
  );
};

export default Homepage;
