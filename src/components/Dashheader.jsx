import { useNavigate } from "react-router-dom";
import Logo from "../icons/Logo";

import "../style/dashHeader.css";
export default function DashHeader() {
  const navigate = useNavigate();
  return (
    <div className="dashHeader">
      <div className="dashHeaderContent container">
        <Logo />
        <div className="dashSearch">
          <input type="text" placeholder="search..." />
          <button>Search</button>
        </div>
        <div className="DashLogout" onClick={() => navigate("/")}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_626_699)">
              <path
                d="M7 17L8.41 15.59L5.83 13L16 13V11L5.83 11L8.41 8.42L7 7L2 12L7 17ZM20 19H12V21H20C21.1 21 22 20.1 22 19L22 5C22 3.9 21.1 3 20 3H12V5H20L20 19Z"
                fill="white"
              />
              <path
                d="M7 17L8.41 15.59L5.83 13L16 13V11L5.83 11L8.41 8.42L7 7L2 12L7 17ZM20 19H12V21H20C21.1 21 22 20.1 22 19L22 5C22 3.9 21.1 3 20 3H12V5H20L20 19Z"
                fill="#000"
              />
            </g>
          </svg>
          <p>Гарах</p>
        </div>
      </div>
    </div>
  );
}
