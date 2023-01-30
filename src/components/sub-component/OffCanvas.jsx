import axios from "axios";
import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";

export default function OffCanvas(prop) {
  const { closeOffCanva, data, setProduct } = prop;
  let [spect, setspec] = useState([]);
  const [addSpecKey, setAddSpecKey] = useState();
  const [addSpecVal, setAddSpecVal] = useState();

  let newSpec = [];

  if (data) {
    data.spec.map((e) => {
      newSpec.push(e);
    });
  }
  function updateSpec(e) {
    let label = e.target.labels[0].innerText;
    let val = e.target.value;

    newSpec.map((e) => {
      if (Object.keys(e) == label) {
        e[label] = val;
      }
    });
  }
  function addedSpec(e) {
    e.preventDefault();

    let specObject = {};
    specObject[addSpecKey] = addSpecVal;
    setspec([...spect, specObject]);
    console.log(spect);
  }
  function handlerSubmit(e) {
    e.preventDefault();
    let name = e.target.name.value;
    let price = e.target.price.value;
    let stock = e.target.stock.value;
    let sale = e.target.sale.value;
    let category = e.target.chooseCategory.value;
    let brand = e.target.chooseBrand.value;
    let image = data && data.image;
    let id = data && data.id;
    let spec = data ? newSpec : spect;
    let proObject = data
      ? {
          name,
          image,
          price,
          stock,
          sale,
          category,
          brand,
          spec,
          id,
        }
      : {
          name,
          price,
          stock,
          sale,
          category,
          brand,
          spec,
        };
    console.log(proObject);
    if (data) {
      axios
        .put(`http://localhost:2020/product/${data.id}`, proObject)
        .then((res) => console.log(res));
      console.log(proObject);
    } else {
      axios
        .post("http://localhost:2020/product", proObject)
        .then((res) => console.log(res));
      console.log(proObject);
    }
    closeOffCanva(false);
    location.reload();
    setProduct(undefined);
  }
  // console.log(data);

  return (
    <div className="offcanvas">
      <div className="offcanvas-content">
        <div className="offcanvas-content-header">
          <button
            onClick={() => {
              closeOffCanva(false);
              setProduct(undefined);
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
                defaultValue={data ? data.sale : ""}
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
                        onChange={updateSpec}
                      />
                    </label>
                  );
                })
              : spect.map((newspec, i) => {
                  return (
                    <label key={i}>
                      <p>{Object.keys(newspec)}</p>
                      <input
                        type="text"
                        name={Object.values(newspec)}
                        defaultValue={Object.values(newspec)}
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
                {data && <option value={data.category}>{data.category}</option>}
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="telescop">telescop</option>
                <option value="laptop">Laptop</option>
                <option value="laptop">Laptop</option>
              </select>
            </label>
            <label>
              <p>Брэнд сонгох</p>
              <select name="chooseBrand" id="chooseBrand">
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
