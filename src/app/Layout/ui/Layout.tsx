import { FC } from "react";
import { LayoutFooter, LayoutHeader, FixedAnnouncement } from "@/widgets";
import { Outlet } from "react-router-dom";
import { Snowfall } from "react-snowfall";
import { ChristmasLights } from "./christmas";

const isMobile = () => window.innerWidth <= 768;

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <LayoutHeader />
      <main className="min-h-full bg-base-200">
        <ChristmasLights />
        <Outlet />
      </main>
      <LayoutFooter />
      <FixedAnnouncement message="бета версія" />
      <Snowfall
        color="#fff"
        snowflakeCount={isMobile() ? 40 : 100}
        radius={[1, 2]}
        speed={[0.8, 1]}
        wind={[0.1, 0.2]}
      />
    </div>
  );
};

export default Layout;
