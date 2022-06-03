import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Feeds from "./Pages/Feeds";
import RequireAuth from "./context/RequiredAuth";

function App() {
  return (
    <div className="App">
      <h1>DHJHD</h1>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route
          path="Feeds"
          element={
            <RequireAuth>
              <Feeds />
            </RequireAuth>
          }
        />
        <Route path="posts" element={
          <RequireAuth>
            <posts/>
          </RequireAuth>
        }>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
