import "./App.css";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";

function App() {  
  return (
    <div className="app">
      <Sidebar nombre="Santiago Alegria" />
      <Dashboard />
    </div>
  );
}

export default App;