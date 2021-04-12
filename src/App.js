import React from "react";
import { useAuth } from "context/AuthContext";

// COMPONENTS
import UserAuth from './components/UserAuth';
import UserNotAuth from './components/UserNotAuth';

// STYLES
import './App.css';

import {AuthProvider} from 'context/AuthContext';

function App() {

  return(
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}

function Content(){
  const {currentUser} = useAuth();
  return currentUser ? <UserAuth/> : <UserNotAuth/>;
}

export default App;


// ICONS : https://undraw.co/search
// COLORS : https://colorsinspo.com/
