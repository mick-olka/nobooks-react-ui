import { Snowfall } from "react-snowfall";

const isMobile = () => window.innerWidth <= 768;

export const FallingSnow = () => {
	return (
		<Snowfall
			color="#fff"
			snowflakeCount={isMobile() ? 40 : 100}
			radius={[1, 2]}
			speed={[0.8, 1]}
			wind={[0.1, 0.2]}
			style={{ zIndex: 1 }}
		/>
	);
};
