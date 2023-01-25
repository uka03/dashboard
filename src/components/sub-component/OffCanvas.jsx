import { useState } from "react";
import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";
export default function OffCanvas(prop) {
  const { closeOffCanva } = prop;
  let temp = [];
  const [spec, setspec] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    let specKey = e.target.specKey.value;
    let specVal = e.target.specvalue.value;
    let specObject = { specKey, specVal };

    setspec([...spec, specObject]);
    console.log(spec);
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
              <input type="text" name="name" value="sujgfd" />
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
            {spec.map((newspec) => {
              console.log(newspec);
              return (
                <label>
                  <p>{newspec.specKey} </p>
                  <input
                    type="text"
                    name={newspec.specKey}
                    value={newspec.specvalue}
                    defaultValue={newspec.specvalue}
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
