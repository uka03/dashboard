
import './App.css';
import { Route, Routes } from "react-router-dom";
import ControlPanel from './components/sub-component/ControlPanel';
import DashProducts from './components/sub-component/DashProducts';
import Order from './components/sub-component/Order'
import Users from './components/sub-component/Users'
import Moderator from './components/sub-component/Moderator'
import Settings from './components/sub-component/Settings'
import DashHeader from './components/Dashheader'
import DashSide from './components/DashSide';


function App() {
  return (
    <div className="App">
      <div className="dashboard">
        <DashHeader />
        <div className="container dashMain">
          <DashSide />
          <Routes>
            <Route path="*" element={<ControlPanel />} />
            <Route path="/dashProducts" element={<DashProducts />} />
            <Route path="/order" element={<Order />} />
            <Route path="/users" element={<Users />} />
            <Route path="/moderator" element={<Moderator />} />
            <Route path="/settigns" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
