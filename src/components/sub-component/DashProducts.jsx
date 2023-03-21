import "../../style/mainStyle/dashProducts.css";
import OffCanvas from "./OffCanvas";
import { useContext, useState } from "react";
import MenuIcon from "../../icons/Menuicon";
import axios from "axios";
import { DataContext } from "../../App";

export default function DashProducts() {
  const { data, setRefesh } = useContext(DataContext);
  const [closeOffCanva, setCloseOffcanva] = useState(false);
  const [product, setProduct] = useState();
  const [filter, setFilter] = useState("all");

  let tempCategory = [];

  function deleteProduct(index) {
    axios
      .delete(`http://localhost:3030/product/${index}`)
      .then((res) => setRefesh(res));
  }
  function editHandler() {
    setCloseOffcanva(true);
  }
  return (
    <>
      {data && (
        <div className="DashProducts">
          <div className="products-header">
            <div className="addProduct">
              <button
                className="addProduct_button"
                onClick={() => {
                  setCloseOffcanva(true);
                }}
              >
                + Бараа нэмэх
              </button>
            </div>
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
                <th>Зураг</th>
                <th>Барааны нэр</th>
                <th>Үнэ</th>
                <th>Үлдэгдэл</th>
                <th>Хямдрал %</th>
                <th>Категори</th>
                <th>
                  <button>засах</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => {
                if (
                  product.category === filter ||
                  filter === "all" ||
                  product.category.toLowerCase().includes(filter) ||
                  product.name.toLowerCase().includes(filter)
                ) {
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={product.image}
                          alt=""
                          className="productImg"
                        />
                      </td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>{product.stock}</td>
                      <td>{product.sale}</td>
                      <td>{product.category}</td>
                      <td>
                        <button className="menuBtn">
                          <MenuIcon />
                          <div className="menuBtn-dropDown">
                            <input
                              type="button"
                              value="edit"
                              onClick={() => {
                                editHandler(product);
                                setProduct(product);
                              }}
                            />
                            <input
                              type="button"
                              value="delete"
                              onClick={() => deleteProduct(product._id)}
                            />
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
            {closeOffCanva ? (
              <OffCanvas
                closeOffCanva={setCloseOffcanva}
                data={product}
                setProduct={setProduct}
                fullData={data}
                setRefesh={setRefesh}
              />
            ) : null}
          </table>
        </div>
      )}
    </>
  );
}
