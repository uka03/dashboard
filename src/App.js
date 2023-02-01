import "./App.css";
import { Route, Routes } from "react-router-dom";
import ControlPanel from "./components/sub-component/ControlPanel";
import DashProducts from "./components/sub-component/DashProducts";
import Order from "./components/sub-component/Order";
import Users from "./components/sub-component/Users";
import Moderator from "./components/sub-component/Moderator";
import Settings from "./components/sub-component/Settings";
import DashHeader from "./components/Dashheader";
import DashSide from "./components/DashSide";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState();
  const [userData, setUserData] = useState()
  const [refresh, setRefesh] = useState("")
  useEffect(() => {
    axios.get("http://localhost:2020/product").then((res) => setdata(res.data));
  }, [refresh]);
  useEffect(() => {
    axios.get("http://localhost:2020/users").then((res) => setUserData(res.data));
  }, [refresh]);
  console.log(data);

  return (
    <div className="App">
      <div className="dashboard">
        <DashHeader />
        <div className="container dashMain">
          <DashSide />
          <div className="dashContent">
            <Routes>
              <Route path="*" element={<ControlPanel />} />
              <Route
                path="/dashProducts"
                element={<DashProducts data={data} setRefesh={setRefesh} />}
              />
              <Route path="/order" element={<Order />} />
              <Route path="/users" element={<Users data={userData} setRefesh={setRefesh} />} />
              <Route path="/moderator" element={<Moderator />} />
              <Route path="/settigns" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
