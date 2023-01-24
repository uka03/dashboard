import CloseIcon from "../../icons/CloseIcon";
import "../../style/mainStyle/offcanvas.css";
export default function OffCanvas() {
  return (
    <div className="offcanvas">
      <div className="offcanvas-content">
        <div className="offcanvas-content-header">
          <button>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
