import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

const LayoutHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <nav className="navbar bg-base-100">
          <Menu
            links={[
              { name: "Правила", href: "/rules" },
              { name: "Додатки", href: "/features" },
              { name: "Карта", href: "/in-progress" },
            ]}
          />
          <Logo logoName={"no boobs"} />
          <div className="navbar-end gap-6 hidden sm:flex">
            <button
              className="w-fit btn-ghost btn-circle btn p-2"
              onClick={() => navigate("/rules")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              Правила
            </button>
            <button
              className="w-fit btn-ghost btn-circle btn p-2 mr-6"
              onClick={() => navigate("/features")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              Додатки
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

function Notification() {
  return (
    <div className="indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
      <span className="badge badge-primary badge-xs indicator-item"></span>
    </div>
  );
}

export default LayoutHeader;
