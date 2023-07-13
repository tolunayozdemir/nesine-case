import { useCallback, useEffect, useState } from "react";

const useLazyRender = (data: unknown[], rowHeight: number) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setDisplayEnd] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  const offset = screenHeight;
  const rowCountToRender = Math.floor((screenHeight + offset) / rowHeight);

  const setDisplayPositions = useCallback(
    (scroll: number) => {
      const scrollWithOffset = Math.floor(scroll - rowCountToRender - offset / 2);
      const startIndex = Math.round(Math.max(0, Math.floor(scrollWithOffset / rowHeight)));

      const endIndex = Math.round(Math.min(startIndex + rowCountToRender, data.length));

      setStartIndex(startIndex);
      setDisplayEnd(endIndex);
    },
    [data, offset, rowCountToRender, rowHeight]
  );

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);
      setDisplayPositions(scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setDisplayPositions, data]);

  useEffect(() => {
    setDisplayPositions(scrollPosition);
  }, [scrollPosition, setDisplayPositions]);

  return { startIndex, endIndex };
};

export default useLazyRender;
