import { useState } from 'react';
import './App.css'; // Global styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ProductsPage from './components/ProductsPage'; // Import ProductsPage component

function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-3">
        <h1>Product Listings</h1>
      </header>
      <main className="container mt-4">
        <ProductsPage />
      </main>
    </div>
  );
}

export default App;
