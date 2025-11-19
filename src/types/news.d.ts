export interface Category {
    name: string;
    text: string;
}

export interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

export type NewsListProps = {
    currentCategory: string;
}