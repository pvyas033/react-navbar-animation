import About from "./component/about/about.components";
import Contact from "./component/contact/contact.component";
import Projects from "./component/projects/projects.component";
import Header from "./component/header/header.component";
import Resume from "./component/resume/resume.component";

import "./App.css";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Header}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/resume" component={Resume}></Route>
      </Switch>
    </div>
  );
}

export default App;
