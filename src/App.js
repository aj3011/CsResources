import "./App.css";
import Home from "./HomePage/Home.js";
import languages from "./Data/Languages.js";
import technologies from "./Data/Technologies.js";
import Dividers from "./Components/Dividers";
import Languages from "./Components/Languages";
import Tech from "./Components/Tech";
import Make from "./Components/Make";
import Learn from "./Components/Learn";
import { Switch, Route } from "react-router-dom";
import NavBar from "./HomePage/NavBar";

console.log(languages);

function App() {
  return (
    <div className="App">
      {/* since we enclosed the App inside the router in index.js, so all the paths will be redirected here so Navbar is written here so that it comes on every page by default */}
      <NavBar />
      {/* <Alert variant='secondary'>This is a alert</Alert>
      <Button>classic</Button> */}
      <Switch>
        {/* {technologies.map((tech, i) => (
          <Route
            exact
            path={tech.proj}
            key={i}
            render={() =>
              lang.learnContent.map(item => (
                <Learn name={item.name} link={item.link} image={item.image} />
              ))
            }
          />
        ))} */}

        {languages.map((lang, i) => (
          <Route
            exact
            path={lang.learnPath}
            key={i}
            // whenever we want to use props, we will use render instead of components
            render={() => <Learn resources={lang.learnContent} />}
          />
        ))}

        {languages.map((tech, i) => (
          <Route
            exact
            path={tech.projPath}
            key={i}
            render={() => <Make resources={tech.ApplyContent} />}
          />
        ))}

        <Route exact path="/dividers" component={Dividers} />
        <Route exact path="/Languages" component={Languages} />
        <Route exact path="/Tech" component={Tech} />
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
