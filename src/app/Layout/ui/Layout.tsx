import { FC } from "react";
import { LayoutFooter, LayoutHeader, FixedAnnouncement } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="h-screen overflow-x-hidden">
      <LayoutHeader />
      <main className="min-h-full">
        <Outlet />
      </main>
      <LayoutFooter />
      <FixedAnnouncement message="beta version" />
    </div>
  );
};

export default Layout;
