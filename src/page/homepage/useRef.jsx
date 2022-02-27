import { useRef, useEffect } from "react";

export const useIsMount = () => {
  const mountRef = useRef(false);

  useEffect(() => {
    mountRef.current = true;
  }, []);

  return () => mountRef.current;
};
