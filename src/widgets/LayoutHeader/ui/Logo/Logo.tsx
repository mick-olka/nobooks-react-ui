import type { Logo as LogoType } from "@/widgets/LayoutHeader/model/types";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const Logo: FC<LogoType> = ({ logoName, redirectTo }: LogoType) => {
	const navigate = useNavigate();
	return (
		<button
			className="navbar-center"
			onClick={() => navigate(redirectTo || "/")}
			type="button"
			tabIndex={0}
		>
			{/* <img src="/images/logo1.png" className="w-8 h-8" /> */}
			<img src="/images/logo_snow.png" className="w-8 h-8" alt="Logo" />
			<a href={redirectTo || "/"} className="btn-ghost btn text-xl normal-case">
				{logoName}
			</a>
		</button>
	);
};

export default Logo;
