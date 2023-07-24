import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { wagmiClient } from './config/config';
import { WagmiConfig } from 'wagmi';

// var CryptoJS = require("crypto-js");
// const bytes = CryptoJS.AES.decrypt(APP_ID, S_KEY);
// const APP_ID_DECRYPTED = bytes.toString(CryptoJS.enc.Utf8);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
