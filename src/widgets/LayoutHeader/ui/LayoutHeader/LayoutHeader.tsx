import { Logo } from "@/widgets";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";

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
              { name: "Карта", href: "/map" },
              { name: "ЧаПи", href: "/faq" },
            ]}
          />
          <Logo logoName={"no boobs"} />
          <div className="navbar-end hidden lg:flex">
            <button
              className="w-32 btn-ghost btn-circle btn p-2"
              onClick={() => navigate("/rules")}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Правила</title>
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
              className="w-32 btn-ghost btn-circle btn p-2"
              onClick={() => navigate("/map")}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Карта</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Карта
            </button>
            <button
              className="w-32 btn-ghost btn-circle btn p-2"
              onClick={() => navigate("/faq")}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>ЧаПи</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              ЧаПи
            </button>
            <button
              className="w-32 btn-ghost btn-circle btn p-2"
              onClick={() => navigate("/features")}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <title>Додатки</title>
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

// function Notification() {
//   return (
//     <div className="indicator">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//         />
//       </svg>
//       <span className="badge badge-primary badge-xs indicator-item"></span>
//     </div>
//   );
// }

export default LayoutHeader;
