import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAL0nO6IoJQRvApxToys-nWfb3hKtTOlQk',
  authDomain: 'fitness-app-7f40f.firebaseapp.com',
  databaseURL: 'https://fitness-app-7f40f.firebaseio.com',
  projectId: 'fitness-app-7f40f',
  storageBucket: 'fitness-app-7f40f.appspot.com',
  messagingSenderId: '879711087822',
  appId: '1:879711087822:web:4c0fff64a94205900db49f',
  measurementId: 'G-LLZBWFQHRR',
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
