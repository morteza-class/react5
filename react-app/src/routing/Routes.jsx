import { Navigate, Route, Routes } from "react-router";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";
import NotFound from "../pages/not-found";
import Posts from "../pages/posts";
import Todos from "../pages/todo-list";
import PostDetails from "../pages/posts/components/Details";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/todo-list" element={<Todos />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:postId" element={<PostDetails />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes