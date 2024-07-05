import { useState } from "react";
function useReRender() {
  const [state, setState] = useState(0);
  return () => {
    setState((count) => {
      count + 1;
    });
  };
};

module.export = useReRender;
