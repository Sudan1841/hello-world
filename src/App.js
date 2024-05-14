import React from 'react';
import './App.css';
import logo from './logo.svg';
import UserProfile from './components/UserProfile';
import ContactForm from './components/ContactForm';
import VerticalNavBar from './components/VerticalNavBar';

export function App() {
  return (
    <div className="App">
      <VerticalNavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to my app</h1>
        <UserProfile />

        <ContactForm />
      </header>
    </div>
  );
}

export default App;
