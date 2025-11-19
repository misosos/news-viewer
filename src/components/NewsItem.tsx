import styles from "../styles/NewsItem.module.css";
import type {Article} from "../types/news";

export default function NewsItem({article,}: {article: Article}) {
    const { title, description, url, urlToImage } = article;
    return (
        <div className={styles.newsItem}>
            {urlToImage && (
                <div className={styles.thumbnail}>
                    <a href={url} target="_blank" rel="noopener noreferrrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}

            <div className={styles.contents}>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </div>
    );
}