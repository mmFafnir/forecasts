"use client";
import { FC, useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const UserNavbar: FC = () => {
  const [isMob, setIsMob] = useState<boolean>(false);

  useEffect(() => {
    const onResize = () => {
      setIsMob(window.innerWidth > 601 ? false : true);
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (isMob) return <MobileNavbar />;
  return <DesktopNavbar />;
};

export default UserNavbar;
