import React , {useEffect} from 'react';
import Home from './pages/Home'
import GlobalStyle from './components/Globalstyles'
import {Route} from 'react-router-dom'
import Nav from './components/Nav'
function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Route path = {['/games/:id' , '/']}>
        <Nav />
         <Home />
      </Route>
    </div>
  );
}

export default App;
