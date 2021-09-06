import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './pages/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container pt-4">
    <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/about'} component={About}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
