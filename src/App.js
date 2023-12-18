import { Outlet, useNavigate } from "react-router-dom";
import './App.css';

function App(){
  var navigate = useNavigate();
  function logout(){
    window.localStorage.removeItem("user");
    navigate(`/`)
  }
  return (
    <div className="app">
      <div className="header">
        <h1 className="app-h1">Customer Ticket Raise</h1>
        <button id="log-btn" onClick={()=>logout()}>{window.localStorage.getItem("user")?"Logout":"Login"}</button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
