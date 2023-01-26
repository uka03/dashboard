import axios from "axios";
import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";
export default function OffCanvas(prop) {
  const { closeOffCanva, data, setProduct } = prop;
  console.log(data);
  let temp = [];
  const [spec, setspec] = useState([]);
  const [addSpecKey, setAddSpecKey] = useState();
  const [addSpecVal, setAddSpecVal] = useState();
  function addedSpec(e) {
    e.preventDefault();

    let specObject = { addSpecKey, addSpecVal };

    setspec([...spec, specObject]);
    console.log(spec);
  }
  function handlerSubmit(e) {
    e.preventDefault();
    console.log(e, "working");
    let name = e.target.name.value;
    let price = e.target.price.value;
    let stock = e.target.stock.value;
    let sale = e.target.sale.value;
    let category = e.target.chooseCategory.value;
    let brand = e.target.chooseBrand.value;
    let proObject = {
      name,
      price,
      stock,
      sale,
      category,
      brand,
      spec,
    };
    axios
      .post("http://localhost:2020/product", proObject)
      .then((res) => console.log(res));
    console.log(proObject);
    closeOffCanva(false);
    setProduct("");
    location.reload();
  }

  return (
    <div className="offcanvas">
      <div className="offcanvas-content">
        <div className="offcanvas-content-header">
          <button
            onClick={() => {
              closeOffCanva(false);
              setProduct("");
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
              <p> Барааны нэр </p>
              <input
                type="text"
                name="name"
                defaultValue={data ? data.name : ""}
              />
            </label>
            <label>
              <p> Барааны үнэ {"(₮)"}</p>
              <input
                type="number"
                name="price"
                defaultValue={data ? data.price : ""}
              />
            </label>
            <label>
              <p>Үлдэгдэл</p>
              <input
                type="number"
                name="stock"
                defaultValue={data ? data.stock : ""}
              />
            </label>
            <label>
              <p>Хямдрал {"(%-иар)"}</p>
              <input
                type="number"
                name="sale"
                defaultValue={data ? data.stock : ""}
              />
            </label>
          </div>
          <p>Үзүүлэлтүүд</p>
          <div className="spec-inputs" id="addedSpec">
            {data
              ? data.spec.map((spec, i) => {
                  return (
                    <label key={i}>
                      <p>{Object.keys(spec)} </p>
                      <input
                        type="text"
                        name={Object.values(spec)}
                        defaultValue={Object.values(spec)}
                      />
                    </label>
                  );
                })
              : spec.map((newspec, i) => {
                  console.log(newspec.addSpecKey);
                  return (
                    <label key={i}>
                      <p>{newspec.addSpecKey} </p>
                      <input
                        type="text"
                        name={newspec.specKey}
                        defaultValue={newspec.addSpecVal}
                      />
                    </label>
                  );
                })}
            <label>
              <input
                name="specKey"
                type="text"
                placeholder="Тайлбар"
                className="specTitle"
                onChange={(e) => {
                  setAddSpecKey(e.target.value);
                }}
              />
              <input
                name="specvalue"
                type="text"
                placeholder="үзүүлэлт"
                className="specValue"
                onChange={(e) => {
                  setAddSpecVal(e.target.value);
                }}
              />
            </label>
            <input
              className="addProductSpec"
              type="button"
              onClick={addedSpec}
              value="  + Үзүүлэлт нэмэх"
            />
          </div>
          <div className="otherOptoin">
            <label>
              <p>Категори сонгох</p>
              <select name="chooseCategory" id="selectCategory">
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="telescop">telescop</option>
                <option value="laptop">Laptop</option>
                <option value="laptop">Laptop</option>
              </select>
            </label>
            <label>
              <p>Брэнд сонгох</p>
              <select name="chooseBrand" id="selectCategory">
                <option value="laptop">samsung</option>
                <option value="tablet">apple</option>
                <option value="telescop">dell</option>
                <option value="laptop">huwei</option>
                <option value="laptop">sharp</option>
              </select>
            </label>
          </div>
          <button className="saveBtn" type="submit">
            Хадгалах
          </button>
        </form>
      </div>
    </div>
  );
}
