import { useContext, useState } from "react";
import { DataContext } from "../../App";

export default function Order() {
  const { orderData, userData, data } = useContext(DataContext);

  return (
    orderData && (
      <div className="">
        <div className="orderMain">
          <table>
            <thead>
              <tr>
                <th>Захиалга No</th>
                <th>Огноо</th>
                <th>Утас</th>
                <th>Майл</th>
                <th>Хаяг</th>
                <th>Тоо</th>
                <th>Нийт дүн</th>
                <th>Төлбөр</th>
                <th>Статус</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, index) => {
                let user;
                user =
                  userData && userData.find((user) => user.id == order.userId);
                let orderCount = 0;
                order.products.map(
                  (orderPro) => (orderCount = orderCount + orderPro.stock)
                );
                let orderStatus;
                if (order.status) {
                  orderStatus = "хүргэгдсэн";
                } else {
                  orderStatus = "хүргэлтэнд гараагүй";
                }

                return (
                  user && (
                    <tr key={index}>
                      <td>{order.orderId}</td>
                      <td>{order.date}</td>
                      <td>{user.phone_number}</td>
                      <td>{user.email}</td>
                      <td>{user.address.slice(0, 10)}...</td>
                      <td>{orderCount}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.pay}</td>
                      <td>{orderStatus}</td>
                      <td></td>
                    </tr>
                  )
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  );
}
