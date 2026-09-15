import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import AppLayout from "../components/global/AppLayout";

const AboutUs = lazy(() => import("../pages/about-us"));
const ContactUs = lazy(() => import("../pages/contact-us"));
const Counter = lazy(() => import("../pages/counter"));
const DropDrilling = lazy(() => import("../pages/drop-drilling"));
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const MuiPage = lazy(() => import("../pages/mui"));
const NotFound = lazy(() => import("../pages/not-found"));
const Posts = lazy(() => import("../pages/posts"));
const CreatePost = lazy(() => import("../pages/posts/components/CreatePost"));
const PostDetails = lazy(() => import("../pages/posts/components/Details"));
const Profile = lazy(() => import("../pages/profile"));
const RecoverPass = lazy(() => import("../pages/recover-pass"));
const TestContext = lazy(() => import("../pages/test-context"));
// const Todos = lazy(() => import("../pages/todo-list"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div className="fixed top-0 left-0 bg-red-500 w-screen h-screen text-white text-4xl flex justify-center items-center">Loading...</div>}>
            <Routes>

                <Route path="/login" element={<Login />} />
                <Route path="/recover-password" element={<RecoverPass />} />

                <Route path="/" element={<Navigate to="/app/home" />} />
                <Route path="/app" element={<Navigate to="/app/home" />} />

                <Route path="/app" element={<AppLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="contact-us" element={<ContactUs />} />
                    {/* <Route path="todo-list" element={<Todos />} /> */}
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts/create" element={<CreatePost />} />
                    <Route path="posts/:postId" element={<PostDetails />} />
                    <Route path="drop-drilling" element={<DropDrilling />} />
                    <Route path="test-context" element={<TestContext />} />
                    <Route path="counter" element={<Counter />} />
                    <Route path="mui" element={<MuiPage />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </Suspense>
    );
};

export default AppRoutes;