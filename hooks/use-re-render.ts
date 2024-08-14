import { useState } from "react";
function useReRender() {
  const [state, setState] = useState(0);
  return () => {
    setState((count: number) => count + 1);
  };
};
export default useReRender;