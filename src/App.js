import Login from "./Components/Login/login";
import Header from "./Components/Header/header";
import Dashboard from "./Components/Dashboard/dashboard";
import { useState } from "react";

function App() {
  const [dashboard, setDashboard] = useState(false);
  return (
    <div className="App">
      <Header />
      {!dashboard && <Login setDashboard={setDashboard} />}
      {dashboard && <Dashboard setDashboard={setDashboard} />}
    </div>
  );
}

export default App;
