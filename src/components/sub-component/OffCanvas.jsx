import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";
export default function OffCanvas(prop) {
  const { closeOffCanva } = prop;
  const [spec, setspec] = useState(<></>);
  let temp;
  function handleSubmit(e) {
    e.preventDefault();
    let specKey = e.target.specKey.value;
    let specVal = e.target.specvalue.value;
    setspec(temp);
    console.log(specKey, specVal);
    setspec(<SpecLabel key={specKey} val={specVal} />);
  }

  return (
    <div className="offcanvas">
      <div className="offcanvas-content">
        <div className="offcanvas-content-header">
          <button onClick={() => closeOffCanva(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="offcanvas-main">
          <div className="offcanvas-main-inputs">
            <label>
              <p> Барааны нэр </p>
              <input type="text" name="name" />
            </label>
            <label>
              <p> Барааны үнэ {"(₮)"}</p>
              <input type="number" name="price" />
            </label>
            <label>
              <p>Үлдэгдэл</p>
              <input type="number" name="stock" />
            </label>
            <label>
              <p>Хямдрал {"(%-иар)"}</p>
              <input type="number" name="sale" />
            </label>
          </div>

          <p>Үзүүлэлтүүд</p>
          <form className="spec-inputs" onSubmit={handleSubmit}>
            {spec}
            <label>
              <input
                name="specKey"
                type="text"
                placeholder="Тайлбар"
                className="specTitle"
              />
              <input
                name="specvalue"
                type="text"
                placeholder="үзүүлэлт"
                className="specValue"
              />
            </label>
            <button className="addProductSpec" type="submit">
              + Үзүүлэлт нэмэх
            </button>
          </form>

          <div className="otherOptoin">
            <label>
              <p>Категори сонгох</p>
              <select name="category" id="selectCategory">
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
                <option value="telescop">telescop</option>
                <option value="laptop">Laptop</option>
                <option value="laptop">Laptop</option>
              </select>
            </label>
            <label>
              <p>Брэнд сонгох</p>
              <select name="category" id="selectCategory">
                <option value="laptop">samsung</option>
                <option value="tablet">apple</option>
                <option value="telescop">dell</option>
                <option value="laptop">huwei</option>
                <option value="laptop">sharp</option>
              </select>
            </label>
          </div>
          <button className="saveBtn">Хадгалах</button>
        </div>
      </div>
    </div>
  );
}
export function SpecLabel(prop) {
  const { key, val } = prop;
  inputChangedHandler = (event) => {
    const val = event.target.value;
    // May be call for search result
  };

  return (
    <label>
      <p>{key}</p>
      <input
        type="text"
        name="sale"
        value={val}
        defaultValue="Search..."
        onChange={(event) => this.inputChangedHandler(event)}
      />
    </label>
  );
}
