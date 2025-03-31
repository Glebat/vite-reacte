import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>Это основной контент приложения.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;