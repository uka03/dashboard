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
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext()

function App() {
  const [data, setdata] = useState();
  const [userData, setUserData] = useState();
  const [orderData, setOrderData] = useState();
  const [refresh, setRefesh] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3030/product").then((res) => setdata(res.data));
  }, [refresh]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/user")
      .then((res) => setUserData(res.data));
  }, [refresh]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/order")
      .then((res) => setOrderData(res.data));
  }, [refresh]);


  return (
    <DataContext.Provider value={{ data, userData, orderData, setRefesh }}>
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
                  element={<DashProducts />}
                />
                <Route path="/order" element={<Order />} />
                <Route
                  path="/users"
                  element={
                    <Users

                    />
                  }
                />
                <Route path="/moderator" element={<Moderator />} />
                <Route path="/settigns" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>

    </DataContext.Provider>

  );
}

export default App;
