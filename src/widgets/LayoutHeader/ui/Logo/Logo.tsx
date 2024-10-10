import { FC } from "react";
import { Logo as LogoType } from "@/widgets/LayoutHeader/model/types";
import { useNavigate } from "react-router-dom";

const Logo: FC<LogoType> = ({ logoName, redirectTo }: LogoType) => {
  const navigate = useNavigate();
  return (
    <div className="navbar-center" onClick={() => navigate(redirectTo || "/")}>
      <img src="/images/logo1.png" className="w-8 h-8" />
      <a className="btn-ghost btn text-xl normal-case">{logoName}</a>
    </div>
  );
};

export default Logo;
