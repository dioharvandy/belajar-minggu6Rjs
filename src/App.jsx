import {
  Login,
  Register,
  Home
} from './pages'
import {Switch, Route} from 'react-router-dom';

function App() {
  
  return(
    <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-item px-3">
            <a className='navbar-brand mb-0 h1' href="/" exact = "true">Home</a>
            <a className='navbar-brand' href="/register">Register</a>
            <a className='navbar-brand' href="/login">Login</a>
        </div>
    </nav>
      <div className="py-5">
        <Switch>
          <Route component={Home} path = "/" exact/>  
          <Route component={Register} path = "/register"/>
          <Route component={Login} path = "/login"/>
        </Switch> 
      </div>
    </div>
  )  
}

export default App;
