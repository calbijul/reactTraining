import './App.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Homepage = () => {
  const [username, setUsername] = useState('');
  const [activeView, setActiveView] = useState('dashboard');
  const navigate = useNavigate();

  const greetings = [
    'Welcome back!',
    'Hello, {username}!',
    'Greetings, {username}!',
    'Hey there, {username}!',
    'Welcome to Gaisano University, {username}!',
    'Hi {username}, glad to have you back!',
    'It’s great to see you again, {username}!',
  ];

  const getRandomGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex].replace('{username}', username);
  };

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
    <div className="min-h-screen flex flex-col animate-loginCard-slideFadeIn bg-gray-100 text-black">
      <header className="bg-white p-5 px-20 shadow-md text-black flex justify-between items-center z-20 relative">
        <h1 className="text-2xl font-bold tracking-widest text-green-600">GAISANO UNIVERSITY</h1>

        <nav className="flex space-x-4 overflow-x-auto">
          <button
            className="text-black font-medium hover:bg-green-600 hover:text-white py-2 px-4 rounded-lg"
            onClick={() => handleViewChange('dashboard')}
          >
            Dashboard
          </button>
          <button
            className="text-black font-medium hover:bg-green-600 hover:text-white  py-2 px-4 rounded-lg"
            onClick={() => handleViewChange('users')}
          >
            Users
          </button>
          <button
            className="text-black font-medium hover:bg-green-600 hover:text-white  py-2 px-4 rounded-lg"
            onClick={() => handleViewChange('settings')}
          >
            Settings
          </button>
          <button
            className="text-black font-medium hover:bg-red-600 hover:text-white  py-2 px-4 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>

      <div className="flex flex-1">
        <main className="flex-1 overflow-auto p-6 px-20">
          {activeView === 'dashboard' && (
            <div className="bg-white rounded-lg shadow-md mt-6">
              <div className="text-center p-6">
                <h2 className="font-bold text-2xl animate-loginCard-slideFadeIn p-3">{getRandomGreeting()}</h2>
              </div>
            </div>
          )}

          {activeView === 'dashboard' && (
            <div className="mt-10 rounded-lg shadow-md p-14 bg-white">
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-4 tracking-wider animate-lineSlideFadeIn delay-100">
                  Welcome to Gaisano University!
                </h3>
                <p className="text-xl mb-4 font-semibold tracking-wider leading-loose">
                  <span className="block animate-lineSlideFadeIn delay-200">
                    The prestigious institution where <i>shopping</i> and <i>learning</i> merge in a seamless blend of consumerism and academia. Nestled in the heart of the Philippines, this one-of-a-kind educational establishment offers a diverse range of degrees, including Bachelor of Retail Therapy, Masters in Impulse Buying, and Doctorate in
                  </span>
                  <span className="block animate-lineSlideFadeIn delay-300">
                    Window Shopping. Forget traditional classrooms—here, lectures are held between the perfume counters and the latest smartphone displays. Graduates are highly sought after  for their expertise in navigating endless sales, maximizing mall food court discounts, and mastering the art of finding the perfect parking spot. At Gaisano University, you’re not just a student—you’re a shopper with a degree!
                  </span>

                  {/* <span className="block animate-lineSlideFadeIn delay-400">

                  </span>
                  <span className="block animate-lineSlideFadeIn delay-600">

                  </span> */}
                </p>
              </div>
            </div>
          )}

          {activeView === 'users' && (
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md">
              <div className="text-center p-6">
                <h2 className="font-bold text-xl">Users</h2>
                <p>{username}</p>
              </div>
            </div>
          )}

          {activeView === 'settings' && (
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md">
              <div className="text-center p-6">
                <h2 className="font-bold text-xl">Settings</h2>
              </div>
            </div>
          )}
        </main>
      </div>

      <footer className=" text-black p-2 text-center">
        <p>&copy; 2025 Zeel</p>
      </footer>
    </div>
  );
};

export default Homepage;
