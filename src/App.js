import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import { Profiler } from 'react';
import Profile1 from './components/Profile1';
import Student from './components/Student';
import Counter from './components/Counter';

function App() {
  
  return (
   <>
  
   <Counter/>
   <Profile1/>
   </>
  );
}

export default App;
