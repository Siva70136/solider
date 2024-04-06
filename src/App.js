import { Component } from 'react';
import { MenuProvider } from './context/themecontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import More from './components/more'
import Campaign from './components/campaign'
import Home2 from './components/Home2'
import Store from './components/store'
import Multiplayer from './components/multiplayer';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MenuProvider>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/solider' Component={Home} />
            <Route exact path='/home' Component={Home2} />
            <Route exact path='/more' Component={More} />
            <Route exact path='/campaign' Component={Campaign} />
            <Route exact path='/store' Component={Store} />
            <Route exact path='/multiplayer' Component={Multiplayer} />
          </Routes>
        </MenuProvider>
      </BrowserRouter>

    )
  }
}
export default App;