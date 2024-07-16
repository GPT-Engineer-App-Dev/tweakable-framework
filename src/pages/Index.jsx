import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-red-100">
      <header className="bg-red-200 p-4">
        <h1 className="text-xl font-bold text-red-800">My App</h1>
      </header>

      <nav className="bg-red-300 p-4">
        {/* Add navigation items here */}
        <ul className="flex space-x-4">
          <li><a href="#" className="text-red-700 hover:text-red-900">Link 1</a></li>
          <li><a href="#" className="text-red-700 hover:text-red-900">Link 2</a></li>
        </ul>
      </nav>

      <main className="flex-grow p-4">
        {/* Main content area */}
        <section>
          <h2 className="text-lg font-semibold mb-2 text-red-800">Section Title</h2>
          <p className="text-red-700">Add your content here.</p>
        </section>
      </main>

      <footer className="bg-red-200 p-4 text-center">
        <p className="text-red-800">&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
};

export default Index;