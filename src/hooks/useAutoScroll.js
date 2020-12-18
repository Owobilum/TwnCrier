import { useContext, useEffect, useRef } from "react";
import { NewsContext } from "../utils/newsData";
function useAutoScroll() {
  const { currentArticle } = useContext(NewsContext);
  const gridItemsRef = useRef([]);
  gridItemsRef.current = [];
  const addToRefs = (el) => {
    if (el && !gridItemsRef.current.includes(el)) {
      gridItemsRef.current.push(el);
    }
  };
  useEffect(() => {
    if (currentArticle || currentArticle === 0) {
      for (let i = 0; i < gridItemsRef.current.length; i++) {
        if (currentArticle === i) {
          const bodyRect = document.body.getBoundingClientRect(),
            elemRect = gridItemsRef.current[i].getBoundingClientRect(),
            offset = elemRect.top - bodyRect.top;
          document.documentElement.scrollTop = offset;
        }
      }
    }
  }, [currentArticle]);

  return [addToRefs];
}
export default useAutoScroll;
