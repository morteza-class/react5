import { Navigate, Route, Routes } from "react-router";
import AppLayout from "../components/global/AppLayout";
import AboutUs from "../pages/about-us";
import ContactUs from "../pages/contact-us";
import Home from "../pages/home";
import Login from "../pages/login";
import NotFound from "../pages/not-found";
import Posts from "../pages/posts";
import PostDetails from "../pages/posts/components/Details";
import Profile from "../pages/profile";
import RecoverPass from "../pages/recover-pass";
import Todos from "../pages/todo-list";
import DropDrilling from "../pages/drop-drilling";
import TestContext from "../pages/test-context";
import Counter from "../pages/counter";

const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/recover-password" element={<RecoverPass />} />
            <Route path="/" element={<Navigate to='/app/home' />} />
            <Route path="/app" element={<Navigate to='/app/home' />} />

            <Route path="/app" element={<AppLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="todo-list" element={<Todos />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:postId" element={<PostDetails />} />
                <Route path="drop-drilling" element={<DropDrilling />} />
                <Route path="test-context" element={<TestContext />} />
                <Route path="counter" element={<Counter />} />
            </Route>


            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes