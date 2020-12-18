import { useContext } from "react";
import { NewsContext } from "../utils/newsData";
const token = "ace4d31aaad69f670cdfac9476ce9bdd";
function useClickFetcher() {
  const {
    setNewsArticles,
    newsArticles,
    searchTerm,
    setSearchTerm,
    setHeading,
    setIsLoading
  } = useContext(NewsContext);
  const goBack = () => {
    setNewsArticles([]);
    document.documentElement.scrollTop = 0;
  };
  const getBreakingNews = () => {
    setIsLoading(true);
    fetch("https://gnews.io/api/v4/top-headlines?lang=en&token=" + token)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setIsLoading(false);
        if (data) {
          const { articles } = data;
          articleSetter(articles);
          setHeading("breaking".toUpperCase());
        } else {
          console.log("News Service Error");
        }
      });
  };
  const getNewsByTopic = (propTopic) => {
    setIsLoading(true);
    const text = propTopic;
    setHeading(text.toUpperCase());
    const topic = text.toLowerCase();
    fetch(
      `https://gnews.io/api/v4/top-headlines?lang=en&topic=${topic}&token=${token}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setIsLoading(false);
        if (data) {
          const { articles } = data;
          articleSetter(articles);
        } else {
          console.log("Failed fetch");
        }
      });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const parsedValue = value.replace(/[^a-zA-Z0-9 ]/g, "");
    setSearchTerm(parsedValue);
  };
  const getNewsByTerm = (e) => {
    setIsLoading(true);
    const term = searchTerm;
    setHeading(term.toUpperCase());
    fetch(` https://gnews.io/api/v4/search?q="${term}"&lang=en&token=${token}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setIsLoading(false);
        if (data) {
          const { articles } = data;
          articleSetter(articles);
        } else {
          console.log("fetch failed");
        }
      });
  };
  const getNewsByCountry = (countryProp) => {
    setIsLoading(true);
    const text = countryProp;
    setHeading(text.toUpperCase());
    const country = text.toLowerCase();
    let countryCode = "";
    let url = "";
    if (country === "nigeria") {
      url = ` https://gnews.io/api/v4/search?q=nigeria&lang=en&token=${token}`;
    } else {
      switch (country) {
        case "usa":
          countryCode = "us";
          break;
        case "uk":
          countryCode = "gb";
          break;
        case "australia":
          countryCode = "au";
          break;
        case "canada":
          countryCode = "ca";
          break;
        default:
          countryCode = "us";
      }
      url = `https://gnews.io/api/v4/top-headlines?lang=en&country=${countryCode}&token=${token}`;
    }
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setIsLoading(false);
        if (data) {
          const { articles } = data;
          articleSetter(articles);
        } else {
          console.log("failed fetch");
        }
      });
  };
  const articleSetter = (articles) => {
    setNewsArticles(articles);
    document.documentElement.scrollTop = 0;
  };
  return {
    newsArticles,
    goBack,
    getBreakingNews,
    getNewsByTopic,
    handleChange,
    getNewsByTerm,
    getNewsByCountry
  };
}
export default useClickFetcher;
