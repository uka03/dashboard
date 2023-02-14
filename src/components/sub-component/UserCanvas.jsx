import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../App";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";

export default function UserCanvas(prop) {
  const { data, orderData } = useContext(DataContext);
  const { setCloseUserCanva, userData } = prop;

  function handlerSubmit(e) {
    e.preventDefault();
    let id = userData.id;
    let email = e.target.email.value;
    let first_name = e.target.lastName.value;
    let last_name = e.target.firstName.value;
    let password = e.target.password.value;
    let phone_number = e.target.phoneNumber.value;
    let date = userData.date;
    let address = e.target.address.value;
    let userObject = {
      id,
      email,
      first_name,
      last_name,
      password,
      phone_number,
      date,
      address,
    };

    axios
      .put(`http://localhost:2020/user/${userData.id}`, userObject)
      .then((res) => console.log(res));

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
              <input
                type="text"
                name="lastName"
                defaultValue={userData.first_name}
              />
            </label>
            <label>
              <p> Нэр</p>
              <input
                type="text"
                name="firstName"
                defaultValue={userData.last_name}
              />
            </label>
            <label>
              <p>Утасны дугаар</p>
              <input
                type="number"
                name="phoneNumber"
                defaultValue={userData.phone_number}
              />
            </label>
            <label>
              <p>И-Мэйл хаяг</p>
              <input type="text" name="email" defaultValue={userData.email} />
            </label>
          </div>
          <label>
            <p>Хаяг</p>
            <textarea
              name="address"
              id="address"
              cols="10"
              rows="5"
              defaultValue={userData.address}
            ></textarea>
          </label>
          <div className="userCanva-order">
            <div className="userCanva-order-title">
              <p>Захиалгын түүх</p>
              <p>{`(0)`}</p>
            </div>
            <table>
              <tbody>
                {orderData.map((order, index) => {
                  if (userData.id == order.userId) {
                    return (
                      <tr className="" key={index}>
                        <Order order={order} index={index} data={data} />
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>

          <label>
            <p>Password</p>
            <input
              type={"password"}
              name="password"
              defaultValue={userData.password}
            />
            <span>show</span>
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
  const { order, index, data } = prop;
  const [orderPro, setOrderPro] = useState([]);
  let totalPrice = 0;

  let status;
  let color;

  data.map((product) => {
    order.products.map((orderId) => {
      if (product.id == orderId) {
        orderPro.push(product);
      }
    });
  });

  orderPro.map((product) => {
    totalPrice = totalPrice + Number(product.price);
  });

  if (order.status == true) {
    status = "Хүргэгдсэн";
    color = "green";
  } else {
    status = "Хүргэлтэнд гараагүй";
    color = "red";
  }

  return (
    <>
      {" "}
      <td>
        <p>{order.date}</p>
      </td>
      <td>
        <p>{order.orderId}</p>
      </td>
      <td>
        <p style={{ color: color }}>{status}</p>
      </td>
      <td>
        <p>${totalPrice}</p>
      </td>
    </>
  );
}
