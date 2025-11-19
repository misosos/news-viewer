import { useState, useEffect } from "react";
import styles from "../styles/NewsList.module.css";
import NewsItem from "./NewsItem";
import axios from "axios";
import type {Article,NewsListProps} from "../types/news";

export default function NewsList({ currentCategory }: NewsListProps) {
    const [articles, setArticles] = useState<Article[] | null>(null);
    const [loading, setLoading] = useState(false);

    const baseUrl = currentCategory == 'all' ? 'https://newsapi.org/v2/top-headlines?country=us&apiKey=b0df57077b934fdfa647691c2804ab91' :
        `https://newsapi.org/v2/top-headlines?country=us&category=${currentCategory}&apiKey=b0df57077b934fdfa647691c2804ab91`;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(baseUrl);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [currentCategory]);

    if (loading) {
        return <div className={styles.newsListBlock}>Loading...</div>;
    }

    if (!articles) {
        return null;
    }

    return (
        <div className={styles.newsList}>
            {articles.map((article : Article ) => (
                <NewsItem key={article.url} article={article} />
            ))}
        </div>
    );
}
