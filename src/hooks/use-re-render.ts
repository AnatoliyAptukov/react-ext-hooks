import { useState } from "react";
function useReRender():() => void {
  const [state, setState] = useState<number>(0);
  return () => {
    setState((count: number) => count + 1);
  };
};
export default useReRender;