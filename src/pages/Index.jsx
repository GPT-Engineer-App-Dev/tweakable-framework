import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      <nav className="bg-gray-200 p-4">
        {/* Add navigation items here */}
        <ul className="flex space-x-4">
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Link 1</a></li>
          <li><a href="#" className="text-blue-500 hover:text-blue-700">Link 2</a></li>
        </ul>
      </nav>

      <main className="flex-grow p-4">
        {/* Main content area */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Section Title</h2>
          <p>Add your content here.</p>
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My App</p>
      </footer>
    </div>
  );
};

export default Index;