import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.component'
import MenuAppBar from './components/navbar.component';
import ProfileRepositoriesComponent from './components/profile/repositories.components';
import Profile from './components/profile/profile.components';
import NavbarComponent from './components/navbar.component';
function App() {
  return (
    <div >
     <NavbarComponent/>
   <Profile></Profile>
      
    </div>
  );
}

export default App;