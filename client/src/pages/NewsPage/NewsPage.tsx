import "./NewsPage.css";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorPage from "../ErrorPage/ErrorPage";
import Line from "../../components/Line/Line";
import Card from "../../components/Card/Card";
import queryFetch from "../../utils/queryFetch";

export interface NewsArticleImage {
  url: string;
  alternativeText: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
  images: NewsArticleImage[];
}

const NewsPage = () => {
  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: ["news-articles"],
    queryFn: () =>
      queryFetch({
        endPoint: "/news-articles",
        sortBy: "date",
        sortOrder: "DESC",
      }),
  });

  const newsArticlesData: NewsArticle[] = data?.data;

  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setselectedCategory] = useState("All");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setselectedCategory(event.target.value);
    setSearchValue("");
  };

  const filteredNewsArticles = newsArticlesData?.filter(
    (newsArticle: NewsArticle) => {
      const titleMatches = newsArticle.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const summaryMatches = newsArticle.summary
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const categoryMatches =
        selectedCategory === "All" || newsArticle.category === selectedCategory;
      return (titleMatches || summaryMatches) && categoryMatches;
    }
  );

  return (
    <>
      {isLoading && <LoadingPage />}
      {isError && <ErrorPage error={error} />}
      {isSuccess && (
        <div className="news-page">
          <h1 className="news-page-title">News</h1>
          <Line extraClass={"news-page-line"} />
          <form className="news-form">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="news-form-category"
            >
              <option value="All">All</option>
              {[
                ...new Set(
                  newsArticlesData.map((newsArticle) => newsArticle.category)
                ),
              ].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={handleSearch}
              className="news-form-search"
            />
            <p className="news-form-filter-results">
              {filteredNewsArticles.length} News Article
              {filteredNewsArticles.length > 1 ? "s" : ""} found
            </p>
          </form>
          <div className="news-cards-list-container">
            {filteredNewsArticles.map((newsArticle) => {
              const { id, title, slug, date, category, tags, summary } =
                newsArticle;
              const { url, alternativeText } = newsArticle.images[0];
              return (
                <Card
                  key={id}
                  title={title}
                  slug={slug}
                  image={url}
                  alternativeText={alternativeText}
                  date={date}
                  category={category}
                  tags={tags}
                  summary={summary}
                  pageName="news"
                  passedClass="content"
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsPage;
