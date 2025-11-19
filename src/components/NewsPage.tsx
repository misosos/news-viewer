import NewsList from './NewsList'
import Categories from "./Categories";
import {useParams} from "react-router";

export default function NewsPage() {
    const { category } = useParams<{ category?: string }>();
    const currentCategory = category ?? "all"

    return (
        <>
            <Categories />
            <NewsList currentCategory={currentCategory} />
        </>
    );
}