import './App.css';
import { useNavigate } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [username, setUsername] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false); 
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

  return (
    <div className='min-h-screen flex flex-col animate-loginCard-slideFadeIn'>
      <header className='bg-white shadow-lg text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-black tracking-widest'>Gaisano University</h1>
        <button
          className='md:hidden text-black p-2'
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰ 
        </button>
      </header>

      <div className='flex flex-1'>
        <aside
          className={`bg-white shadow-2xl transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block w-64 fixed md:relative top-0 bottom-0 left-0 z-10`}
        >
          <nav className='mt-10'>
            <ul>
              <button className='w-full py-4 bg-white hover:bg-green-600'>
                <a href="#" className='text-black font-bold tracking-wider'>Dashboard</a>
              </button>
              <button className='w-full py-4 bg-white hover:bg-green-600'>
                <a href="#" className='text-black font-bold tracking-wider'>Dashboard</a>
              </button>
              <button className='w-full py-4 bg-white hover:bg-green-600'>
                <a href="#" className='text-black font-bold tracking-wider'>Dashboard</a>
              </button>
              <button className='w-full py-4 bg-white hover:bg-green-600'>
                <a href="#" className='text-black font-bold tracking-wider'>Dashboard</a>
              </button>
              <button
                className="w-full py-3 bg-green-700 text-white  hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </ul>
          </nav>
        </aside>

        <main className='flex-1 p-6 ml-0 md:ml-64'>
          <div className='max-w-sm mx-auto bg-white rounded-lg shadow-md'>
            <div className='text-center p-6'>
              <h2 className='font-bold text-xl'>Welcome, {username}!</h2>
            </div>
          </div>
        </main>
      </div>

      <footer className='bg-gray-700 text-white p-2 text-center'>
        <p>&copy; 2025 Zeel</p>
      </footer>
    </div>
  );
};

export default Homepage;
