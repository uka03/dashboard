import axios from "axios";
import { useEffect, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";

export default function UserCanvas(prop) {
  const { setCloseUserCanva, data, orderData, proData } = prop;
  function handlerSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:2020/product/${data.id}`, {})
      .then((res) => setRefesh(res));

    setCloseUserCanva(false);
  }

  return (
    <div className="offcanvas">
      <div className="offcanvas-content">
        <div className="offcanvas-content-header">
          <button
            onClick={() => {
              setCloseUserCanva(false);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <form
          className="offcanvas-main"
          onSubmit={handlerSubmit}
          id="addedProduct"
        >
          <div className="offcanvas-main-inputs">
            <label>
              <p> Овог </p>
              <input type="text" name="name" defaultValue={data.last_name} />
            </label>
            <label>
              <p> Нэр</p>
              <input type="text" name="price" defaultValue={data.first_name} />
            </label>
            <label>
              <p>Утасны дугаар</p>
              <input
                type="number"
                name="stock"
                defaultValue={data.phone_number}
              />
            </label>
            <label>
              <p>И-Мэйл хаяг</p>
              <input type="text" name="sale" defaultValue={data.email} />
            </label>
          </div>
          <label>
            <p>Хаяг</p>
            <textarea
              name="address"
              id="address"
              cols="10"
              rows="5"
              defaultValue={data.address}
            ></textarea>
          </label>
          <div className="userCanva-order">
            <div className="userCanva-order-title">
              <p>Захиалгын түүх</p>
              <p>{"(0)"}</p>
            </div>
            <table>
              <tbody>
                {orderData.map((order, index) => {
                  return (
                    <Order
                      order={order}
                      index={index}
                      data={data}
                      proData={proData}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>

          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <button className="saveBtn" type="submit">
            Хадгалах
          </button>
        </form>
      </div>
    </div>
  );
}
function Order(prop) {
  const { order, index, data, proData } = prop;
  const [orderPro, setOrderPro] = useState([]);

  // orderPro.map((e) => {
  //   console.log(e);
  // });
  if (data.id === order.userId) {
    let status;
    let color;

    proData.map((product) => {
      console.log(order.products.includes(product.id));
    });

    if (order.status == true) {
      status = "Хүргэгдсэн";
      color = "green";
    } else {
      status = "Хүргэлтэнд гараагүй";
      color = "red";
    }

    return (
      <tr key={index}>
        <td>
          <p>{order.date}</p>
        </td>
        <td>
          <p>{order.orderId}</p>
        </td>
        <td>
          <p style={{ color: color }}>{status}</p>
        </td>
        <td></td>
      </tr>
    );
  }
}
