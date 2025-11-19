import {NavLink} from "react-router";
import styles from "../styles/Categories.module.css";
import type {Category} from "../types/news";

export default function Categories()  {

    const categories : Category[] = [
        { name: 'all', text: '전체보기' },
        { name: 'business', text: '비즈니스' },
        { name: 'entertainment', text: '엔터테인먼트'},
        { name: 'health', text: '건강'},
        { name: 'science', text: '과학' },
        { name: 'sports', text: '스포츠'},
        { name: 'technology', text: '기술'},
    ];

    return (
        <div className={styles.categoryBlock}>
            {categories.map((c) => (
                <NavLink
                    key={c.name}
                    className={({ isActive }) =>
                        isActive
                            ? `${styles.category} ${styles.categoryActive}`
                            : styles.category
                    }
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </NavLink>
            ))}
        </div>
    );
}