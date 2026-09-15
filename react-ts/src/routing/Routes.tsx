import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import AppLayout from "../components/global/AppLayout";
import MainLoading from "../components/global/MainLoading";

const Login = lazy(() => import('../pages/login'));
const RecoverPass = lazy(() => import('../pages/recover-pass'));
const Home = lazy(() => import('../pages/home'));
const Profile = lazy(() => import('../pages/profile'));
const AboutUs = lazy(() => import('../pages/about-us'));
const ContactUs = lazy(() => import('../pages/contact-us'));
const Posts = lazy(() => import('../pages/posts'));
const CreatePost = lazy(() => import('../pages/posts/components/CreatePost'));
const PostDetails = lazy(() => import('../pages/posts/components/Details'));
const DropDrilling = lazy(() => import('../pages/drop-drilling'));
const TestContext = lazy(() => import('../pages/login'));
const Counter = lazy(() => import('../pages/counter'));
const MuiPage = lazy(() => import('../pages/mui'));
const NotFound = lazy(() => import('../pages/not-found'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<MainLoading />}>
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
    )
}

export default AppRoutes