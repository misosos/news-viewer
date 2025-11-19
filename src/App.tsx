import {Route,Routes} from "react-router";
import NewsPage from "./components/NewsPage"

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<NewsPage/>}/>
            <Route path="/:category" element={<NewsPage />} />
        </Routes>
    )
}