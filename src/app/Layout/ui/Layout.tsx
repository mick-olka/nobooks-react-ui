import { FC } from "react";
import { LayoutFooter, LayoutHeader, FixedAnnouncement } from "@/widgets";
import { Outlet } from "react-router-dom";
import { ChristmasLights, FallingSnow } from "./christmas";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <LayoutHeader />
      <main className="min-h-full bg-base-200">
        <ChristmasLights />
        <Outlet />
      </main>
      <LayoutFooter />
      <FixedAnnouncement message="v1.21-1.21.4" />
      <FallingSnow />
    </div>
  );
};

export default Layout;
