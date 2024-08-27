import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = () => {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles)); // Corrected from 'data.article' to 'data.articles'
    }, []);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {
                articles.map((news, index) => {
                    return (
                        <NewsItem
                            key={index}
                            title={news.title}
                            description={news.description}
                            src={news.urlToImage}
                            url={news.url}
                        />
                    );
                })
            }
        </div>
    );
};

export default NewsBoard;
