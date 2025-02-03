import './App.css';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [username, setUsername] = useState('');
  const [activeView, setActiveView] = useState('dashboard'); 
  const [theme, setTheme] = useState('light');  
  const navigate = useNavigate();

  useEffect(() => {
    const storedFullName = localStorage.getItem('fullname');
    const storedTheme = localStorage.getItem('theme'); 
    if (storedFullName) {
      setUsername(storedFullName); 
    }
    if (storedTheme) {
      setTheme(storedTheme); 
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); 
    localStorage.setItem('theme', theme); 
  }, [theme]);

  const handleLogout = async () => {
    localStorage.removeItem('firstname');
    await fetch('/api/logout', { method: 'POST' });
    navigate('/login');
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light'); 
  };

  return (
    <div className={`min-h-screen flex flex-col animate-loginCard-slideFadeIn ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
     
      <header className='bg-white shadow-md text-black p-4 flex justify-between items-center z-20 relative dark:bg-gray-800 dark:text-white'>
        <h1 className='text-2xl font-bold tracking-widest'>Gaisano University</h1>

        <nav className='flex space-x-4 overflow-x-auto'>
          <button 
            className='text-black font-medium hover:bg-green-600 py-2 px-4 rounded-lg dark:text-white dark:hover:bg-green-800'
            onClick={() => handleViewChange('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className='text-black font-medium hover:bg-green-600 py-2 px-4 rounded-lg dark:text-white dark:hover:bg-green-800'
            onClick={() => handleViewChange('users')}
          >
            Users
          </button>
          <button 
            className='text-black font-medium hover:bg-green-600 py-2 px-4 rounded-lg dark:text-white dark:hover:bg-green-800'
            onClick={() => handleViewChange('settings')}
          >
            Settings
          </button>
          <button
            className="text-black font-medium hover:bg-red-600 py-2 px-4 rounded-lg dark:text-white dark:hover:bg-red-800"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>

    
      <div className='flex flex-1'>
        <main className='flex-1 p-6'>
          {activeView === 'dashboard' && (
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white'>
              <div className='text-center p-6'>
                <h2 className='font-bold text-xl'>Welcome, {username}!</h2>
              </div>
            </div>
          )}
          {activeView === 'users' && (
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white'>
              <div className='text-center p-6'>
                <h2 className='font-bold text-xl'>Users</h2>
                <p>{username}</p>
              </div>
            </div>
          )}
          {activeView === 'settings' && (
            <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white'>
              <div className='text-center p-6'>
                <h2 className='font-bold text-xl'>Settings</h2>
              
                <div className="mt-4">
                  <button
                    className='text-black font-medium hover:bg-gray-600 py-2 px-4 rounded-lg dark:text-white dark:hover:bg-gray-700'
                    onClick={toggleTheme}
                  >
                    Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

   
      <footer className='bg-white text-black p-2 text-center dark:bg-gray-800 dark:text-white'>
        <p>&copy; 2025 Zeel</p>
      </footer>
    </div>
  );
};

export default Homepage;
