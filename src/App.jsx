import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SliderPage from './pages/SliderPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar (Left Navigation) */}
        <aside className="w-64 bg-gray-800 text-white p-6">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/" className="text-white hover:underline">Home</Link>
              </li>
              <li className="mb-4">
                <Link to="/slider" className="text-white hover:underline">Slider</Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-gray-100 p-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/slider" element={<SliderPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
