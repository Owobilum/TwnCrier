import React, { useState, useEffect, createContext } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
const NewsContext = createContext();
function NewsDataProvider(props) {
  const [newsArticles, setNewsArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [heading, setHeading] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const alanK =
    "493ee23c644af3b089303e5d7ac6341a2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanK,
      onCommand: ({
        command,
        allNewsArticles,
        pageHeading,
        highlightedArticle,
        articleNumber
      }) => {
        switch (command) {
          case "newCommand":
            setNewsArticles(allNewsArticles);
            setHeading(pageHeading);
            document.documentElement.scrollTop = 0;
            break;
          case "highlight":
            setCurrentArticle(highlightedArticle);
            break;
          case "open":
            if (articleNumber.length <= 2) {
              let y = parseInt(articleNumber, 10) - 1;
              y > -1 && y < allNewsArticles.length
                ? window.open(allNewsArticles[y].url)
                : alanBtn().playText(
                    `Sorry, there are only ${allNewsArticles.length} articles loaded`
                  );
            } else if (articleNumber.length > 2) {
              wordsToNumbers(articleNumber, { fuzzy: true }) <=
                allNewsArticles.length &&
              wordsToNumbers(articleNumber, { fuzzy: true }) > 0
                ? window.open(
                    allNewsArticles[
                      wordsToNumbers(articleNumber, { fuzzy: true }) - 1
                    ].url
                  )
                : alanBtn().playText(
                    "Please try again. You provided an invalid article number"
                  );
            }
            break;
          default:
            return;
        }
      }
    });
  }, []);

  return (
    <NewsContext.Provider
      value={{
        newsArticles,
        currentArticle,
        heading,
        setHeading,
        setNewsArticles,
        searchTerm,
        setSearchTerm,
        isLoading,
        setIsLoading
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
}
export { NewsDataProvider, NewsContext };
