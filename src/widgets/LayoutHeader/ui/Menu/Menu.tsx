import type { FC } from "react";
import { Link } from "react-router-dom";
import type { Menu as MenuType } from "../../model/types";

const Menu: FC<MenuType> = ({ links }: MenuType) => {
  return (
    <>
      <div className="navbar-start dropdown">
        <div
          tabIndex={0}
          // biome-ignore lint/a11y/useSemanticElements: <explanation>
          role="button"
          className="btn m-1 btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <title>Меню</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul className="dropdown-content menu menu-sm bg-base-100 rounded-box z-[50] w-52 p-2 shadow">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
