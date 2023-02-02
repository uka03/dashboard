import { useState } from "react";
import "../../style/mainStyle/dashProducts.css";

import MenuIcon from "../../icons/Menuicon";
import axios from "axios";
import UserCanvas from "./UserCanvas";

export default function Users(prop) {
  const { data, setRefesh, orderData } = prop;
  const [closeuserCanva, setCloseUserCanva] = useState(false);
  const [user, setUser] = useState();
  const [filter, setFilter] = useState("all");
  console.log(data);

  let tempCategory = [];

  function deleteProduct(index) {
    axios
      .delete(`http://localhost:2020/product/${index}`)
      .then((res) => setRefesh(res));
  }
  function editHandler() {
    setCloseUserCanva(true);
  }
  return (
    <>
      {data && (
        <div className="DashProducts">
          <div className="products-header">
            <div className="filter">
              <select
                name="category"
                id="category"
                onChange={(e) => setFilter(e.target.value)}
                defaultValue="all"
              >
                <option value="all">all</option>
                {data.map((e, i) => {
                  if (!tempCategory.includes(e.category)) {
                    tempCategory.push(e.category);
                    return (
                      <option key={i} value={e.category}>
                        {e.category}
                      </option>
                    );
                  }
                })}
              </select>
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
              {data.map((user, index) => {
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
                              onClick={() => deleteProduct(index)}
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
                data={user}
                orderData={orderData}
              />
            ) : null}
          </table>
        </div>
      )}
    </>
  );
}
