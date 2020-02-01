import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import LandingPage from '../../routes/LandingPage'
import LoginPage from '../../routes/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage'
import UploadPage from '../../routes/UploadPage'
import ExperimentsPage from '../../routes/ExperimentsPage'
import './App.css'

class App extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {

    return (
      <div className="App">
          <header className="App__header">
            <Route path={'/'} component={Navbar} />
          </header>

        <main className="App__main">
          <Switch>
            <Route exact path={'/'} component={LandingPage} />
            <Route path={'/register'} component={RegistrationPage} />
            <Route path={'/login'} component={LoginPage} />
            <Route path={'/experiments'} component={ExperimentsPage} />
            <Route path={'/upload'} component={UploadPage} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App