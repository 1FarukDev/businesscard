import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About.js';
import Info from './components/Info.js';
import Interest from './components/Interest.js';
import Footer from './components/Footer.js'; 
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main'>
        <Info />
        <About />
        <Interest />
        <Footer />
        <App />
    </div>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
