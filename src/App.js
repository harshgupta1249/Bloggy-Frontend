import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Setting from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/register">
          {user ? <HomePage /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <HomePage /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/setting">
          {user ? <Setting /> : <Login />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
