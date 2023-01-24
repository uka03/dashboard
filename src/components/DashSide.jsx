import { useNavigate } from "react-router-dom";
import ContolPanelIcon from "../icons/ControlPanelIcon";
import ModeratorIcon from "../icons/ModeratorIcon";
import OrderIcon from "../icons/OrderIcon";
import ProductsIcon from "../icons/ProductsIcon";
import SettingsIcon from "../icons/SettingsIcon";
import UsersIcon from "../icons/UsersIcon";
import "../style/dashSide.css";
export default function DashSide() {
  const navigate = useNavigate();
  return (
    <div className="dashSide ">
      <div className="dashSideContent ">
        <button onClick={() => navigate("*")}>
          <ContolPanelIcon />
          Хянах самбар
        </button>
        <button onClick={() => navigate("dashProducts")}>
          <ProductsIcon />
          Бүтээгдэхүүнүүд
        </button>
        <button onClick={() => navigate("order")}>
          <OrderIcon />
          Захиалгууд
        </button>
        <button onClick={() => navigate("users")}>
          <UsersIcon />
          Хэрэглэгчид
        </button>
        <button onClick={() => navigate("moderator")}>
          <ModeratorIcon />
          Модератор
        </button>
        <button onClick={() => navigate("settigns")}>
          <SettingsIcon /> Тохиргоо
        </button>
      </div>
    </div>
  );
}
