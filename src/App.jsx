import React from "react";
import HomePage from "./pages/HomePage";
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
      <div className="app-container">
        <header className="notes-app__header">
          <h1>Personal Notes App</h1>
          <Navigation />
        </header>
        <main>
            <Routes>
                  <Route path="/" element={<HomePage />} />  
            </Routes>
          
        </main>
      </div>
    );
}

export default App;