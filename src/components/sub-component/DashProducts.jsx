import "../../style/mainStyle/dashProducts.css";
import OffCanvas from "./OffCanvas";
import { useState } from "react";
export default function DashProducts(prop) {
  const { data } = prop;
  const [closeOffCanva, setCloseOffcanva] = useState(false);

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
              <select name="category" id="category">
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="telescop">telescop</option>
                <option value="laptop">Laptop</option>
                <option value="laptop">Laptop</option>
              </select>
              <input type="text" placeholder="search" />
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
                return (
                  <tr key={index}>
                    <td>
                      <img src={product.image} alt="" className="productImg" />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.sale}</td>
                    <td>{product.category}</td>
                    <td>
                      <button>засах</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {closeOffCanva ? (
            <OffCanvas closeOffCanva={setCloseOffcanva} />
          ) : null}
        </div>
      )}
    </>
  );
}
