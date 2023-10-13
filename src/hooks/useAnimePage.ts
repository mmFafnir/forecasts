import { useEffect, useState } from "react";

export const useAnimePage = () => {
  const [styles, setStyles] = useState({
    opacity: "0",
    transitionDuration: "0.3s",
  });

  const handleStart = () => {
    setStyles({
      opacity: "0",
      transitionDuration: "0.3s",
    });
  };
  const handleComplete = () => {
    setStyles({
      opacity: "1",
      transitionDuration: "0.3s",
    });
  };
  useEffect(() => {
    handleStart();
    return () => {
      handleComplete();
    };
  }, []);

  return styles;
};
