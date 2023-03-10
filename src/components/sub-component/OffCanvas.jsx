import axios from "axios";
import { useEffect, useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";

export default function OffCanvas(prop) {
  const { closeOffCanva, data, setProduct, fullData, setRefesh } = prop;
  let [spect, setspec] = useState([]);
  const [addSpecKey, setAddSpecKey] = useState();
  const [addSpecVal, setAddSpecVal] = useState();

  let tempCategory = [];
  useEffect(() => {
    let temp = [];
    if (data) {
      data.spec.map((e) => {
        temp.push(e);
      });
    }
    setspec([...temp]);
  }, []);

  function updateSpec(e) {
    let label = e.target.labels[0].innerText;
    let val = e.target.value;

    spect.map((e) => {
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
    let image = data ? data.image : null;
    let id = data ? data.id : null;
    let spec = spect;
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
    if (data) {
      axios
        .put(`http://localhost:2020/product/${data.id}`, proObject)
        .then((res) => setRefesh(res));
      console.log(proObject);
    } else {
      axios
        .post("http://localhost:2020/product", proObject)
        .then((res) => setRefesh(res));
      console.log(proObject);
    }
    closeOffCanva(false);
    setProduct(undefined);
  }

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
              <p> ?????????????? ?????? </p>
              <input
                type="text"
                name="name"
                defaultValue={data ? data.name : ""}
              />
            </label>
            <label>
              <p> ?????????????? ?????? {"(???)"}</p>
              <input
                type="number"
                name="price"
                defaultValue={data ? data.price : ""}
              />
            </label>
            <label>
              <p>????????????????</p>
              <input
                type="number"
                name="stock"
                defaultValue={data ? data.stock : ""}
              />
            </label>
            <label>
              <p>?????????????? {"(%-??????)"}</p>
              <input
                type="number"
                name="sale"
                defaultValue={data ? data.sale : ""}
              />
            </label>
          </div>
          <p>??????????????????????</p>
          <div className="spec-inputs" id="addedSpec">
            {spect.map((newspec, i) => {
              return (
                <label key={i}>
                  <p>{Object.keys(newspec)}</p>
                  <input
                    type="text"
                    name={Object.values(newspec)}
                    defaultValue={Object.values(newspec)}
                    onChange={updateSpec}
                  />
                </label>
              );
            })}
            <label>
              <input
                name="specKey"
                type="text"
                placeholder="??????????????"
                className="specTitle"
                onChange={(e) => {
                  setAddSpecKey(e.target.value);
                }}
              />
              <input
                name="specvalue"
                type="text"
                placeholder="????????????????"
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
              value="  + ???????????????? ??????????"
            />
          </div>
          <div className="otherOptoin">
            <label>
              <p>???????????????? ????????????</p>
              <select name="chooseCategory" id="selectCategory">
                {data && <option value={data.category}>{data.category}</option>}
                {fullData.map((e, i) => {
                  if (!tempCategory.includes(e.category)) {
                    tempCategory.push(e.category);
                    return (
                      <option key={i} value={e.category}>
                        {e.category}
                      </option>
                    );
                  }
                  return;
                })}
              </select>
            </label>
            <label>
              <p>?????????? ????????????</p>
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
            ????????????????
          </button>
        </form>
      </div>
    </div>
  );
}
