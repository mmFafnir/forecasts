"use client";
import { FC, useEffect, useState } from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import Loader from "../UI/Loader";

const UserNavbar: FC = () => {
  const [isMob, setIsMob] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const onResize = () => {
      setIsMob(window.innerWidth > 601 ? false : true);
      setLoading(false);
    };
    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (loading) return <Loader style={{ height: "100px" }} />;
  if (isMob) return <MobileNavbar />;
  return <DesktopNavbar />;
};

export default UserNavbar;
