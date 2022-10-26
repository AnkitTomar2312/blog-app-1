import Home from "./pages/home/Home";
import TopBar from "./Components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {


  return (
    <Router>
      <TopBar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/write" element={<Write />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/settings" element={<Register />} />
      <Route path="/post/:postID" element={<Single />} />
      </Routes>
      
   </Router>
  );
}

export default App;
