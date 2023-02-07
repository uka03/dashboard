import { useContext, useState } from "react";
import "../../style/mainStyle/dashProducts.css";

import MenuIcon from "../../icons/Menuicon";
import axios from "axios";
import UserCanvas from "./UserCanvas";
import { DataContext } from "../../App";

export default function Users() {
  const { data, userData, orderData, setRefesh } = useContext(DataContext);

  const [closeuserCanva, setCloseUserCanva] = useState(false);
  const [user, setUser] = useState();
  const [filter, setFilter] = useState("all");

  function deleteUser(id) {
    axios
      .delete(`http://localhost:2020/users/${id}`)
      .then((res) => setRefesh(res));
  }
  function editHandler() {
    setCloseUserCanva(true);
  }
  return (
    <>
      {userData && (
        <div className="DashProducts">
          <div className="products-header">
            <div className="filter">
              <input
                type="text"
                placeholder="search"
                id="search"
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              />
            </div>
          </div>
          <table className="table">
            <thead className="table-head">
              <tr>
                <th>id</th>
                <th>нэр</th>
                <th>Овог</th>
                <th>И-майл хаяг</th>
                <th>Утас</th>
                <th>Огноо</th>
                <th>
                  <button>засах</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => {
                if (
                  user.category === filter ||
                  filter === "all" ||
                  user.category.toLowerCase().includes(filter) ||
                  user.name.toLowerCase().includes(filter)
                ) {
                  return (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.first_name}</td>
                      <td>{user.last_name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone_number}</td>
                      <td>{user.date}</td>
                      <td>
                        <button className="menuBtn">
                          <MenuIcon />
                          <div className="menuBtn-dropDown">
                            <input
                              type="button"
                              value="edit"
                              onClick={() => {
                                editHandler(user);
                                setUser(user);
                              }}
                            />
                            <input
                              type="button"
                              value="delete"
                              onClick={() => deleteUser(user.id)}
                            />
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
            {closeuserCanva ? (
              <UserCanvas
                setCloseUserCanva={setCloseUserCanva}
                userData={user}
              />
            ) : null}
          </table>
        </div>
      )}
    </>
  );
}
