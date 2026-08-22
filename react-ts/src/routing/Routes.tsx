import { Navigate, Route, Routes } from "react-router";
import Layout from "../components/global/Layout";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import Posts from "../pages/posts";
import PostDetails from "../pages/posts/components/Details";
import Todos from "../pages/todo-list";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to='/app/home' />} />
            <Route path="/app" element={<Navigate to='/app/home' />} />

            <Route path="/app" element={<Layout />}>
                <Route path="home" element={<Home />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="todo-list" element={<Todos />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:postId" element={<PostDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes