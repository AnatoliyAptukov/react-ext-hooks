import {useState, useEffect} from "react";
import {ResizeObserver} from "@juggle/resize-observer";
type UseResizeObserverProps =
  | {
      elementRef: React.MutableRefObject<HTMLElement>;
      parentLevel?: number;
    }
  | {
      watchEntirePage: true;
    };


function useResizeObserver  ({
  ...props
}: UseResizeObserverProps): {
  width?: number;
  height?: number;
}  {
  const [width, setWidth] = useState<number>(undefined as number);
  const [height, setHeight] = useState<number>(undefined as number);
  useEffect(attachObserverEffect);
  function attachObserverEffect() {
    if (!props["watchEntirePage"] && !props["elementRef"].current) {
      return;
    }
    const elementToObserve = getElementToObserve();
    const resizeObserver = new ResizeObserver(updateWidthAndHeightOnResize);
    resizeObserver.observe(elementToObserve);
    return () => {
      resizeObserver.disconnect();
    };
  }

  function getElementToObserve(): HTMLElement {
    if (props["watchEntirePage"]) {
      return document.body;
    }
    if (!props["parentLevel"]) {
      return props["elementRef"].current;
    }
    let elementToObserve = props["elementRef"].current as HTMLElement;
    for (let i = 0; i < props["parentLevel"]; i++) {
      elementToObserve = elementToObserve.parentElement;
    }
    return elementToObserve;
  }

  function updateWidthAndHeightOnResize([
    {
      contentRect: { width: contentWidth, height: contentHeight },
    },
  ]: ResizeObserverEntry[]) {
    contentWidth !== null && setWidth(contentWidth);
    contentHeight !== null && setHeight(contentHeight);
  }
  return {
    width,
    height,
  };
};

export default useResizeObserver;