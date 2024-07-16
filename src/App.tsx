import React from 'react';  
 
import Navi from './components/Navi';
import Main from './pages/Main';
import "./styles/app.scss"
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App ">
      <Navi></Navi>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
