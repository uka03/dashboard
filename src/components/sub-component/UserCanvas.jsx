import axios from "axios";
import { useEffect, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";

export default function UserCanvas(prop) {
  const { setCloseUserCanva, data } = prop;
  function handlerSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let price = e.target.price.value;
    let stock = e.target.stock.value;
    let sale = e.target.sale.value;
    let category = e.target.chooseCategory.value;
    let brand = e.target.chooseBrand.value;
    let image = data ? data.image : null;
    let id = data ? data.id : null;
    let proObject = {
      name,
      image,
      price,
      stock,
      sale,
      category,
      brand,
      spec,
      id,
    };

    console.log(proObject);

    axios
      .put(`http://localhost:2020/product/${data.id}`, proObject)
      .then((res) => setRefesh(res));
    console.log(proObject);

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
            <textarea name="address" id="address" cols="30" rows="10">
              {data.address}
            </textarea>
          </label>

          <button className="saveBtn" type="submit">
            Хадгалах
          </button>
        </form>
      </div>
    </div>
  );
}
