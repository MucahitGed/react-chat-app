import '../style/App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import React from 'react'
import {AuthProvider} from '../contexts/AuthContext'

import Chats from './Chats'
import Login from './Login'

function App() {
  return (
    <div style={{fontFamily: 'sans-serif'}} className="container">
      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/chats" element={<Chats/>} />
            <Route path="/" element={<Login/>} /> 
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
