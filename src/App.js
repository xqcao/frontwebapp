import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Todos from "./components/Todos";
import Users from "./components/Users";
import Home from "./components/Home";
import DevPage from "./components/DevPage";

const routes = [
  { name: "HomePAge", path: "/", component: Home },
  { name: "UasePAge", path: "/users", component: Users },
  { name: "TodoPAge", path: "/todos", component: Todos },
  { name: "DevPage", path: "/devpage", component: DevPage },
];

function App() {
  return (
    <div className="App">
      <h2>React app</h2>
      <nav>
        <ol>
          {routes.map((el, idx) => (
            <li key={el.name + "-" + idx}>
              <Link to={el.path}>{el.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <hr />
      <Routes>
        {routes.map((el, idx) => (
          <Route
            exact
            key={el.name + "_" + idx}
            path={el.path}
            element={<el.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
