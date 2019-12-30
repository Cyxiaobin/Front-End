import React, { Component } from 'react';

import Home from './components/Home.js';

import { BrowserRouter ,Route,Switch,Link} from 'react-router-dom'
import LoginForm from './components/LoginForm.js';
import ReactForm from './components/ReactForm.js';
import Zaixianxiadan from './components/Zaixianxiadan.js';
import Pcontent from './components/Pcontent.js';
import F from './components/F.js';

class App extends Component {

  render() {
    return (
      <div className="App">

    
 
        <BrowserRouter>

          <Switch>
           <Route  exact path ="/" component={Home}></Route>
           <Route  path ="/Home" component={Home}></Route>
           <Route  path ="/ReactForm" component={ReactForm}></Route>
           <Route  path="/LoginForm" component={LoginForm}></Route>
           <Route  path="/Zaixianxiadan" component={Zaixianxiadan}></Route>
           <Route  path="/Pcontent" component={Pcontent}></Route>
           <Route path="/F" component={F}></Route>
         
         </Switch>
 
         </BrowserRouter>
        
</div>
    );
  }
}

export default App;
