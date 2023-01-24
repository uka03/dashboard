import { data } from "../../utils/data";
import "../../style/mainStyle/dashProducts.css";
import OffCanvas from "./OffCanvas";
export default function DashProducts() {
  console.log(data);
  return (
    <div className="DashProducts">
      <div className="products-header">
        <div className="addProduct">
          <button className="addProduct_button">+ Бараа нэмэх</button>
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
      <table>
        <thead>
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
      <OffCanvas />
    </div>
  );
}
