import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";
export default function OffCanvas(prop) {
  const { closeOffCanva } = prop;
  let temp = [];
  const [spec, setspec] = useState([]);
  const [addSpecKey, setAddSpecKey] = useState();
  const [addSpecVal, setAddSpecVal] = useState();
  function addedSpec(e) {
    e.preventDefault();
    let specKey = e.target.specKey.value;
    let specVal = e.target.specvalue.value;
    let specObject = { specKey, specVal };

    setspec([...spec, specObject]);
    e.target.specKey.value = "";
  }
  function handlerSubmit(e) {
    // e.preventDefault();
    console.log(e, "working");
  }

  return (
    <div className="offcanvas">
      <div className="offcanvas-content">
        <div className="offcanvas-content-header">
          <button onClick={() => closeOffCanva(false)}>
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
                defaultValue=""
                form="addedProduct"
              />
            </label>
            <label>
              <p> Барааны үнэ {"(₮)"}</p>
              <input type="number" name="price" form="addedProduct" />
            </label>
            <label>
              <p>Үлдэгдэл</p>
              <input type="number" name="stock" form="addedProduct" />
            </label>
            <label>
              <p>Хямдрал {"(%-иар)"}</p>
              <input type="number" name="sale" form="addedProduct" />
            </label>
          </div>

          <p>Үзүүлэлтүүд</p>
          <form className="spec-inputs" onSubmit={addedSpec} id="addedSpec">
            {spec.map((newspec, i) => {
              console.log(newspec.specVal);
              return (
                <label key={i}>
                  <p>{newspec.specKey} </p>
                  <input
                    type="text"
                    form="addedSpec"
                    name={newspec.specKey}
                    defaultValue={newspec.specVal}
                  />
                </label>
              );
            })}
            <label>
              <input
                form="addedSpec"
                name="specKey"
                type="text"
                placeholder="Тайлбар"
                className="specTitle"
                onChange={(e) => {
                  setAddSpecKey(e.target.value);
                }}
              />
              <input
                form="addedSpec"
                name="specvalue"
                type="text"
                placeholder="үзүүлэлт"
                className="specValue"
                onChange={(e) => {
                  setAddSpecVal(e.target.value);
                }}
              />
            </label>
            <button className="addProductSpec" type="submit" form="addedSpec">
              + Үзүүлэлт нэмэх
            </button>
          </form>

          <div className="otherOptoin">
            <label>
              <p>Категори сонгох</p>
              <select name="category" id="selectCategory" form="addedProduct">
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="telescop">telescop</option>
                <option value="laptop">Laptop</option>
                <option value="laptop">Laptop</option>
              </select>
            </label>
            <label>
              <p>Брэнд сонгох</p>
              <select name="category" id="selectCategory" form="addedProduct">
                <option value="laptop">samsung</option>
                <option value="tablet">apple</option>
                <option value="telescop">dell</option>
                <option value="laptop">huwei</option>
                <option value="laptop">sharp</option>
              </select>
            </label>
          </div>
          <button className="saveBtn" type="submit" form="addedProduct">
            Хадгалах
          </button>
        </form>
      </div>
    </div>
  );
}
