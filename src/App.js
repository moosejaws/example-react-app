import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import './App.css'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <div className="App">

      <header>
      <div>
            <div className="Cake">
            <h1>LOGO</h1>
            </div>
        </div>
      </header>

      <nav id="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </main>

      <footer>
      You can put anything here.

      </footer>

    </div>
  )
}

export default App
