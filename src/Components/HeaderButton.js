import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

function HeaderButton({ text, link, count }) {
  return (
    <div className="header__button-link">
      <NavLink
        className={({ isActive }) =>
          isActive ? "bg-white rounded-lg text-blue-700" : ""
        }
        to={link}
      >
        {text}
        {count && (
          <>
            {" "}
            <FontAwesomeIcon icon={faCartPlus} />{" "}
            <span className="badge">{count}</span>
          </>
        )}
      </NavLink>
    </div>
  );
}

export default HeaderButton;
