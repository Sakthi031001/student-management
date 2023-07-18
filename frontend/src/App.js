import logo from './logo.svg';
import './App.css';

import { home } from './components/Home';
import { Navigation } from './components/Navigation'
import { students } from './components/students'
import { Manage } from './components/Manage'

import { BrowserRouter, Route ,Routes, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Navigation />
          <switch>
            <Routes>
              <Route  path='/' Component={home} exact></Route>
              <Route  path='/students' Component={students} exact></Route>
              <Route  path='/manage' Component={Manage} exact></Route>
            </Routes>
          </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
